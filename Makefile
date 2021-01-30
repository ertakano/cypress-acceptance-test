run:
	@[ "${DIRNAME}" ] || ( echo "You must specify DIRNAME! Please read the README.md"; exit 1 ) 
	docker run --dns 1.1.1.1 -e TAGS="${TAGS}" -e DIRNAME="${DIRNAME}" --rm --workdir /src -v "${PWD}":/src --entrypoint=/src/entrypoint.sh cypress/included:6.3.0
run-login:
	docker run --dns 1.1.1.1 -e TAGS="${TAGS}" -e DIRNAME="minha-conta" --rm --workdir /src -v "${PWD}":/src --entrypoint=/src/entrypoint.sh cypress/included:6.3.0			