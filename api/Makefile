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

.PHONY: run/dev
run/dev: ## Run the dev
	@npm run dev

.PHONY: docker/build
docker/build: ## Build the docker image
	docker build -t demo-api . 

.PHONY: docker/run
docker/run: ## Runs the docker image at 3001
	docker run -it -p 3001:3001 -v $(pwd):/app demo-api

.PHONY: help
help: ## Display available tasks
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z\-_0-9%:\/]+:.*?## / {printf "\033[36m%-30s→\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | sed s/://
