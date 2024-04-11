# Saucedemo Automated Tests

## Overview

This repository contains automated test cases for the `standard_user` login at the [Sauce Demo](https://www.saucedemo.com) website. It uses Cypress.io for end-to-end testing to ensure that the web application behaves as expected.

## Prerequisites

Before you can run these tests, you'll need to have the following installed:

- Node.js and npm (You can download it from [Node.js official website](https://nodejs.org/))

## Setup

To set up the testing environment, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the cloned directory via command line and run `npm install` to install all dependencies, including Cypress.

## Running the tests

To run the automated tests, execute the following command in the root of the project directory:

```npx cypress open```

This will open the Cypress Test Runner. From here, you can run the tests interactively.

Alternatively, you can run the tests in headless mode using:

```npx cypress run```

## Test Cases

The documented test cases are available in `test_cases.md` within this repository.

## Contributing

Contributions are welcome. If you find any issues or want to add more tests, please create a pull request or open an issue.

Thank you for using or contributing to this project!
