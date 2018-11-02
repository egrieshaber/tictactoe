# #!/bin/bash

curl --include --request POST 'https://tic-tac-toe-wdi.herokuapp.com/sign-up' \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "blob@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'
