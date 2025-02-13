# electron-note-app

An Electron note application with React

## Project Setup

### Clone the Project

```bash
$ git clone https://github.com/bcila/et-electron-note-app.git
```

### Install

In the project folder

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

## Main Features
>In the project setup, I used __Vite__ + __ElectronJS__. Additionally, I used __React JS__. The reason I chose __Vite__ is its __fast build times__, __hot module replacement__, and __hot reload__ features. These significantly speed up our workflow during the development.

### Core Features
- __Quick Note-Taking__: Users can quickly add notes with a simple input interface
- __Timestamp Tracking__: Each note automatically gets timestamped when created
- __Clean UI__: Minimalist interface with a focus on readability
- __Data Persistence__: Notes are automatically saved using Electron-Store
- __Cross-Platform__: Works on Windows, macOS, and Linux

### Technical Stack
- __Frontend__: React JS with modern hooks for state management
- __Build Tool__: Vite for rapid development and optimized builds
- __Storage__: Electron-Store for persistent local storage

>In this project, data is stored in __Electron-Store__, and the format for notes is as follows:
> ```json
> {
>   "notes": [
>     {
>       "id": "87cdc3e2-ad62-48cf-83bb-91b1490b9959",
>       "note": "Test note 2",
>       "date": "13.02.2025 11:53:11"
>     },
>     {
>       "id": "23eee270-99e9-4ae1-8f8b-b4957514d42d",
>       "note": "This is a test note",
>       "date": "13.02.2025 11:52:25"
>     }
>   ]
> }
> ```

> - The deletion process is done using the ID,
The reason for using the ID is that the data is actually stored in an array, and if array is reversed, the indexes get
mixed up, which would break the deletion process.
> - The date information is only to know when the note was added.


## Third Party Packages
>The most important third-party packages used in this project,
> - React
> - Electron-Toolkit
> - Vite
> - Electron-Store.
#### Dependencies:
- **@electron-toolkit/preload**: A toolkit for working with Electron's preload scripts.
- **@electron-toolkit/utils**: Utilities for Electron development.
- **electron-store**: A simple storage solution for Electron apps, used to store configuration settings.

#### DevDependencies:
- **@electron-toolkit/eslint-config**: An ESLint configuration package for Electron development.
- **@electron-toolkit/eslint-config-prettier**: ESLint configuration that integrates with Prettier for consistent code formatting.
- **@vitejs/plugin-react**: A plugin for integrating React with Vite.
- **electron**: The core Electron framework for building desktop apps.
- **electron-builder**: A tool for packaging and building Electron applications.
- **electron-vite**: A Vite plugin for Electron that simplifies the build process.
- **react**: A JavaScript library for building user interfaces.
- **react-dom**: The DOM bindings for React.
- **vite**: A modern build tool that focuses on speed and performance, commonly used with frontend frameworks like React.
