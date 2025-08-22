# Getting Started

## Dependencies

```bash

npm install -g deno

```

## Environment Variables

Create a `.env` file in the root directory with the following content:

```env
COUCHDB_USER=admin
COUCHDB_PASSWORD=admin
COUCHDB_HOST=localhost


```

## Start CouchDB

```bash
docker compose up -d
```

## Generate the Setup URI

```bash
export $(cat .env | xargs)
./gen-setupuri.sh
```

## Decode the Setup URI

- Update the `.env` file with the `SETUP_URI` and `PASSPHRASE`.

```bash
export $(cat .env | xargs)
deno run -A decrypy.ts
```

## Cloudflare Tunnel
