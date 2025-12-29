# Contributing to ForgeBorn

Thank you for your interest in contributing to ForgeBorn. This guide outlines the key steps to ensure your contributions can be reviewed and integrated smoothly.

---

## Reporting Issues

When reporting issues:

1. Provide detailed information, including logs via [mclo.gs](https://mclo.gs).
2. Ensure the issue is reproducible using the latest version of the modpack.

---

## Branching Strategy

This repository uses the following branching strategy:

- `feat/`: Use for new features or enhancements.
- `fix/`: Use for bug fixes.
- `dev/`: Use for GitHub and non-Minecraft changes.

---

## Submitting Changes

1. Fork the repository and create a new branch:

   ```bash
   git checkout -b feat/your-feature-name
   git checkout -b fix/your-bug-name
   ```

2. Commit your changes with clear, concise messages:

   ```bash
   git commit -m "feat: Add new endgame recipe"
   git commit -m "fix: Resolve NBT duplication issue with machines"
   ```

3. Push your changes:

   ```bash
   git push origin feat/your-feature-name
   ```

4. Open a pull request and include the following:

   - A clear and detailed description of the changes made in the branch, including reasoning if necessary.
   - Confirmation that the changes have been tested thoroughly, including:
     - Successful game launch without errors or crashes.
     - Running `/kubejs reload` to verify there are no script errors.
     - Ensuring that any changes to recipes or scripts display correctly in JEI/EMI.
     - Verification that the code adheres to the coding standards:
       - Code has been formatted using `npm run format`.
       - Linting has been executed and passed using `npm run lint`.

---

## Code Style

Consistent formatting and linting rules are enforced:

1. Run `npm install` to install dependencies.
2. Format your code by running:
   ```bash
   npm run format
   ```
3. Lint your code and fix warnings by running:
   ```bash
   npm run lint
   ```

---

## Testing Your Changes

Before submitting your pull request:

1. Test the game to ensure it launches without any issues.
2. Run `/kubejs reload` to check for scripting errors.
3. Verify any changes to recipes/scripts in JEI/EMI.
4. Run `npm run format`, and `npm run lint` in the `./kubejs` directory to check for any issues and to autoformat the script

---

## Using ProbeJS

`probejs` is a powerful tool for debugging and inspecting data from mods. It can be used to verify changes in recipes, tags, or other data.

### Setup

1. `probejs` data should be moved to `kubejs/probe` in the repository after you generate it.

### Running ProbeJS

1. Enter the game and open the chat console.
2. Use the following commands:
   - `/probejs help`: Displays a list of available commands and their usage.
   - `/probejs dump `: Dumps all data to a file.
3. This provides autocomplete for KubeJS!

Data dumps are saved to the `.minecraft/.probe` directory by default.

### Best Practices

- Confirm that new data (e.g., recipes or custom tags) added by your scripts is accessible and correctly formatted.

---

## Additional Information

For scripting, please follow the KubeJS documentation for best practices: [https://kubejs.com](https://kubejs.com).
For major changes, open a GitHub discussion or reach out to maintainers for alignment.
