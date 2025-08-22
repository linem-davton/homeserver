# Getting Started

## Dependencies

- Obsidian Plugin: https://github.com/vrtmrz/obsidian-livesync

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

## Setup CouchDB

- Make sure `.env` is configured with the CouchDB credentials and host.

```bash
./setup_couchdb.sh
docker compose up -d
```

## Generate the Setup URI for LiveSync Plugin

Ensure that the `.env` file is set up with the CouchDB credentials and PASSPHRASE, then run the following command to generate the setup URI:

```bash
./gen-setupuri.sh
```

## Decode the Setup URI

- Update the `.env` file with the `SETUP_URI` and `PASSPHRASE`.

```bash
./decode-setupuri.sh
```
