# Architecture problems

Building Docker images on the M1 mac resulted in darwin/arm64 images, which when I used in GCP kubernetes, caused some esoteric errors. I saw all the pods running those images crashing with the "CrashLoopBackOff" error. Once I turned on logging for pods for my k8s cluster, I was able to see a single log line for each restart that just said "standard_init_linux.go:228: exec user process caused: exec format error" which lead me to this GitHub comment: https://github.com/aws-observability/aws-otel-collector/issues/784#issuecomment-993054020

That helped me discover the M1 arch problem which lead me to a lot of reading on Docker's buildx tool. https://docs.docker.com/buildx/working-with-buildx/

This article was the one that finally helped me set my system up to build multi-arch images and push them to DockerHub in a way that whoever pulls the image will pull the one for their arch, auto-magically.
https://blog.jaimyn.dev/how-to-build-multi-architecture-docker-images-on-an-m1-mac/

You can see an example of a multi-arch image here: https://hub.docker.com/layers/192580364/rhodesjason/magellan-frontend/latest/images/sha256-10c7fecd8ad303524cec8da0c8a40242a17709758a411f6a14d6e99adc6d3385?context=repo

(Notice how the OS/Arch dropdown mentions both linux/amd64 and linux/arm64)

I updated my Makefile to something like this:

```Make
compile:
	NODE_ENV=production npm run tsc

dockerlocal:
	docker build -t rhodesjason/magellan-nodejs-backend-1 .

dockerhub:
	docker buildx build --platform linux/amd64,linux/arm64 --push -t rhodesjason/magellan-nodejs-backend-1 .

docker: compile dockerlocal dockerhub
```

And then everything worked in GCP k8s! 🙌 (Not sure if I need the dockerlocal step anymore or if I should just pull from dockerhub for everything, even dev, but that's easy to adjust later.)