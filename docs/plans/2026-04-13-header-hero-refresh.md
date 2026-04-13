# Header Hero Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Simplify the top of the site so the header becomes a light utility bar and the hero becomes the clear visual entry point.

**Architecture:** Keep the existing content model and JavaScript wiring intact, but reorganize the top-level HTML into a slimmer masthead plus a more intentional hero composition. Update the CSS tokens and component styles so the top area feels editorial instead of dashboard-heavy.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript

---

### Task 1: Restructure the top-of-page markup

**Files:**
- Modify: `site/index.html`

**Step 1: Write the failing test**

Visual-only change. No meaningful automated test exists for the current static structure.

**Step 2: Run test to verify it fails**

Not applicable for this repository.

**Step 3: Write minimal implementation**

Replace the heavy control bar wrapper with a slimmer masthead that separates brand copy from utility controls. Keep the existing toggle controls and IDs so JavaScript behavior continues to work.

**Step 4: Run test to verify it passes**

Open the page and confirm the top area renders as a slim masthead followed by a single hero section.

**Step 5: Commit**

Deferred.

### Task 2: Restyle the masthead and hero

**Files:**
- Modify: `site/styles.css`

**Step 1: Write the failing test**

Visual-only change. No automated stylesheet assertions exist.

**Step 2: Run test to verify it fails**

Not applicable for this repository.

**Step 3: Write minimal implementation**

Reduce header weight, scale down controls, add more hierarchy to the hero, and tighten the relationship between the hero copy and supporting cards.

**Step 4: Run test to verify it passes**

Reload the page and confirm the top area has clearer hierarchy on desktop and mobile.

**Step 5: Commit**

Deferred.
