# Getting Started

```bash
docker compose up -d
```

## Configuring Reverse Proxy

- Stop the containers

```bash
docker compose down
sudo vi nextcloud_data/config/config.php
```

Add the two lines at the botton of `config/config.php` to configure the reverse proxy settings:
The file needs to be edited after the initial setup, and withs sudo privileges if necessary.

```php
'overwriteprotocol' => 'https',
'trusted_proxies'   => ['172.16.0.0/12'],
```
