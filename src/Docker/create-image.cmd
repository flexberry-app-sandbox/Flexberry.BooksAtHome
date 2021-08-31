docker build --no-cache -f SQL\Dockerfile.PostgreSql -t booksathome/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t booksathome/app ../..
