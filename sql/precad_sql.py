SQL_CRIAR_TABELA_PRECAD = """
    CREATE TABLE IF NOT EXISTS precad (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cnpj INTEGER NOT NULL,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        endereco TEXT NOT NULL,
        telefone TEXT NOT NULL,
        contador TEXT NOT NULL
)"""

SQL_INSERIR_PRECAD = """
    INSERT INTO precad (
        cnpj, nome, email, endereco, telefone, contador)
    VALUES (?, ?, ?, ?, ?, ?)"""
    
