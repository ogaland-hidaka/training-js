FROM node:18.16.0-alpine3.18

WORKDIR /var/www/html

# RUN apk update && \
#     npm install -g npm && \
#     npm install -g @vue/cli

EXPOSE 8080
ENV HOST 0.0.0.0