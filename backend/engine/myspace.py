import time

class MySpaceDiary:
    """
    MySpace Diary. Tracks citizen lifecycles, redefines failure as "stuck".
    """
    def __init__(self, ledger):
        self.ledger = ledger
        self.users = {}
        
    def log_event(self, user_id: str, task_name: str, status: str):
        if user_id not in self.users:
            self.users[user_id] = {"tasks": [], "happiness_index": 100, "state": "ACTIVE"}
            
        task_data = {
            "task": task_name,
            "status": status,
            "timestamp": time.time()
        }
        
        self.users[user_id]["tasks"].append(task_data)
        
        # The Humility Protocol & Stuck Logic
        if status == "failed":
            self.users[user_id]["state"] = "STUCK"
            message = "Task marked STUCK. Initiating Geometric Scrum rotation."
        elif status == "success":
            self.users[user_id]["state"] = "ACTIVE"
            self.users[user_id]["happiness_index"] += 5
            message = "Task completed. Trophy taken from the earth."
        else:
            message = "Task logged."
            
        # Write to ledger
        self.ledger.inscribe_asset(user_id, "MYSPACE_LOG", task_name, {"status": status})
        
        return {"user_state": self.users[user_id]["state"], "message": message}

    def get_user_status(self, user_id: str):
        if user_id not in self.users:
            return None
        return self.users[user_id]
