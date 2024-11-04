from dataclasses import dataclass
from typing import Optional

@dataclass
class PreCad:
    id: Optional[int] = None
    cnpj: Optional[int] = None
    nome: Optional[str] = None
    email: Optional[str] = None
    endereco: Optional[str] = None
    telefone: Optional[str] = None
    contador: Optional[str] = None