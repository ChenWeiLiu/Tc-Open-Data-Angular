FROM nginx
COPY ./dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
