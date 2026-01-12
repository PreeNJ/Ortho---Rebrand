# Ortho Rebrand Backend

FastAPI-based backend for the Ortho Rebrand application.

## Setup

1. Activate virtual environment:
```bash
source .venv/bin/activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Run the development server:
```bash
python main.py
```

The API will be available at `http://localhost:8000`

## API Documentation

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`
