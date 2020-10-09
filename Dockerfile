FROM hayd/alpine-deno
WORKDIR  /app
USER deno
COPY . .
RUN deno cache test.ts
CMD ["run","--allow-net", "test.ts"]


