from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

DB_URL = ""

engine = create_engine(DB_URL)
Base = declarative_base()
Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)

