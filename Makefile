#!/usr/bin/env bash
SHELL := /bin/bash

default:
	@make -s all

all:
	@make -s help | fzf --cycle | cut -d ' ' -f1 | xargs -r make

.PHONY: docker/build
docker/build: ## Build the docker image
	@docker-compose build

.PHONY: docker/build/dev
docker/build/dev: ## Builds the docker container in development mode
	@docker-compose -f docker-compose.dev.yml build

.PHONY: docker/upd
docker/upd: ## Start the docker container (deamon)
	@docker-compose up -d

.PHONY: docker/up
docker/up: ## Start the docker container
	@docker-compose up

.PHONY: docker/up/dev
docker/up/dev: ## Start the docker container
	@docker-compose -f docker-compose.dev.yml up

.PHONY: docker/down
docker/down: ## Stop the docker image
	@docker-compose down

.PHONY: docker/cleanup
docker/cleanup: ## Stop and remove all containers, networks, and all images used by any service in docker-compose.yml file
	@docker-compose down --rmi all

.PHONY: help
help: ## Display available tasks
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z\-_0-9%:\/]+:.*?## / {printf "\033[36m%-30s→\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | sed s/://
