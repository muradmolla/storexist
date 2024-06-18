# Storexist

## Installation

Clone the repository.
Install packages with yarn:

```
yarn install
```

## Usage

Application is not production ready. To run the application in development mode, run:

```
yarn dev
```

Test the application:

```
yarn test
```

# Decisions

GoogleBooksApi selected as backend. It is a free api with a wide range of books. It is easy to use and provides a lot of information about books. It is also a good choice for a demo application.

## Boilerplate

```
joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate
```

Boilerplate includes React, Typescript, Vite, TailwindCSS, ESLint, Prettier, Vitest and React Testing Library. Vite is used as the build tool.
TailwindCSS is used for styling. ESLint and Prettier are used for linting and formatting. Vitest is used for testing. React Testing Library is used for testing React components. Overall, the boilerplate included most of the configuration needed for this project.

## Extra Packages

- Redux: State management. Used for global state management. Cart state is used by multiple components therefore it is stored in Redux.
- React Router: Routing. Used for routing between different pages.
- React Icons: Versatile Icon package. Used for icons in the application.

## Notable Design Choices

- GoogleBooksApi module: Created for interacting with Google Books API. It includes functions for searching books and getting book details.
- Cart slice: Redux slice for cart state. Includes reducers for adding and removing books from cart. Also, includes a function for cleanup after the checkout.
- Checkout pages: Checkout pages are created for the checkout process. It includes a summary page and a success page. In this system global store is not used because after clicking the checkout button, changes in the cart should not effect the checkout process. Therefore, data passing in the router is used instead of global state.
- Home page: Home page is just a page with predefined search queries. It is used for demonstration purposes.
- Boilerplate persistence: Components from boilerplate is left in the project to test the core packages of the application.

# Improvements

## Known Issues

- Google Books Api returns different total items for the same search query with different page value. This causes the application to show different page counts for the same search query. This can be solved by fetching the total item count from the first page and using it for pagination.
- Clicking the logo doesn't refresh the page when in the home page.
