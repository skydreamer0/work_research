# Medical Slide Orchestration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a reusable Codex project that can take a medical training slide prompt, verify the provided references, classify claim safety, and produce both internal-training and conservative external-candidate deck outputs.

**Architecture:** The project will use a controller workflow. The controller first parses the user's slide prompt, then routes independent work to bounded subagents for citation verification and claim mapping, and only after verification generates deck outputs. The workspace will preserve evidence, verification outcomes, slide-by-slide claim support, and output drafts.

**Tech Stack:** Markdown workflow docs, prompt templates, source verification notes, slide deck draft files

---

### Task 1: Define controller workflow and file outputs

**Files:**
- Modify: `README.md`
- Modify: `WORKFLOW.md`
- Create: `MCP.md`
- Create: `templates/controller-prompt-template.md`
- Create: `templates/reference-verification-template.md`
- Create: `templates/claim-map-template.md`

**Step 1: Update `README.md`**

Add the "complete project" workflow: prompt intake, subagent routing, citation verification, claim mapping, and deck output split.

**Step 2: Update `WORKFLOW.md`**

Add hard rules for reference verification, claim-level support checks, and output gating.

**Step 3: Add `MCP.md`**

Document how Codex should use web or MCP tools for literature verification and retrieval.

**Step 4: Add orchestration templates**

Create templates for the controller prompt, per-reference verification, and slide claim mapping.

### Task 2: Verify the Esvatin prompt references

**Files:**
- Create: `raw/2026-04-13 - Ali 2024 - evidence.md`
- Create: `raw/2026-04-13 - Kolokythas 2024 - evidence.md`
- Create: `raw/2026-04-13 - van Haaften 1997 - evidence.md`
- Create: `raw/2026-04-13 - Rueda 2017 - evidence.md`
- Create: `cards/2026-04-13 - Esvatin Reference Verification Summary.md`

**Step 1: Search and verify each citation**

Confirm whether the cited article exists and whether the year, journal, volume, issue, and page range are accurate.

**Step 2: Check claim fit**

Compare the prompt's stated numeric findings and mechanistic claims against the available source evidence.

**Step 3: Record uncertainty**

If a citation or claim cannot be verified, mark it as unresolved and prevent it from being treated as safe deck input.

### Task 3: Build first-pass claim map and deck drafts

**Files:**
- Create: `outlines/esvatin-deck-claim-map.md`
- Create: `slides/esvatin-internal-training-deck.md`
- Create: `slides/esvatin-conservative-external-candidate-deck.md`

**Step 1: Map each slide to source support**

For slides 1 through 10, identify whether the requested content is supported, partially supported, unsupported, or review-needed.

**Step 2: Draft internal-training deck**

Use only verified or explicitly caveated content. Preserve the user's desired structure and tone where evidence allows.

**Step 3: Draft conservative external-candidate deck**

Further restrict wording, remove higher-risk statements, and keep only the most supportable framing.

### Task 4: Verify all created outputs

**Files:**
- Verify: `README.md`
- Verify: `WORKFLOW.md`
- Verify: `MCP.md`
- Verify: `raw/*.md`
- Verify: `cards/*.md`
- Verify: `outlines/*.md`
- Verify: `slides/*.md`

**Step 1: List the generated files**

Run: list the created files in the root, `raw/`, `cards/`, `outlines/`, `slides/`, and `templates/`.

**Step 2: Verify evidence language**

Check that unsupported claims are marked rather than silently accepted.

**Step 3: Verify output split**

Check that the internal-training deck and conservative external-candidate deck differ where risk requires.
