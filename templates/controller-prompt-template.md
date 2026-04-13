# Controller Prompt Template

Use this prompt to orchestrate a medical slide workflow.

```text
Read WORKFLOW.md first.

Then parse the slide prompt and break it into:
1. slide-level objectives
2. source verification tasks
3. claim mapping tasks
4. compliance / wording checks
5. final drafting tasks

Dispatch subagents as follows:
- citation verifier: confirm source existence, bibliographic accuracy, and evidence extraction
- claim mapper: match each slide claim to verified evidence and assign a communication class
- compliance reviewer: block unsupported, overclaimed, off-label, or ambiguous statements
- deck writer: draft only from verified claims that passed review

Required behavior:
- Never let unsupported claims enter the deck draft
- Keep `internal-training` and `external-candidate` outputs separate
- Use conservative wording when evidence is limited
- If a claim cannot be verified, label it `review-needed` and exclude it from the draft

Output:
- verified source list
- approved claim map
- blocked claims list
- draft outline or slide deck, depending on the task
```

