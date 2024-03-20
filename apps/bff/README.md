# Wefox@Codemotion Workshop fest

## BFF

### Installation:

In the project root:

```
$ npm install
```

### Launch

```
$ npm run start:dev -w @workshopfest/bff
$ npm run mock -w @workshopfest/bff
```

### Example Curl
```
curl --request POST \
  --url http://localhost:3000/quotation \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --data '{
        "vehicleType": "Car",
        "plate": "RB786NM",
        "birthdate": "1985-10-25"
}' | jq
```

curl --request GET \
  --url http://localhost:3000/quotation/<quotationId> \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' | jq