const API_BASE_URL = 'http://localhost:8000/api/v1';

export const apiClient = {
  async logTask(userId: string, taskName: string, status: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/myspace/log`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, task_name: taskName, status })
      });
      return await response.json();
    } catch (error) {
      console.warn('API logTask failed, falling back to offline mode:', error);
      return null;
    }
  },

  async getStatus(userId: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/myspace/status/${userId}`);
      return await response.json();
    } catch (error) {
      console.warn('API getStatus failed, falling back to offline mode:', error);
      return null;
    }
  },

  async createObjective(userId: string, objective: string, targetTokens: number) {
    try {
      const response = await fetch(`${API_BASE_URL}/erp/objective`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, objective, target_tokens: targetTokens })
      });
      return await response.json();
    } catch (error) {
      console.warn('API createObjective failed, falling back to offline mode:', error);
      return null;
    }
  },

  async inscribe(userId: string, assetType: string, content: string, metadata: any = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}/ip/inscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, asset_type: assetType, content, metadata })
      });
      return await response.json();
    } catch (error) {
      console.warn('API inscribe failed, falling back to offline mode:', error);
      return null;
    }
  },

  async dispatch(itemId: string, targetCoordinate: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/erp/dispatch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: itemId, target_coordinate: targetCoordinate })
      });
      return await response.json();
    } catch (error) {
      console.warn('API dispatch failed, falling back to offline mode:', error);
      return null;
    }
  },

  async submitCase(judgeId: string, caseContent: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/judiciary/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ judge_id: judgeId, case_content: caseContent })
      });
      return await response.json();
    } catch (error) {
      console.warn('API submitCase failed, falling back to offline mode:', error);
      return null;
    }
  }
};

