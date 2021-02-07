run:
	@[ "${DIRNAME}" ] || ( echo "You must specify DIRNAME! Please read the README.md"; exit 1 ) 
	docker run --network=host --dns 1.1.1.1 -e TAGS="${TAGS}" -e DIRNAME="${DIRNAME}" --rm --workdir /src -v "${PWD}":/src --entrypoint=/src/entrypoint.sh cypress/included:6.3.0
run-sigin:
	docker run --network=host --dns 1.1.1.1 -e TAGS="${TAGS}" -e DIRNAME="signIn" --rm --workdir /src -v "${PWD}":/src --entrypoint=/src/entrypoint.sh cypress/included:6.3.0			