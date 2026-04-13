# Medical Research Workspace Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Scaffold a Codex research workspace tailored for a medical representative who needs evidence-based, traceable, and risk-aware materials for promotion and teaching.

**Architecture:** Create a documentation-first workspace. Store operating rules in `WORKFLOW.md`, orientation in `README.md`, and reusable markdown forms in `templates/`. Keep the scaffold lightweight so the user can start dropping sources into `inbox/` immediately.

**Tech Stack:** Markdown files, folder conventions, Codex workflow rules

---

### Task 1: Create workspace directories

**Files:**
- Create: `raw/`
- Create: `cards/`
- Create: `opinions/`
- Create: `outlines/`
- Create: `drafts/`
- Create: `slides/`
- Create: `scripts/`
- Create: `inbox/`
- Create: `templates/`

**Step 1: Create the directories**

Run: create each directory if it does not already exist.

**Step 2: Verify the directories exist**

Run: list the workspace root and confirm all folders are present.

### Task 2: Create project orientation documents

**Files:**
- Create: `README.md`
- Create: `WORKFLOW.md`

**Step 1: Write `README.md`**

Include workspace purpose, folder map, operating philosophy, and example prompts.

**Step 2: Write `WORKFLOW.md`**

Include pipeline order, hard rules, content classification, and output constraints.

**Step 3: Verify file content**

Open each file and confirm the key sections exist.

### Task 3: Create reusable templates

**Files:**
- Create: `templates/raw-evidence-template.md`
- Create: `templates/reading-card-template.md`
- Create: `templates/opinion-note-template.md`
- Create: `templates/slide-brief-template.md`

**Step 1: Write raw evidence template**

Capture citation verification, source metadata, extracted evidence, and unresolved issues.

**Step 2: Write reading card template**

Capture paper summary and medical representative communication screening fields.

**Step 3: Write permanent note template**

Capture reusable claims, evidence base, and application guidance.

**Step 4: Write slide brief template**

Capture title, message, evidence links, communication type, and compliance flags.

**Step 5: Verify template coverage**

Open each template and confirm they support both promotion and teaching use cases.

### Task 4: Final verification

**Files:**
- Verify: `README.md`
- Verify: `WORKFLOW.md`
- Verify: `templates/*.md`

**Step 1: List created files**

Run: show the workspace tree for the root and `templates/`.

**Step 2: Sanity-check wording**

Read the generated docs and confirm they do not fabricate citations or imply legal approval.

**Step 3: Summarize next-step usage**

Prepare concise guidance for how the user can start dropping sources into `inbox/`.
