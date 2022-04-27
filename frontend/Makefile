compile:
	NODE_ENV=production npm run build

dockerlocal:
	docker build -t rhodesjason/magellan-frontend .

dockerhub:
	docker buildx build --platform linux/amd64,linux/arm64 --push -t rhodesjason/magellan-frontend .

docker: compile dockerlocal dockerhub