# Widget


## Overview

This project is a demo widget built with Vue 3 + Vite.  
It reuses logic and components from the `microapp` project via a git submodule and Vite alias. It shows
- how to reuse almos all code and structure from the microapp
- how to handle dependendencies, ie ui-lib
- how to add features, ie messaging using postMessage to widget
- ...

## Structure

- `microapp/` is included as a git submodule in `widget/microapp/`.
- Shared logic and components are imported using the alias `@microapp`.

### Local `microapp` dependency (hacky “submodule”)

This widget is a PoC that **reuses logic from the `microapp` project** instead of duplicating it.  
Most importantly, it imports the composable `useSummary` from the microapp and combines it with widget-specific concerns like `usePartnerCode`, banners, and partner-specific UI.

To keep things simple, this repo does **not** use a real Git submodule.  
Instead, it expects a **local clone** of the `microapp` repo to exist under `./microapp`, which is **ignored** by this repo’s Git history.

#### How it works

- `microapp/` is a separate Git repository, cloned locally inside this project:
  - it has its own `.git`, branches, remotes, etc.
  - it is listed in `.gitignore` in this repo and is **not** committed here.
- `vite.config.js` defines an alias:

```js
  resolve: {
    alias: {
      '@microapp': path.resolve(__dirname, 'microapp/src'),
    },
  }
```

The widget imports from the microapp codebase, for example:
```js
import { useSummary } from '@microapp/composables/useSummary'

```

Setting up locally

Clone the widget repo:
```bash
git clone <widget-repo-url>
cd widget
```

Clone the microapp repo inside the widget repo:
```bash
git clone <microapp-repo-url> microapp
```

Install and run the widget as usual:

```bash
npm install
npm run dev
```


## Dependencies

- **Vue 3**
- **Element Plus** (UI library, required by both widget and microapp)

> **Important:**  
> If `microapp` upgrades Element Plus (or other shared dependencies), you must also update the same dependency in `widget` to avoid version conflicts.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start development server:
   ```sh
   npm run dev
   ```

## Keeping dependencies in sync

- Check `microapp/package.json` for UI library versions.
- Update `widget/package.json` to match shared dependencies.
- Example for Element Plus:
  ```sh
  npm install element-plus@<version>
  ```

## Usage

The widget imports composables and components from `microapp` and wraps them in its own layout and header/footer.

---
