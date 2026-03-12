# JavaScript Conventions

This repository includes JavaScript/Node.js utilities. Use this document as the source of truth for the repo's day-to-day conventions and workflows.

## Coding Style & Naming Conventions

- Python: follow PEP 8, 4-space indentation, UTF-8 text files.
- Names: `snake_case.py`, functions/variables `snake_case`, classes `PascalCase`, constants `UPPER_SNAKE_CASE`.
- Prefer type hints on public functions and non-trivial data structures.
- Prefer docstrings for any public module/function/class in `src/`.
- If you add format/lint tooling (recommended: `ruff` + `black`), document exact commands here.

## Testing Guidelines

- Preferred framework: `pytest` (fallback: `unittest` if you want zero dependencies).
- Test files: `tests/test_*.py`; test functions: `test_*`.
- Add tests for bug fixes and for lesson code that is meant to be stable/reused.

## Commit & Pull Request Guidelines

There is no Git history yet, so conventions are not established. If/when you initialize Git, use Conventional Commits:

- `feat: add lesson 02 on lists`
- `fix: handle empty input in parser`
- `docs: explain virtualenv setup`

PRs should include: purpose, how to run/verify, and any screenshots for docs/UI changes.

## Security & Configuration Tips

- Never commit secrets. Use `.env` for local settings and add it to `.gitignore` once Git is enabled.
- Keep large/generated artifacts out of the repo (cache, model outputs, downloaded datasets).

## "Something broke" checklist (for agent responses)

When reporting a failure (tests, scripts, runtime errors), include:
- What you ran (exact command)
- What you expected vs what happened
- Minimal reproduction steps
- Root cause (most likely + any alternatives considered)
- Fix applied (and why it's safe)
- Prevention (tests, validation, guardrails, docs updates)

## Test-Driven Development

When implementing new features or functions:

1. Write tests FIRST in `stringUtils.test.js` using Node's native test runner:
   - Write tests using: `test('description', () => { assert.strictEqual(actual, expected); });`

2. Run tests with `node --test stringUtils.test.js` and confirm they FAIL (red)

3. Implement the feature in the source file

4. Run tests again with `node --test stringUtils.test.js` and confirm they PASS (green)

Always run tests before and after implementation to verify the red-green cycle. Don't worry about git or initialize git repos if there isn't one.

## Project Guidelines

This is a small Node.js utility project.

## File Organization

- Utility functions go in utils.js
- Keep one module per file

### Test runner note (Windows)

If `node --test` fails with `Error: spawn EPERM` in this environment, run with:

```powershell
node --test --test-isolation=none stringUtils.test.js
```
