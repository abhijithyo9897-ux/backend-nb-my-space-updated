import hashlib
import time
import uuid

class DatabaseSimulator:
    """
    Simulates a Write-Once Fragment Database where hardware sectors are marked as SPENT.
    """
    def __init__(self):
        self.fragments = {} # sector_id -> data
        self.spent_sectors = set()

    def _generate_sector_id(self):
        return f"SSD-01-SECTOR-{uuid.uuid4().hex[:8].upper()}"

    def write_fragment(self, data: dict) -> str:
        sector_id = self._generate_sector_id()
        if sector_id in self.spent_sectors:
            raise Exception("Quantum Collision: Sector already spent.")
        
        self.fragments[sector_id] = data
        self.spent_sectors.add(sector_id)
        return sector_id

    def read_fragment(self, sector_id: str):
        if sector_id not in self.fragments:
            return None
        return self.fragments[sector_id]

# Singleton DB instance
db = DatabaseSimulator()
