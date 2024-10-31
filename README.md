# typescript-activities

Sample Typescript monorepo featuring a web application that allows users to search for activities, composed by the following modules:

- [`node-backend`](./node-backend/README.md), a backend application meant to expose a REST API
- [`react-frontend`](./react-frontend/README.md), a UI client application consuming the exposed API
- [`types`](./types), a resource folder to define types shared by both applications

## Quick Start

If you have Docker installed, you can easily start both services with:

```cmd
docker-compose up --build
```

This command will start:

- `node-backend` at <http://localhost:8080>
- `react-frontend` at <http://localhost:8081>

Alternatively, please refer to individual repositories for detailed **test, build and run** instructions for each application.
