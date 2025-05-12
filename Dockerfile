FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install -g pnpm pm2
RUN pnpm install
RUN pnpm build

EXPOSE 3000

CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]