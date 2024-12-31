FROM nginx:alpine

COPY . /usr/share/nginx/html
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY img /usr/share/nginx/html/img
COPY pdf /usr/share/nginx/html/pdf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]