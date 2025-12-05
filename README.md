# Widget

## Overview

This project is a demo widget built with Vue 3 + Vite.  
It reuses logic and components from the `microapp` project via a git submodule and Vite alias.

## Structure

- `microapp/` is included as a git submodule in `widget/microapp/`.
- Shared logic and components are imported using the alias `@microapp`.

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
