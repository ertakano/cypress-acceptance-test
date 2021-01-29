run:
	@[ "${DIRNAME}" ] || ( echo "You must specify DIRNAME! Please read the README.md"; exit 1 ) 
	docker run --dns 1.1.1.1 -e TAGS="${TAGS}" -e BRAND="${BRAND}" -e DIRNAME="${DIRNAME}" --rm --workdir /e2e -v "${PWD}":/e2e --entrypoint=/e2e/entrypoint.sh cypress/included:6.3.0
run-portal:
	docker run --dns 1.1.1.1 -e TAGS="${TAGS}" -e BRAND="${BRAND}" -e DIRNAME="portal" --rm --workdir /e2e -v "${PWD}":/e2e --entrypoint=/e2e/entrypoint.sh cypress/included:6.3.0			