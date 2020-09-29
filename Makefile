help:        ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

dev:         ## Start a development session
	yarn dev

lint:        ## Check code
	docker-compose -f docker-compose.build.yml run --rm site_node yarn lint

lint-fix:    ## Fix code
	docker-compose -f docker-compose.build.yml run --rm site_node yarn lint-fix

export-site: ## Exports the site to the /out folder
	docker-compose -f docker-compose.build.yml run --rm site_node
	docker-compose -f docker-compose.build.yml run --rm site_node yarn export

connect:     ## Connect to the docker container
	docker-compose run --rm site_node sh
