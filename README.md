# typescript-activities

Sample TypeScript monorepo featuring a web application that allows users to search for activities, composed by the following modules:

- [`node-backend`](./node-backend): a backend application meant to expose a REST API
- [`react-frontend`](./react-frontend): a UI client application consuming the exposed API
- [`types`](./types): a resource folder to define types shared by both applications

## Quick Start

If you have Docker installed, you can easily start both services with:

```cmd
docker-compose up --build
```

This command will start:

- `node-backend` at <http://localhost:8080>
- `react-frontend` at <http://localhost:8081>

Alternatively, please refer to individual repositories for detailed **test, build and run** instructions for each application.

## Architecture

After analyzing the provided SpringBoot backend and VueJS frontend skeletons, I decided to write both of my applications in TypeScript (with Node and React) because this has been my go-to tech stack when it comes to job searching.

However, I was able to salvage some resources (like the endpoint contracts for the backend and the SCSS styles for the frontend) to speed up the process and keep the solution consistent.

Since my focus was on the backend side, I tried to keep the frontend style alterations to a minimal, respecting the provided SCSS structure and only appending the required styles for the new elements.

In order to keep the solution evolutive, easily testable and clearly split business logic and interfaces details, I applied Clean Architecture principles to create the layers:

- [`api`](./node-backend/src/api): exposes the server API using Express
- [`core`](./node-backend/src/core): handles pure business logic _(like activity filtering, supplier matching, etc...)_
- [`data`](./node-backend/src/data): provides the attached JSON resources

For both applications, tests were written to validate both happy path and error scenarios.

## Future Improvements

### Functionality

- Auto-Load? _(decide if we should keep loading activities when the user first enters the page or if we should wait until the user clicks on the Search button)_
- Navigation _(open a detailed view when clicking on the card)_
- Pagination _(instead of returning all matching activities)_
- Sort Options _(by price, rating, etc...)_
- Multi-Criteria Filtering _(by rating, special offer presence, price range, supplier address)_

### Performance

- Cache _(store frequently requested data to reduce load times and server strain)_
- Throttling _(prevent multiple requests by disabling the Search button when fetching data)_
- Load Balancing _(distribute incoming requests evenly across multiple instances)_
- Scaling _(use orchestration tools to manage scaling based on CPU or memory usage)_

### Accessibility

- Keyboard Navigation _(make sure all interactive elements - like the activity cards - can be navigated and selected through using the keyboard)_
- Screen Reader _(improve ARIA attributes to improve accessibility for visually impaired users)_

### Analytics

- User Tracking _(automatically track user behavior and preferences)_
- Feedback _(allow users to submit direct feedback about their experience)_

### Monitoring

- Logging / Alerts _(centralize log management, identify patterns and trigger alerts when needed)_

### Automation

- Continuous Integration _(ensure available automated tests are executed automatically before integrating new code)_
- Continuous Deployment _(ensure automated deployments take place following successful CI checks)_
