#!/usr/bin/env bash
SHELL := /bin/bash

default:
	@make -s all

all:
	@make -s help | fzf --cycle | cut -d ' ' -f1 | xargs -r make

.PHONY: install
install: ## Install dependencies
	@npm install

.PHONY: build
build: ## Build the project
	@npm run build

.PHONY: lint
lint: ## Run Linters
	@npm run lint

.PHONY: test
test: ## Run Tests
	@npm run test

.PHONY: start
start: ## Run start command
	@npm run start

.PHONY: docker/build
docker/build: ## Build the docker image
	@docker build -t demo-app . 

.PHONY: docker/run
docker/run: ## Run the docker image at 3000
	@docker run -it -p 3000:3000 -v $(pwd):/app demo-app

.PHONY: help
help: ## Display available tasks
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z\-_0-9%:\/]+:.*?## / {printf "\033[36m%-30s→\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | sed s/://
