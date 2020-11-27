# Api Testng for The Cat API

## Requirements
- NodeJS `v12.14.1`
- Git

## Installing dependencies
```npm install```

## Running the test
```npm test```

```npx ts-node reporting/reporting.ts```

### The structure folder:
> features/*.feature #contains the scenarios

> features/step_definitions #step definitions and hooks

> features/support/actions #the actions such as request, validations

> features/support/common #common function to the entire project

> features/support/models #request - response models, endpoint definition

> reporting #methods to generate the reports html and json

> reports/ #reportes generated
