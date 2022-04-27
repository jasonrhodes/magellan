compile:
	NODE_ENV=production npm run tsc

dockerlocal:
	docker build -t rhodesjason/magellan-nodejs-backend-1 .

dockerhub:
	docker buildx build --platform linux/amd64,linux/arm64 --push -t rhodesjason/magellan-nodejs-backend-1 .

docker: compile dockerlocal dockerhub