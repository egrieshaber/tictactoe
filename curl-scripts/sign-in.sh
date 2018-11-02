#!/bin/bash

curl --include --request POST 'https://tic-tac-toe-wdi.herokuapp.com/sign-in' \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "blob@example.email",
      "password": "an example password"
    }
  }'
