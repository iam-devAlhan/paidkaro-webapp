import firebase_admin
from firebase_admin import credentials, auth
from dotenv import load_dotenv
import os

load_dotenv()

FIREBASE_SERVICE_ACCOUNT_CONFIG = os.environ.get("FIREBASE_SERVICE_ACCOUNT_CONFIG")

if not firebase_admin._apps:
    cred = credentials.Certificate(FIREBASE_SERVICE_ACCOUNT_CONFIG)
    firebase_admin.initialize_app(cred)

