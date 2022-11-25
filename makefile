all: build start
build:	
	docker compose build
start:
	docker compose up -d