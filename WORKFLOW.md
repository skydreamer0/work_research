# Research Workflow

## Objective
Use Codex as a research workflow agent for a medical representative who needs to search literature, verify citations, organize evidence, and produce materials for both promotion and teaching.

## Core Pipeline
1. Collect the source
2. Verify citation details and preserve evidence in `raw/`
3. Create one reading card in `cards/`
4. Classify communication suitability
5. Check whether `opinions/` should be updated
6. Update existing permanent notes first
7. Generate outline, draft, or slide content only after evidence is linked

## Controller Pipeline For Slide Prompt Projects
When the input is a ready-made slide prompt, treat it as a specification that still needs evidence validation.

Required order:
1. parse slide-level requirements
2. extract all citations, numbers, and requested conclusions
3. verify each citation before drafting
4. map each slide claim to a verified source
5. block unsupported claims
6. draft `internal-training` output
7. derive `external-candidate` output by further reducing risk

Do not skip the citation and claim-mapping stages just because the prompt already names references.

## Hard Rules
- Never write a claim without traceable source support.
- Never invent a citation, DOI, statistic, or quotation.
- Every `cards/` note must link to at least one file in `raw/`.
- Every `opinions/` note must link to `cards/` or `raw/`.
- Prefer updating existing permanent notes over creating new ones.
- If a conclusion is not clearly supported, mark it as uncertain.
- If communication suitability is unclear, classify it as `Review-needed`.
- Do not present a claim as promotion-safe just because a paper reports it.
- Do not accept a prompt's citation at face value until it has been verified.
- Do not let `partial`, `unclear`, or `blocked` claims silently pass into slide body text.
- Separate educational explanation from potentially promotable wording.

## Communication Classes

### `Promotion-safe`
Use this class only for content that appears suitable for field communication after internal review.

Checklist:
- supported by traceable evidence
- phrased conservatively
- does not imply off-label use
- does not exaggerate comparison or superiority
- does not go beyond what can be responsibly communicated

### `Education-safe`
Use this class for scientific explanation, disease education, internal learning, or classroom-style teaching.

Checklist:
- evidence is useful and relevant
- may include context not suitable for promotion
- may require careful framing if shown externally

### `Internal-only`
Use this class for preparation, strategy, objection handling, exploratory ideas, or unresolved claims.

Checklist:
- uncertain fit with approved use or practical communication
- incomplete evidence
- high risk of misinterpretation
- useful for internal understanding only

### `Review-needed`
Use this class whenever the evidence exists but the communication risk is not resolved.

## Screening Dimensions
For each source and each reusable claim, assess:

- evidence strength
- study design quality
- sample relevance
- alignment with approved indication or expected use context
- off-label interpretation risk
- overclaim risk
- comparative claim risk
- target audience suitability

## Output Priority
`raw/` -> `cards/` -> `opinions/` -> `outlines/` -> `drafts/` -> `slides/`

## Required Behavior By Task

### When processing a new source
- create a raw evidence record first
- verify or flag citation fields
- capture direct evidence before summarizing
- create exactly one reading card unless told otherwise

### When updating permanent notes
- search existing notes first
- update an existing note before proposing a new one
- ask before creating a new permanent note

### When generating drafts or slides
- use only linked files in this workspace
- mark each claim with supporting file references
- do not fill gaps with general knowledge
- separate promotion-safe messages from education-safe messages

### When generating slides from a user prompt
- create one verification note in `raw/` for each cited source
- create one claim map in `outlines/`
- record blocked or uncertain claims explicitly
- draft presenter notes only after slide body claims are approved
- if two output modes are requested, write them as separate files

## Preferred Output Style For This Workspace
- concise
- evidence-linked
- medically responsible
- useful for field conversations and internal education
- explicit about uncertainty

## Stop Conditions
Stop and ask for review if:

- the claim may depend on local label wording
- the evidence looks inconsistent across sources
- the citation cannot be verified
- the requested statement sounds stronger than the source supports
- the content may be interpreted as off-label promotion
