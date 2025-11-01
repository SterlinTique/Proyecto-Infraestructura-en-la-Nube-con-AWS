import os
from sqlalchemy import create_engine

def conectar():
    database_url = os.environ.get(
        'DATABASE_URL',
        'postgresql://postgres:password@localhost/Contenedor2'
    )
    engine = create_engine(database_url)
    return engine
