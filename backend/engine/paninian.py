class PaninianGrammar:
    """
    Simulates the Linguistic Reverse-Engineering Engine.
    Maps data based on Sandhi (junction) rules.
    """
    def __init__(self):
        self.rules = {
            "a+a": "A",
            "i+i": "I",
            "u+u": "U"
        }
        
    def apply_sandhi(self, root: str, affix: str) -> str:
        combo = f"{root[-1]}+{affix[0]}"
        if combo in self.rules:
            return root[:-1] + self.rules[combo] + affix[1:]
        return root + affix
