
## Project Overview

This project contains two main parts:
- `api` — Next.js backend API serving a simple message.
- `desktop` — Tauri desktop app frontend built with Next.js that calls the backend API.

---

## Folder Structure

```
/NextTauriApp
  /.github/workflows/ci.yml
  /apps
    /api
    /pages
        /api
        hello.js    
    package.json
  
    /desktop
    /pages
        index.js 
    /tests
        app.spec.cjs       
    /src-tauri
        tauri.conf.json       
    package.json
  README.md
```

---

## Running the Project Locally

### 1. Start the API server
```bash
cd apps/api
npm install
npm run dev
```
This will start the API server at `http://localhost:3001`.

### 2. Start the Desktop frontend app
```bash
cd apps/desktop
npm install
npm run dev
```
This starts the Next.js frontend at `http://localhost:3000`.

### 3. Run the Tauri app
To run the Tauri desktop app (make sure API is running):
```bash
npm run tauri
```

---

## Running Tests

The test file `desktop/tests/app.spec.cjs` uses Playwright for integration testing.

To run tests:
```bash
cd desktop
npm install
npx playwright install  # Make sure browsers are installed
npm test
```

---

## GitHub Actions CI Workflow

This project includes a GitHub Actions workflow located in `.github/workflows/ci.yml` that:

- Installs dependencies
- Runs the API server in the background
- Runs the desktop app frontend
- Runs Playwright tests against the desktop app

---



## Contact

For any questions, please reach out to Ruchi Dhami at dhamiruchi5@gmail.com.
