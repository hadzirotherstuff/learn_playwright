# Learn Playwright

A simple Playwright JavaScript starter project for learning end-to-end browser automation and the Page Object Model (POM).

## Project structure

```text
learn_playwright/
├── pages/
│   └── LoginPage.js
├── tests/
│   └── example.spec.js
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md
```

## Prerequisites

- Node.js 18 or newer
- npm

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/hadzirotherstuff/learn_playwright.git
cd learn_playwright
npm install
npx playwright install
```

## Run tests

Run all tests in headless mode:

```bash
npm test
```

Run tests with the browser visible:

```bash
npm run test:headed
```

Open Playwright UI mode:

```bash
npm run test:ui
```

Open the latest HTML test report:

```bash
npm run report
```

## Page Object Model

`pages/LoginPage.js` is a starter Page Object Model class. Update its locators and login URL when you begin automating your own application.

Example usage:

```javascript
const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('login example', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto('https://example.com/login');
  await loginPage.login('username', 'password');
});
```

## Useful Playwright commands

```bash
# Generate test code interactively
npx playwright codegen https://example.com

# Run only Chromium
npx playwright test --project=chromium

# Run a specific test file
npx playwright test tests/example.spec.js

# Debug tests
npx playwright test --debug
```

## Next learning steps

1. Learn Playwright locators and assertions.
2. Create additional page objects under `pages/`.
3. Add login and form automation tests.
4. Learn fixtures and test data management.
5. Add API testing with Playwright's request context.
6. Add GitHub Actions CI once the local test suite is stable.
