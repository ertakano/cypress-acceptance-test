### This project uses the images provide all of the required dependencies for running Cypress in Docker.
More about: https://github.com/cypress-io/cypress-docker-images 

### Setup (using Docker)

1 - Clone cypress-acceptance-test project
```
git clone https://github.com/ertakano/cypress-acceptance-test.git
```

#### Run Tests with Makefile

2 - Access your cypress-acceptance-test root path
```
cd <src_path>/cypress-acceptance-test
```

3 - Run your tests from the Makefile using the cypress docker container
TAGS it's not mandatory.
DIRNAME it's mandatory. specify the test path from the 'integration/spec/' folder. Ex: 'folder_name/sub_folder_name'.
*More about in the Makefile

```
    Run scenarios with parameters:
    3.1 TAGS="@cucumber_tag" DIRNAME="folder_name" make run
        ex: TAGS="@checkout" DIRNAME="my-account" make run
```

```
    Run scenarios without parameters:
    3.2 DIRNAME="folder_name" make run
        ex: DIRNAME="my-account" make run
``` 

4 - Using tags
```
@ignore - Tests are skipped.
```
