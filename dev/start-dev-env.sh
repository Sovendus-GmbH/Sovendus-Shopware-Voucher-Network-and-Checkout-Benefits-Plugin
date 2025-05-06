docker stop shopware
docker rm shopware

docker run --name shopware -p 81:80 -v $PWD/../shopware-plugin:/var/www/html/custom/plugins/SovendusPlugin dockware/dev:latest
# docker run --name shopware -p 80:80 dockware/dev:latest