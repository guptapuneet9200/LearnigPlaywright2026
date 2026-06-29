# Playwright Learning 2026

A structured hands-on repository for mastering **Playwright**, modern end-to-end browser testing, along with fundamental JavaScript runtime concepts (Node.js/V8 engine execution) and Java concepts.

## 📂 Repository Structure

The repository is organized into distinct chapters to make learning systematic:

### 📁 `chapter_01_Basic`
Focuses on verifying the runtime environment setup and understanding how JavaScript code execution behaves:
*   **[01_basic.js](file:///g:/PlayWrightLearning/chapter_01_Basic/01_basic.js)** - A simple "Hello Playwright" starter script.
*   **[02_js_step_by_step.js](file:///g:/PlayWrightLearning/chapter_01_Basic/02_js_step_by_step.js)** - Introductory code illustrating variables and loop executions.
*   **[03_verify_setup.js](file:///g:/PlayWrightLearning/chapter_01_Basic/03_verify_setup.js)** - Logs system architecture, OS platform, and Node.js version to verify environment readiness.
*   **[04_hot_code.js](file:///g:/PlayWrightLearning/chapter_01_Basic/04_hot_code.js)** - Demonstrates compiler optimizations (V8 engine JIT) for frequently run functions (hot path / hot code).

### 📁 `chapter_02_java_concept`
Dedicated folder for object-oriented programming and Java concepts applicable to test automation.

---

## 🛠️ Prerequisites & Run Instructions

Ensure you have [Node.js](https://nodejs.org/) installed.

### 1. Run environment verification:
```bash
node chapter_01_Basic/03_verify_setup.js
```

### 2. Execute any of the basic scripts:
```bash
node chapter_01_Basic/04_hot_code.js
```

---

## 🚀 Setting up Playwright (Next Steps)
To add Playwright tests to this repository, run:
```bash
# Initialize npm configuration
npm init -y

# Install Playwright Test runner
npm install --save-dev @playwright/test

# Install browser binaries (Chromium, Firefox, WebKit)
npx playwright install
```
