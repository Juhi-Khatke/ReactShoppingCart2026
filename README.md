# React Shopping Cart Demo — Playwright Test Suite

This repository contains Playwright end-to-end tests (with Allure results) for a React Shopping Cart demo application.

## Contents
- **Tests:** tests/ (contains `Productlist.spec.ts` and supporting folders)
- **Test helpers:** actions/, fixtures/, pages/, utils/, testdata/
- **Reports:** allure-results/, allure-report/, playwright-report/
- **Configs:** `playwright.config.ts` (root) and ReactShopping/playwright.config.ts
- **Example app:** ReactShopping/

## Requirements
- Node.js 16+ and npm
- npx (bundled with npm)
- Optional: Allure CLI for advanced report viewing

## Install
Install dependencies and Playwright browsers:

```bash
npm install
npx playwright install
```

## Run tests
Run the full Playwright test suite:

```bash
npx playwright test
```

Run a single spec file:

```bash
npx playwright test tests/Productlist.spec.ts
```

Show the HTML Playwright report after a run:

```bash
npx playwright show-report
```

## Allure report (if `allure-results/` exists)
Generate and open an Allure report (requires `allure` CLI installed globally or via npx):

```bash
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

## Project structure (top-level)
- `package.json` — project scripts and dependencies
- `playwright.config.ts` — Playwright configuration
- `tests/` — main test specs (e.g., `Productlist.spec.ts`)
- `actions/`, `fixtures/`, `pages/`, `testdata/`, `utils/` — test helpers and page objects
- `allure-results/` — test run results (JSON)
- `allure-report/`, `playwright-report/` — generated HTML reports
- `ReactShopping/` — example app and a second Playwright project

## Test conventions
- Tests use Playwright test runner with page objects under `pages/` and reusable actions under `actions/`.
- Test data is stored in `testdata/` and fixtures in `fixtures/`.

## Common scripts
You can add helpful npm scripts to `package.json`, for example:

```json
"scripts": {
  "test": "npx playwright test",
  "test:report": "npx playwright show-report",
  "allure:generate": "npx allure generate ./allure-results --clean -o ./allure-report"
}
```

## Troubleshooting
- If tests fail due to missing browsers, run `npx playwright install`.
- If Allure commands fail, install the CLI: `npm i -g allure-commandline` or use the recommended platform installer.



---
Generated README based on repository structure and tests present in the workspace.
