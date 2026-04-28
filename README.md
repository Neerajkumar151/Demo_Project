
# Demo Project - Git Workflow Assignment

This project demonstrates Git workflow practices including merge conflict resolution and line-by-line commits.

## Table of Contents
- [Project Setup](#project-setup)
- [Merge Conflict Resolution](#merge-conflict-resolution)
- [Line-by-Line Commits](#line-by-line-commits)

## Project Setup

This is a React + Vite project with minimal setup for getting React working with HMR and ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Merge Conflict Resolution

This section demonstrates resolving merge conflicts in a Git workflow.

### Merge Conflict - Scenario 1
**Description:** Conflict resolution when multiple branches modify the README.md file, showing how to handle conflicting changes from different branches.

**Screenshot 1:** Initial Conflict State
![Merge Conflict Screenshot 1](./public/Screenshot%20from%202026-04-28%2011-44-34.png)
*Shows the merge conflict markers in README.md with VS Code's merge conflict resolution options - "Accept Current Change", "Accept Incoming Change", "Accept Both Changes", and "Compare Changes"*

**Screenshot 2:** Resolved Conflict
![Merge Conflict Resolution Screenshot 2](./public/Screenshot%20from%202026-04-28%2011-45-48.png)
*Shows the final state after successfully resolving the conflict and accepting changes in the README.md file*

### Key Steps:
1. Identify conflicting sections marked with `<<<<<<<`, `=======`, `>>>>>>>`
2. Review changes from both branches using VS Code's merge editor
3. Use the provided options to accept changes or manually combine them
4. Remove conflict markers after resolving
5. Stage and commit the resolved changes with `git add` and `git commit`

## Line-by-Line Commits

This section demonstrates best practices for creating meaningful, granular commits with focused changes.

### Line-by-Line Commit - Example 1
**Description:** First commit changing the heading text from "Simple Calculator" to "React Calculator App" in the App.jsx component.

**Screenshot 3:** Commit 9abbd03 - Heading Update
![Line-by-Line Commit Screenshot 1](./public/Screenshot%20from%202026-04-28%2012-13-51.png)
*Shows GitHub commit 9abbd03 with message "Heading changed from Simple Calculator to React Calculator App". The diff displays the single line change on line 27 in src/App.jsx where the component title was updated. This demonstrates a focused, single-purpose commit.*

### Line-by-Line Commit - Example 2
**Description:** Second commit adding input field attributes and form styling improvements to the calculator component.

**Screenshot 4:** Commit 7068102 - Input Field Enhancement
![Line-by-Line Commit Screenshot 2](./public/Screenshot%20from%202026-04-28%2012-14-01.png)
*Shows GitHub commit 7068102 with message "changed input field". The diff shows multiple related changes (lines 27-39) in src/App.jsx, including adding input attributes like type="text", placeholder, and readOnly, along with className updates for styling. This demonstrates a logical commit grouping related UI improvements together.*

### Best Practices:
- Keep each commit focused on a single logical change or feature
- Write clear, descriptive commit messages that explain the "why" not just the "what"
- Use `git add -p` for staging specific changes when working with multiple modifications
- Review all staged changes before committing to ensure consistency
- Maintain a clean, readable commit history for better project maintainability
- Group related changes logically to make future git blame and bisect operations easier

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
