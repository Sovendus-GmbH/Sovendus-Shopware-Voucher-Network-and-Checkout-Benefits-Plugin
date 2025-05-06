# shopware sovendus plugin dev env

Run the following command to start the dev shopware env on port 80

## Windows

```bash
cd shopware-testing
start-dev-env.ps1
```

## Other

```bash
# allow (docker) to use privileged ports
sudo sysctl -w net.ipv4.ip_unprivileged_port_start=0

cd shopware-testing
./start-dev-env.sh
```

# test the plugin code from ../shopware-plugin

1. login to the admin console: <http://localhost/admin> \
    user: admin \
    password: shopware

2. Install, activate and configure the extension under <http://localhost/admin#/sw/extension/my-extensions>
