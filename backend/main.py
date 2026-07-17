from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import time
from engine.ip_ledger import IPLedger
from engine.ceo_erp import CEO_ERP
from engine.myspace import MySpaceDiary
from engine.judiciary import AutonomousJustice

app = FastAPI(title="Bharat Next Big Decentralised System")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ledger = IPLedger()
erp = CEO_ERP(ledger)
myspace = MySpaceDiary(ledger)
justice = AutonomousJustice(ledger)

class InscribeRequest(BaseModel):
    user_id: str
    asset_type: str
    content: str
    metadata: dict

@app.post("/api/v1/ip/inscribe")
def inscribe_asset(req: InscribeRequest):
    result = ledger.inscribe_asset(req.user_id, req.asset_type, req.content, req.metadata)
    return {"status": "success", "data": result}

@app.get("/api/v1/ip/verify/{hash_id}")
def verify_asset(hash_id: str):
    result = ledger.verify_asset(hash_id)
    if not result:
        raise HTTPException(status_code=404, detail="Asset not found or invalid")
    return {"status": "success", "data": result}

class ObjectiveRequest(BaseModel):
    user_id: str
    objective: str
    target_tokens: int

@app.post("/api/v1/erp/objective")
def create_objective(req: ObjectiveRequest):
    result = erp.create_objective(req.user_id, req.objective, req.target_tokens)
    return {"status": "success", "data": result}

class DispatchRequest(BaseModel):
    item_id: str
    target_coordinate: str

@app.post("/api/v1/erp/dispatch")
def smart_gate_dispatch(req: DispatchRequest):
    result = erp.process_dispatch(req.item_id, req.target_coordinate)
    return {"status": "success", "data": result}

class TaskLogRequest(BaseModel):
    user_id: str
    task_name: str
    status: str # "success", "failed"

@app.post("/api/v1/myspace/log")
def log_task(req: TaskLogRequest):
    result = myspace.log_event(req.user_id, req.task_name, req.status)
    return {"status": "success", "data": result}

@app.get("/api/v1/myspace/status/{user_id}")
def get_status(user_id: str):
    return {"status": "success", "data": myspace.get_user_status(user_id)}

class JudiciaryRequest(BaseModel):
    judge_id: str
    case_content: str

@app.post("/api/v1/judiciary/submit")
def submit_case(req: JudiciaryRequest):
    result = justice.submit_case(req.judge_id, req.case_content)
    return {"status": "success", "data": result}

@app.post("/api/v1/judiciary/vote")
def cast_vote(case_id: str, vote: str):
    result = justice.cast_vote(case_id, vote)
    return {"status": "success", "data": result}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
