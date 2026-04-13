# Esvatin 中文網站與簡報模式實作計畫

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade the existing Esvatin site into a Chinese-first website with a switchable presentation mode while preserving the dual-content-version model.

**Architecture:** The site keeps a single semantic page structure and a single content model, but adds a second interface state for view mode. Website mode uses scrolling sections and sticky navigation, while presentation mode turns the same sections into slide-like panels with pagination and keyboard navigation.

**Tech Stack:** HTML, CSS, vanilla JavaScript, PowerShell validation script

---

### Task 1: Document the new approved scope

**Files:**
- Create: `docs/plans/2026-04-13-esvatin-zh-presentation-design.md`
- Create: `docs/plans/2026-04-13-esvatin-zh-presentation-implementation.md`

**Step 1: Write the design document**

Capture the approved hybrid direction, section-to-slide mapping, Chinese-first UI approach, and presentation-mode behavior.

**Step 2: Write the implementation plan**

Describe the concrete files, mode switching behavior, and validation strategy.

### Task 2: Extend validation first

**Files:**
- Modify: `scripts/test-esvatin-web.ps1`

**Step 1: Add checks for Chinese UI markers**

Require labels such as `網站模式`, `簡報模式`, and `內部培訓`.

**Step 2: Add checks for presentation-mode markers**

Require HTML or JS markers for pagination, slide navigation, and view-mode switching.

**Step 3: Run the script to verify it fails**

Run: `powershell -ExecutionPolicy Bypass -File scripts/test-esvatin-web.ps1`
Expected: FAIL until the new UI and logic are implemented.

### Task 3: Implement the hybrid interface

**Files:**
- Modify: `site/index.html`
- Modify: `site/styles.css`
- Modify: `site/app.js`

**Step 1: Update HTML controls**

Add Chinese labels, view mode toggles, presentation controls, and any required mode-specific containers.

**Step 2: Update styling**

Create polished Chinese UI labels, presentation layout rules, pagination display, and responsive behavior.

**Step 3: Update JavaScript state**

Add Chinese copy, presentation-mode state, keyboard handling, slide index tracking, and next/previous navigation.

### Task 4: Verify the final behavior

**Files:**
- Verify: `scripts/test-esvatin-web.ps1`
- Verify: `site/index.html`
- Verify: `site/styles.css`
- Verify: `site/app.js`

**Step 1: Run the validation script**

Run: `powershell -ExecutionPolicy Bypass -File scripts/test-esvatin-web.ps1`
Expected: PASS.

**Step 2: Inspect structure markers**

Check that the HTML and JS include Chinese UI markers and presentation-mode controls.

**Step 3: Inspect layout rules**

Check that the CSS includes both website mode and presentation mode behavior.
