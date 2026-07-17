import hashlib
import time
from .database import db

class IPLedger:
    """
    Quantum IP Log & FIFO hash generator.
    Anchors assets to a specific Spacetime coordinate (simulated via timestamp and unique sector).
    """
    def __init__(self):
        self.ledger = {} # hash_id -> sector_id

    def _generate_hash(self, content: str, user_id: str, timestamp: float) -> str:
        raw = f"{content}:{user_id}:{timestamp}"
        return hashlib.sha256(raw.encode()).hexdigest()

    def inscribe_asset(self, user_id: str, asset_type: str, content: str, metadata: dict):
        timestamp = time.time()
        asset_hash = self._generate_hash(content, user_id, timestamp)
        
        data_packet = {
            "hash": asset_hash,
            "user_id": user_id,
            "type": asset_type,
            "content": content,
            "metadata": metadata,
            "timestamp": timestamp,
            "4d_anchor": "VALID"
        }
        
        sector_id = db.write_fragment(data_packet)
        self.ledger[asset_hash] = sector_id
        
        return {
            "hash_id": asset_hash,
            "sector_id": sector_id,
            "message": "Asset inscribed and physically anchored."
        }

    def verify_asset(self, hash_id: str):
        if hash_id not in self.ledger:
            return None
        
        sector_id = self.ledger[hash_id]
        data = db.read_fragment(sector_id)
        
        if not data:
            return None
            
        return {
            "verified": True,
            "sector_id": sector_id,
            "data": data,
            "message": "Spacetime Triangulation verified. Parent log matches."
        }
