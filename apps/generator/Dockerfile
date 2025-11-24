# apps/*/Dockerfile
# STAGE 1: сборка
FROM node:20-alpine AS builder

WORKDIR /app

# Устанавливаем зависимости
COPY package*.json ./
RUN npm ci --only=production

# Копируем исходники и собираем
COPY . .
RUN npm run build

# STAGE 2: финальный образ
FROM node:20-alpine

# Создаём пользователя без root-прав (best practice)
RUN addgroup -g 1001 -S nodejs \
 && adduser -S crossword -u 1001

WORKDIR /app

# Копируем зависимости и сборку из builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

# Устанавливаем только production-зависимости
RUN npm ci --only=production && npm cache clean --force

# Переключаемся на непривилегированного пользователя
USER crossword

# Порт (должен совпадать с тем, что слушает NestJS)
EXPOSE 3000

# Запуск приложения
CMD ["node", "dist/main"]