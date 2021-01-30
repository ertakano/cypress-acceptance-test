#!/bin/bash
TAGS="${TAGS}"

if [[ -z $DIRNAME ]];then 
    echo "You must specify DIRNAME! Please read the README.md"; exit 1
fi

npm i && npx cypress run --browser chrome --env TAGS="$TAGS" --spec "./cypress/integration/specs/$DIRNAME/**/*"