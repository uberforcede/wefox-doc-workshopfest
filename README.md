# Wefox@Codemotion Workshop fest

## Project setup
```
$ npm install
```

## BFF config
Create a `.env` file in `apps/bff` folder to configure url pointing to the mock servers:

```
VEHICLE_SERVICE=wefox-doc-workshopfest-prism-vehicle-1:4003
INSURANCE_SERVICE=wefox-doc-workshopfest-prism-insurance-1:4001
QUOTATION_SERVICE=wefox-doc-workshopfest-prism-quotation-1:4002
EMAIL_SERVICE=wefox-doc-workshopfest-prism-mail-1:4004
```

## Launch a propject:
```
$ npm run <command> -w <namespace>
```

Examples:
```
$ npm run serve -w @workshopfest/frontend
$ npm run serve -w @workshopfest/bff
$ npm run serve -w @workshopfest/core-libs
$ npm run serve -w @workshopfest/mf-quoter
$ npm run serve -w @workshopfest/mf-quotation
```
