# MCP Workflow Notes

This workspace is organized for a Codex controller workflow for medical slide creation.

## Entry Rule
- Read `WORKFLOW.md` first.
- Treat the incoming slide prompt as a task specification, not as final content.
- Verify citations before drafting slides.

## Workflow
1. Parse the medical slide prompt.
2. Split the work into sub-tasks.
3. Send sources to citation verification.
4. Send slide statements to claim mapping.
5. Block any unsupported claim from entering a draft.
6. Draft only from verified, traceable evidence.

## Output Modes
- `internal-training`: educational, medically responsible, evidence-linked.
- `external-candidate`: conservative wording only, for later review.

## Non-Negotiable Rules
- Do not invent data, citations, or conclusions.
- Do not promote a claim beyond what the source supports.
- If evidence is incomplete or ambiguous, mark it `review-needed`.
- Keep the source trail visible in every draft.

