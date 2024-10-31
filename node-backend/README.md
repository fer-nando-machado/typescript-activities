# typescript-activities-node-backend

Node API for [`typescript-activities`](..)

## Commands

The following commands are available:

### `npm install`

Installs application dependencies.

### `npm start`

Starts the server application locally.

### `npm test`

Executes all available tests.

### `npm run build`

Builds the app for production on the `dist` folder.

### `npm run serve`

Serves the built `dist` folder.

## Endpoints

### Activities

#### `GET /activities`

Returns available activities. The following optional query parameter filters can also be provided:

- `title` _(string)_

**response:**

```json
[
  {
    "id": 1,
    "title": "City Tour",
    "price": 100,
    "currency": "$",
    "rating": 4,
    "specialOffer": false,
    "supplierId": 100,
    "supplier": {
      "id": 100,
      "name": "Jackie Chan",
      "address": "789 Main St",
      "zip": "10000",
      "city": "Hong Kong",
      "country": "China"
    }
  },
  {
    "id": 2,
    "title": "Museum Ticket",
    "price": 20,
    "currency": "¥",
    "rating": 4.5,
    "specialOffer": true,
    "supplierId": 200,
    "supplier": {
      "id": 200,
      "name": "Bruce Lee",
      "address": "123 Long Rd",
      "zip": "20000",
      "city": "San Francisco",
      "country": "USA"
    }
  }
]
```
