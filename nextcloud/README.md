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

## Configuring ONLYOFFICE Integration

- Install the ONLYOFFICE Document Server and App in the Nextcloud App Store.
- Configure the ONLYOFFICE Document Server URL in Nextcloud:

```php
'trusted_domains' =>
  array (
    0 => 'nextcloud.taverncloud.win',
    1 => 'localhost:8080',
    2 => 'app', // <-- THIS IS THE CRUCIAL FIX
  ),
```
