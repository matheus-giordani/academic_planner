#stage 1
FROM node:16.18.0 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/academic_planner_angular /usr/share/nginx/html
