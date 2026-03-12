# Progress Log (Codex)

This file is where Codex documents ongoing work in this repository:
- what was built/changed
- decisions made (and why)
- lessons learned / gotchas
- structural notes about the project (where things go, how to run/test)

Keep entries short, concrete, and dated. Prefer links to files over pasting large code blocks.

---

## 2026-03-12

### What changed

- Created `docs/` and moved the repo's conventions out of `AGENTS.md` into `docs/js_conventions.md`.
- Updated `AGENTS.md` to reference `docs/js_conventions.md` instead of duplicating the conventions inline.

### Decisions (and why)

- Centralized conventions in a dedicated doc to keep `AGENTS.md` focused and easier to scan, while still being authoritative for agent behavior.

### Lessons learned / notes

- The repo contains both Python-learning scaffolding guidance and a small Node.js utility/test setup; conventions should stay explicit about which ecosystem they apply to.

### Project structure notes

- `docs/`: conventions and project notes (`docs/js_conventions.md`, `docs/progress.md`).
- Root JS files: `stringUtils.js`, `stringUtils.test.js` (Node native test runner).

### How to run/tests (quick)

- Node tests: `node --test stringUtils.test.js`

2026-03-12 19:11:28 +02:00: Added `utils.js` with `reverseString()` (Unicode code point reversal via `Array.from`) and `utils.test.js`; discovered `node --test` needs `--test-isolation=none` here to avoid `spawn EPERM`, and documented the workaround in `docs/js_conventions.md`.
