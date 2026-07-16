import React, { useState, useEffect } from 'react';
import { Play, Square, RotateCcw, Folder, Clock as ClockIcon, Plus, ChevronDown, ChevronRight } from 'lucide-react';
import './TimerHub.css';

interface TimerProfile {
  id: string;
  name: string;
  minutes: number;
}

interface Category {
  id: string;
  name: string;
  profiles: TimerProfile[];
}

const defaultCategories: Category[] = [
  {
    id: 'c1',
    name: 'Work & Focus',
    profiles: [
      { id: 'p1', name: 'Deep Work', minutes: 60 },
      { id: 'p2', name: 'Admin & Emails', minutes: 25 },
    ]
  },
  {
    id: 'c2',
    name: 'Fitness',
    profiles: [
      { id: 'p3', name: 'Stretching Routine', minutes: 10 },
      { id: 'p4', name: 'Plank Intervals', minutes: 2 },
    ]
  },
  {
    id: 'c3',
    name: 'Breaks',
    profiles: [
      { id: 'p5', name: 'Quick Break', minutes: 5 },
    ]
  }
];

const TimerHub: React.FC = () => {
  const [categories] = useState<Category[]>(defaultCategories);
  const [expandedCats, setExpandedCats] = useState<Set<string>>(new Set(['c1']));
  
  const [activeProfile, setActiveProfile] = useState<TimerProfile | null>(null);
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: number;
    if (isRunning && remainingTime > 0) {
      interval = window.setInterval(() => {
        setRemainingTime(prev => prev - 1);
      }, 1000);
    } else if (remainingTime === 0 && isRunning) {
      setIsRunning(false);
      // Play sound
      const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
      audio.play();
    }
    return () => clearInterval(interval);
  }, [isRunning, remainingTime]);

  const toggleCategory = (catId: string) => {
    const newExp = new Set(expandedCats);
    if (newExp.has(catId)) newExp.delete(catId);
    else newExp.add(catId);
    setExpandedCats(newExp);
  };

  const selectProfile = (profile: TimerProfile) => {
    setIsRunning(false);
    setActiveProfile(profile);
    const secs = profile.minutes * 60;
    setRemainingTime(secs);
    setTotalTime(secs);
  };

  const toggleTimer = () => {
    if (!activeProfile && remainingTime === 0) return;
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    if (activeProfile) {
      setRemainingTime(activeProfile.minutes * 60);
    } else {
      setRemainingTime(0);
      setTotalTime(0);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = totalTime > 0 ? ((totalTime - remainingTime) / totalTime) * 100 : 0;

  return (
    <div className="timer-hub-container">
      <div className="timer-sidebar glass-panel">
        <div className="sidebar-header">
          <h3>Profiles Tree</h3>
          <button className="icon-btn"><Plus size={16} /></button>
        </div>
        
        <div className="tree-view">
          {categories.map(cat => (
            <div key={cat.id} className="tree-category">
              <div 
                className="category-header"
                onClick={() => toggleCategory(cat.id)}
              >
                {expandedCats.has(cat.id) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                <Folder size={16} className="text-secondary" />
                <span>{cat.name}</span>
              </div>
              
              {expandedCats.has(cat.id) && (
                <div className="category-items">
                  {cat.profiles.map(prof => (
                    <div 
                      key={prof.id}
                      className={`tree-item ${activeProfile?.id === prof.id ? 'active' : ''}`}
                      onClick={() => selectProfile(prof)}
                    >
                      <ClockIcon size={14} className={activeProfile?.id === prof.id ? 'text-primary' : ''} />
                      <span>{prof.name}</span>
                      <span className="time-badge">{prof.minutes}m</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="timer-main glass-panel">
        <div className="timer-display-area">
          <div className="timer-circle">
            <svg viewBox="0 0 100 100" className="progress-ring">
              <circle cx="50" cy="50" r="45" className="progress-bg"></circle>
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                className="progress-fill"
                style={{ strokeDashoffset: `calc(283px - (283px * ${progressPercent}) / 100)` }}
              ></circle>
            </svg>
            <div className="time-text">
              <h1 className="text-gradient">{formatTime(remainingTime)}</h1>
              <p>{activeProfile ? activeProfile.name : 'Select a Profile'}</p>
            </div>
          </div>

          <div className="timer-controls">
            <button 
              className={`btn-primary ${isRunning ? 'stop' : 'start'}`}
              onClick={toggleTimer}
            >
              {isRunning ? <Square size={20} /> : <Play size={20} fill="white" />}
              {isRunning ? 'Stop' : 'Start'}
            </button>
            <button className="btn-glass" onClick={resetTimer}>
              <RotateCcw size={20} />
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerHub;
