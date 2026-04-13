# GitHub Pages Setup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Prepare this workspace for Git versioning and automated GitHub Pages deployment from the `site/` directory.

**Architecture:** Keep the existing research workspace structure intact, initialize Git at the repository root, and add a GitHub Actions workflow that publishes the static site from `site/` whenever `main` is updated. Document the remaining GitHub-side steps so the repository can be connected quickly once authentication is available.

**Tech Stack:** Git, GitHub Actions, GitHub Pages, static HTML/CSS/JavaScript, PowerShell

---

### Task 1: Add repository hygiene files

**Files:**
- Create: `.gitignore`
- Modify: `README.md`

**Step 1: Add a root `.gitignore`**

Ignore common operating system noise, editor settings, and temporary files without excluding project content.

**Step 2: Document the repository purpose**

Add a short section to `README.md` that explains the repository now supports GitHub Pages from `site/`.

**Step 3: Verify the changed files read cleanly**

Run: `Get-Content .gitignore`
Expected: Ignore rules are present and limited to local noise.

### Task 2: Add deployment automation

**Files:**
- Create: `.github/workflows/deploy-pages.yml`
- Create: `scripts/setup-github-pages.ps1`

**Step 1: Add a Pages workflow**

Create a GitHub Actions workflow that uploads `site/` as the Pages artifact and deploys it on pushes to `main`.

**Step 2: Add a local helper script**

Create a PowerShell script that initializes Git if needed, creates the initial commit if needed, and prints the exact GitHub commands the user should run after creating or authenticating a repository.

**Step 3: Verify workflow readability**

Run: `Get-Content .github/workflows/deploy-pages.yml`
Expected: Workflow targets `main` and deploys from `site/`.

### Task 3: Prepare the local repository

**Files:**
- Modify: local Git metadata only

**Step 1: Initialize Git**

Run: `git init -b main`
Expected: Local repository is created on branch `main`.

**Step 2: Stage and commit the project**

Run: `git add .`
Run: `git commit -m "chore: initialize repository and add pages deployment"`
Expected: A first commit exists locally.

**Step 3: Inspect repository status**

Run: `git status --short`
Expected: Working tree is clean.

### Task 4: Verify the site and hand off remote setup

**Files:**
- Modify: none or docs only if needed

**Step 1: Run the existing site check**

Run: `powershell -ExecutionPolicy Bypass -File scripts/test-esvatin-web.ps1`
Expected: Either the site passes, or the script reveals outdated expectations that must be corrected before completion.

**Step 2: Summarize the remaining GitHub-side action**

Report the exact next step: create or authenticate the `work_research` repository on GitHub, add the remote, push `main`, and enable Pages.
