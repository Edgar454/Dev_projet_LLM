# Dockerfile
FROM ghcr.io/astral-sh/uv:python3.13-trixie-slim

WORKDIR /app

# Copy dependency files
COPY pyproject.toml uv.lock  ./

# Install Python dependencies
ENV UV_PROJECT_ENVIRONMENT="/usr/local/"
RUN uv sync --locked --no-dev


# Copy application code
COPY api/ ./api/
COPY backend/ ./backend/

# Create directories
RUN mkdir -p  /app/logs


ENTRYPOINT [ "uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8000"]