FROM node:22-alpine as builder
WORKDIR /app
ADD package.json ./
ADD .yarnrc.yml ./
ADD yarn.lock ./
RUN yarn install --immutable

ADD .pnp.cjs .pnp.loader.mjs ./
ADD . ./
RUN yarn build && yarn cache clean
RUN rm -rf node_modules .yarn/cache

FROM nginx:alpine AS prod
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]