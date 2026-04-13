# Esvatin Web Presentation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a static single-page website that turns the Esvatin slide decks into a polished web presentation with a switchable internal-training and conservative-external view.

**Architecture:** The implementation uses a static HTML shell and a JavaScript content model. The page structure stays stable while a version switcher swaps in different copy, evidence emphasis, and summary cards from the two slide decks. Styling is handled with a dedicated CSS theme tailored to a clinical education presentation.

**Tech Stack:** HTML, CSS, vanilla JavaScript, PowerShell validation script

---

### Task 1: Document the approved design

**Files:**
- Create: `docs/plans/2026-04-13-esvatin-web-design.md`
- Create: `docs/plans/2026-04-13-esvatin-web-implementation.md`

**Step 1: Write the design summary**

Capture the approved page structure, interaction model, and visual direction for the dual-version website.

**Step 2: Write the implementation plan**

List the concrete files, structure, and verification approach for the website build.

### Task 2: Add a failing validation script

**Files:**
- Create: `scripts/test-esvatin-web.ps1`

**Step 1: Write a file-existence and content-presence test**

Check for `site/index.html`, `site/styles.css`, and `site/app.js`.

**Step 2: Run the script to verify it fails**

Run: `powershell -ExecutionPolicy Bypass -File scripts/test-esvatin-web.ps1`
Expected: FAIL because the site files do not exist yet.

### Task 3: Build the static website

**Files:**
- Create: `site/index.html`
- Create: `site/styles.css`
- Create: `site/app.js`

**Step 1: Create the HTML shell**

Add the hero, version switch, section anchors, and semantic containers for dynamic content.

**Step 2: Create the visual system**

Add typography, layout, cards, charts, responsive behavior, and subtle background treatments.

**Step 3: Create the content model and renderer**

Represent the two deck versions in JavaScript and render the themed sections, metric cards, evidence bars, and message cards based on the selected version.

### Task 4: Verify the build

**Files:**
- Verify: `scripts/test-esvatin-web.ps1`
- Verify: `site/index.html`
- Verify: `site/styles.css`
- Verify: `site/app.js`

**Step 1: Run the validation script**

Run: `powershell -ExecutionPolicy Bypass -File scripts/test-esvatin-web.ps1`
Expected: PASS after implementation.

**Step 2: Check the page structure manually**

Confirm the HTML contains the expected section anchors and the JavaScript contains both content variants.

**Step 3: Check responsiveness in code**

Confirm the CSS includes mobile-friendly layout changes for the navigation, hero, and multi-column panels.
