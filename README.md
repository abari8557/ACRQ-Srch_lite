<h1>Always do a docker pull before pushing code up</h1>

To create a docker container, run the following in a terminal window

docker-compose -f docker-compose.dev.yaml up -d --build


docker-compose -f docker-compose.dev.yaml up -d --build --no-deps <container_name>
