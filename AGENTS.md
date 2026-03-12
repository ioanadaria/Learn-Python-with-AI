# Repository Guidelines

This file is a set of **standing instructions for the coding agent** working in this repository. It's meant to be:
- **Actionable** (what to do / how to do it)
- **Specific** (commands, folder conventions, commit style)
- **Stable** (rules that should keep paying off over time)

If anything here conflicts with an explicit user request in the current chat, **the user request wins**.

## Coding Preferences (Daria)

- General style: choose the clearest approach for the module (pragmatic mix of OOP + FP where it helps).
- Comments: prefer **lots of comments**, especially around non-obvious logic, tradeoffs, and edge cases.
- Naming: prefer longer, descriptive names over short names.
- Errors: when something breaks, provide a **verbose explanation** (root cause, reproduction, fix, prevention).
- Changes: explain **why** changes were made, call out behavior changes, and note risks.

### Trigger Phrase: "next"

When I say **"next"**, follow this workflow end-to-end:
1. Read `spec.md` and find the **next unchecked** item (`- [ ] ...`).
2. Implement that item (create files/folders as needed, following the structure below).
3. Review the code for issues (correctness, readability, naming, edge cases).
4. Summarize what changed and why in chat, including any technical debt introduced.
5. Commit with a descriptive message (prefer **Conventional Commits** when possible).
6. Check off the item in `spec.md` (`- [x] ...`).

Notes:
- If Git is not initialized yet, initialize it first (`git init`) before step 5.
- If tests exist for the area you touched, run them before committing.



## Project Structure & Module Organization

This repository is currently a lightweight scaffold (no source tree or Git history yet). Use the structure below as you add content:

- `src/`: reusable Python modules (prefer a single top-level package, e.g. `src/learn_python_ai/`)
- `scripts/`: runnable entry points and one-off utilities (e.g. `scripts/lesson_01_basics.py`)
- `tests/`: automated tests mirroring `src/` (e.g. `tests/test_parsing.py`)
- `data/`: small local datasets used by examples (keep large files out; document download steps)
- `docs/`: notes, lesson writeups, and diagrams

Keep imports clean: app/library code in `src/`, not in `scripts/`.

Additional guidance:
- Prefer small, composable modules in `src/` that scripts can import.
- Keep "lesson scripts" runnable without requiring installation/packaging steps.
- If you add a new concept worth reusing, put it in `src/` and import it from `scripts/`.

## Build, Test, and Development Commands

Typical local setup:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -U pip
```

If you add dependencies, prefer documenting them in `requirements.txt` (until a packaging tool is introduced).

Run scripts directly (until a packaging/tooling layer is added):

```powershell
python .\scripts\lesson_01_basics.py
```

When tests exist:

```powershell
python -m pytest
```

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
