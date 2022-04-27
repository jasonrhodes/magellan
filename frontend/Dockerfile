FROM nginx:alpine
COPY ./build /usr/share/nginx/html/
COPY ./nginx/magellan.conf /etc/nginx/conf.d/
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.orig