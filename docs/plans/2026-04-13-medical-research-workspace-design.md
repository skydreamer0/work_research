# Medical Research Workspace Design

## Goal
Build a Codex-friendly research workspace for a medical representative who needs to search literature, organize evidence, and produce materials that can be used for both promotion and educational teaching.

## Context
This workspace is not a generic academic literature vault. It must support real-world medical industry use, where each source is not only summarized for scientific value but also assessed for practical communication risk. The same evidence base should be reusable across multiple outputs while keeping a clear distinction between:

- promotion-safe content
- education-safe content
- internal-reference-only content

## Recommended Approach
Use a dual-track evidence and compliance workflow.

Each source moves through the same pipeline:

1. Collect the source and preserve traceable evidence in `raw/`
2. Create a structured reading card in `cards/`
3. Assess scientific quality and communication risk
4. Route reusable conclusions into `opinions/`
5. Generate output artifacts only from linked evidence

This approach is preferred because it balances speed, traceability, and day-to-day field usability. A literature-only workflow would be faster but would not safely support promotion. A slide-first workflow would be useful for output generation but would weaken knowledge reuse.

## Workspace Structure
The workspace will include:

- `README.md` for orientation and usage
- `WORKFLOW.md` for operating rules
- `raw/` for evidence records, source text, metadata, and citation proof
- `cards/` for one-paper reading cards
- `opinions/` for reusable permanent notes and topic synthesis
- `outlines/`, `drafts/`, and `slides/` for downstream outputs
- `inbox/` for new PDFs, links, and notes awaiting processing
- `templates/` for reusable markdown templates

## Data Model
The system needs three documentation layers.

### 1. Raw evidence note
Captures source metadata, citation checks, extracted evidence, and exact traceability.

### 2. Reading card
Summarizes one paper in structured form, including:

- study question
- methods
- key findings
- useful numbers
- limitations
- practical interpretation
- communication suitability

### 3. Permanent note
Stores reusable themes rather than article-by-article summaries. These notes consolidate recurring claims, methods, objections, and discussion points.

## Medical Representative Safety Layer
Each reading card and output workflow should support practical communication screening using the following dimensions:

- evidence strength
- relevance to approved indication or on-label use
- risk of off-label interpretation
- risk of overclaim or exaggerated comparison
- suitability for promotion
- suitability for teaching or disease education

## Content Classification
Every source-derived insight should be classed into one of three buckets:

### Promotion-safe
Appropriate for promotional use after internal review, provided it aligns with approved label and local compliance expectations.

### Education-safe
Appropriate for training, disease education, or broader scientific discussion, but not automatically suitable for promotional messaging.

### Internal-only
Useful for preparation, objection handling, or strategic understanding, but not suitable for direct external communication.

## Operating Rules
The workflow should enforce these rules:

- no claim without raw evidence
- no permanent note without card or raw support
- prefer updating existing permanent notes over creating new ones
- no draft or slide generation without linked evidence
- no invented citation, DOI, or statistic
- if label or compliance status is uncertain, mark as review-needed rather than safe

## Error Handling
When Codex cannot verify a citation, cannot confirm source details, or detects likely promotional risk, it should not silently fill gaps. Instead, it should mark uncertainty explicitly and preserve the unresolved issue in the note.

## Success Criteria
The initial scaffold is successful if it provides:

- a clear project overview in `README.md`
- a strict operating workflow in `WORKFLOW.md`
- reusable templates for `raw`, `cards`, `opinions`, and output generation
- file and folder naming conventions that make future work consistent

