# Medical Representative Research Workspace

This workspace is built for a medical representative who needs Codex to search literature, organize evidence, and turn that evidence into materials that can support both promotion and teaching.

The core idea is simple:

1. collect traceable evidence
2. summarize each source in a structured card
3. separate what is promotion-safe, education-safe, and internal-only
4. generate outlines, drafts, and slide materials only from linked evidence

This repository also supports a full slide-orchestration workflow:

1. parse a user prompt into slide tasks
2. verify whether the provided references actually exist
3. check whether each requested claim is supported by those references
4. block unsupported claims from entering the draft
5. split outputs into internal-training and conservative external-candidate versions

## What This Workspace Is For

Use this repository when you need to:

- search papers and review articles
- verify citation details before reuse
- capture evidence in a traceable format
- prepare internal learning materials
- prepare scientifically grounded slide decks
- reduce the risk of overclaim, off-label messaging, or unsupported comparisons

This is not a legal review system and not a substitute for local medical, regulatory, or compliance review. When a claim is uncertain, it should be marked for review rather than treated as safe.

## Folder Structure

- `raw/`  
  Source evidence, metadata, extracted text, citation checks, and unresolved issues.

- `cards/`  
  One structured reading card per paper or source.

- `opinions/`  
  Reusable permanent notes for themes, methods, recurring claims, objections, and teaching angles.

- `outlines/`  
  Report outlines, class structures, and slide deck skeletons.

- `drafts/`  
  Draft sections, speaker notes, or longer narrative outputs built from linked evidence.

- `slides/`  
  Slide-level content plans and deck text.

- `scripts/`  
  Small helper tools for metadata cleanup, DOI checks, and format conversion.

- `inbox/`  
  New PDFs, links, exported abstracts, or ideas waiting to be processed.

- `templates/`  
  Reusable markdown templates for evidence notes, reading cards, permanent notes, and slide briefs.

## Content Classes

Every evidence-based conclusion should eventually be handled in one of these classes:

- `Promotion-safe`  
  Candidate material for external promotional communication after internal review. Should align with approved use and avoid unsupported or exaggerated claims.

- `Education-safe`  
  Suitable for training, disease education, scientific exchange, or classroom-style explanation, but not automatically suitable for promotion.

- `Internal-only`  
  Useful for preparation, objection handling, strategic understanding, or future research, but not for direct external use.

## Standard Workflow

Always start by reading `WORKFLOW.md`.

Then move through the project in this order:

1. inspect `inbox/`
2. create evidence records in `raw/`
3. create one reading card per source in `cards/`
4. identify candidate updates for `opinions/`
5. update existing notes before creating new ones
6. generate `outlines/`, `drafts/`, or `slides/` only from linked evidence

## Controller Workflow For Medical Deck Projects

When the user provides a slide brief or a deck prompt, Codex should not jump straight to writing slides.

The preferred controller sequence is:

1. read `WORKFLOW.md`
2. parse the task into slide-level requirements
3. extract every citation, paper claim, number, and wording restriction
4. route reference verification to one or more subagents
5. route claim mapping to one or more subagents
6. collect verification results in `raw/`
7. produce a slide claim map in `outlines/`
8. draft `slides/` outputs only from verified or clearly caveated support

### Recommended Subagent Roles

- `Reference verifier`  
  Confirms whether each citation exists and whether the bibliographic details match.

- `Claim mapper`  
  Maps slide statements and numbers to supporting references and flags unsupported language.

- `Deck writer`  
  Writes slide copy and presenter notes using only approved inputs.

- `Compliance pass`  
  Checks for overclaim, unsupported comparison, off-label interpretation risk, and tone drift.

### Required Output Split

For mixed-use medical projects, create two downstream versions whenever possible:

- `Internal training`  
  More educational and explanatory, but still evidence-linked and not reckless.

- `Conservative external candidate`  
  Tighter wording, fewer higher-risk statements, and only the most supportable framing.

## Recommended Prompts

### 1. Process sources

```text
Read WORKFLOW.md first.
Inspect inbox/.
For each source:
1. create a raw evidence note in raw/
2. create one reading card in cards/
Use the templates already defined in this workspace.
Do not update opinions/ yet.
At the end, show:
- 3 key findings
- 2 limitations
- the proposed communication class for each source
```

### 2. Update reusable notes

```text
Read WORKFLOW.md first.
Based on the newly created cards, check whether opinions/ should be updated.
Update existing notes first.
Before creating any new permanent note, ask me.
For each update, keep evidence links to cards/ or raw/.
```

### 3. Build a presentation outline

```text
Read WORKFLOW.md first.
Use only linked evidence from raw/, cards/, and opinions/.
Generate a slide outline in slides/.
For each slide include:
- title
- audience
- key message
- supporting files
- communication class
- visual suggestion
Do not invent citations or statistics.
```

### 4. Run a full slide-orchestration job

```text
Read WORKFLOW.md first.
Parse the prompt into slide-level tasks.
Before writing any deck content:
1. verify every provided citation
2. check whether each requested number or conclusion is directly supported
3. create evidence notes in raw/
4. create a slide claim map in outlines/
Then generate:
- one internal-training deck in slides/
- one conservative external-candidate deck in slides/
Mark unsupported or unclear claims as review-needed instead of silently using them.
```

## File Naming Conventions

- `cards/`: `YYYY-MM-DD - Paper Title.md`
- `raw/`: `YYYY-MM-DD - Source Title - evidence.md`
- `opinions/`: short topic-focused names such as `Smoking Cessation - Digital Intervention Value.md`
- `slides/`: `topic-deck-outline.md`

## Minimal Daily Use

1. drop a PDF, URL note, or abstract into `inbox/`
2. ask Codex to read `WORKFLOW.md`
3. have Codex generate `raw/` and `cards/`
4. review the proposed communication class
5. update `opinions/` if the evidence is reusable
6. generate a deck outline only after evidence is linked

## Minimal Deck Use

1. paste the deck prompt
2. require citation verification before drafting
3. require claim mapping before presenter notes are written
4. review the internal-training version first
5. use the conservative external-candidate version only after internal review

## Git And Publishing

This workspace can be versioned as a single Git repository and published with GitHub Pages.

- Keep the repository root as the Git project root.
- Publish the static website from `site/`.
- Use the workflow at `.github/workflows/deploy-pages.yml` so every push to `main` can redeploy the site automatically.
- Use `scripts/setup-github-pages.ps1` to initialize local Git and print the remaining GitHub steps.
