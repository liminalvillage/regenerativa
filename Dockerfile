FROM nginx:alpine
COPY out/ /usr/share/nginx/html/
RUN printf 'server {\n listen 80;\n root /usr/share/nginx/html;\n index index.html;\n location / { try_files $uri $uri/ $uri.html /index.html; }\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 80
