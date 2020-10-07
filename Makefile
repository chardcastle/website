help:        ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

dev:         ## Start a local development session
	docker-compose -f docker-compose.build.yml run site_node
	docker-compose -f docker-compose.build.yml run -p 14100:3000 site_node yarn dev

lint:        ## Check code
	docker-compose -f docker-compose.build.yml run --rm site_node yarn lint

lint-fix:    ## Fix code
	docker-compose -f docker-compose.build.yml run --rm site_node yarn lint-fix

export-site: ## Exports the site to the /out folder
	docker-compose -f docker-compose.build.yml run --rm site_node
	docker-compose -f docker-compose.build.yml run --rm site_node yarn export

deploy-site: ## Deploys the site to public S3 bucket in AWS
	aws s3 cp ./out s3://chrishardcastle.co.uk/ --recursive

connect:     ## Connect to the docker container
	docker-compose run --rm site_node sh

stop:        ## Stop container
	docker-compose stop

down:        ## Take container down
	docker-compose down
