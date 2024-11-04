from typing import Optional
from models.precad_model import PreCad
from sql.precad_sql import SQL_CRIAR_TABELA_PRECAD, SQL_INSERIR_PRECAD
from util import obter_conexao

def criar_tabela_precad():
    with obter_conexao() as conexao:
        db = conexao.cursor()
        db.execute(SQL_CRIAR_TABELA_PRECAD)

def inserir_precad(precad: PreCad) -> Optional[PreCad]:
    with obter_conexao() as conexao:
        db = conexao.cursor()
        db.execute(SQL_INSERIR_PRECAD, 
            (precad.cnpj,
            precad.nome,
            precad.email,
            precad.endereco,
            precad.telefone,
            precad.contador,))
        if db.rowcount > 0:
            precad.id = db.lastrowid
            return precad
        else:
            return None
