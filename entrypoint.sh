#!/bin/bash
TAGS="${TAGS:-@critical}"
BRAND="${BRAND:-br}"

if [[ -z $DIRNAME ]];then 
    echo "You must specify DIRNAME! Please read the README.md"; exit 1
fi

if   [[ "$BRAND" == 'mx' ]];then
    TAGS_BRAND="and not @ignore and not @brasil and not @chile and not @colombia"
elif [[ "$BRAND" == 'cl' ]];then
    TAGS_BRAND="and not @ignore and not @brasil and not @mexico and not @colombia"
elif [[ "$BRAND" == 'co' ]];then
    TAGS_BRAND="and not @ignore and not @brasil and not @mexico and not @chile"
else
    TAGS_BRAND="and not @ignore and not @latam and not @mexico and not @chile and not @colombia"
fi
npm i && npx cypress run --browser chrome --env TAGS="$TAGS $TAGS_BRAND" --spec "./cypress/integration/specs/$DIRNAME/**/*"