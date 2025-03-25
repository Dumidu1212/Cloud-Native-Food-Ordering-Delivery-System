# Environment Setup Guide

## Tools Installation
- **VS Code:** Download and install from [VS Code](https://code.visualstudio.com/).
- **Flutter SDK:** Download from [Flutter Installation](https://flutter.dev/docs/get-started/install) and add it to your PATH.
- **Node.js:** Download the LTS version from [Node.js](https://nodejs.org/).
- **Docker Desktop:** Install from [Docker Desktop](https://www.docker.com/products/docker-desktop).
- **Kubernetes CLI (kubectl):** Install as per the instructions at [Kubernetes CLI Installation](https://kubernetes.io/docs/tasks/tools/install-kubectl/).

## Configuration Files

### ESLint and Prettier (for Node.js Backend)
- **.eslintrc.json:** Defines linting rules. Refer to the file for standards on code style.
- **.prettierrc:** Sets formatting rules for consistent code formatting.

### Environment Variables
- **.env.example:** Contains all necessary environment variables.
  - Copy `.env.example` to `.env` in each project directory.
  - Fill in actual values for your development environment.
  - Example:
    ```bash
    cp .env.example .env
    ```
  - **Important:** The actual `.env` file must be excluded from Git (see `.gitignore`).

### Flutter Settings (Optional)
- **flutter_settings.json:** Optional file for additional Flutter configuration if required.

## Steps to Set Up
1. Clone the repository.
2. Follow the installation steps listed above.
3. Copy `.env.example` to `.env` and update with your credentials.
4. Open VS Code and install the recommended extensions (Flutter, Docker, Kubernetes).
5. Run `flutter doctor` and `node --version` to verify installation.
6. Follow any additional instructions in this document to complete your setup.

Please follow these steps for a consistent development environment.
