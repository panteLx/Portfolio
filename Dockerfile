# Verwende Nginx als Basis
FROM nginx:alpine

# Kopiere die Build-Dateien in das Nginx-Verzeichnis
COPY build/ /usr/share/nginx/html

# Exponiere den Nginx-Standardport
EXPOSE 80

# Starte Nginx
CMD ["nginx", "-g", "daemon off;"]
