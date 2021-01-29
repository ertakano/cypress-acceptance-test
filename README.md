### This project uses the images provide all of the required dependencies for running Cypress in Docker.
More about: https://github.com/cypress-io/cypress-docker-images 

### Setup (using Docker)

1 - Clone hostgator-acceptance-tests project
```
git clone ssh://git@stash.endurance.com:7999/latamd/hostgator-acceptance-tests.git
```

#### Run Tests with Makefile

2 - Access your hostgator-acceptance-tests root path
```
cd <src_path>/hostgator-acceptance-tests
```

3 - Run your tests from the Makefile using the cypress docker container
TAGS it's not mandatory. If not specified, by default it will be '@critical and not @ignore'.
BRAND it's not mandatory. If not specified, by default it will be 'br'. The options are: 'br', 'mx', 'cl' and 'co'. 
DIRNAME it's mandatory. specify the test path from the 'integration/spec/' folder. Ex: 'portal/sub_folder'.
*More about in the Makefile

```
    Run scenarios with parameters:
    3.1 TAGS="@cucumber_tag" BRAND="country" DIRNAME="folder_name" make run
        ex: TAGS="@checkout" BRAND="br" DIRNAME="portal" make run
```

```
    Run scenarios without parameters:
    3.2 DIRNAME="folder_name" make run
        ex: DIRNAME="portal" make run
``` 

4 - Using tags
```
@ignore   - Tests are skipped.
@critical - Run tests by default.
@brasil   - Run the tests in the br environment.
@mexico   - Run the tests in the mx environment.
@chile    - Run the tests in the cl environment.
@colombia - Run the tests in the co environment.
@latam    - If you want to specify for all Spanish languages.
```
