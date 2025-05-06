docker stop shopware
docker rm shopware

# docker run --name shopware -p 80:80 -v $PWD/sovendus-shopware-voucher-network/SovendusPlugin:/var/www/html/custom/plugins/SovendusPlugin dockware/dev:5.6.6
docker run --name shopware -p 80:80  dockware/dev:5.6.6
