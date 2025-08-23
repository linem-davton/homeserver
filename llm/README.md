# Getting Started

- Ollama Installation

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

- Web UI

```bash
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway --name open-webui -e OLLAMA_BASE_URL=http://host.docker.internal:11434 -v open-webui:/app/backend/data --restart unless-stopped ghcr.io/open-webui/open-webui:main
```
