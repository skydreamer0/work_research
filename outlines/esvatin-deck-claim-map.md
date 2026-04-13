# Esvatin Deck Claim Map

## Scope
- Source prompt: 10-slide Esvatin sales training session
- Output modes: `internal-training` and `external-candidate`
- Verification basis: prompt text plus verified citations in `raw/`

## Slide-by-Slide Decision Map

### Slide 1
- Claim: Esvatin is a local estrogen therapy focused on GSM
- Supporting source: prompt only
- Status: partial
- Allowed class: Review-needed
- Notes: No direct product reference set was provided for the product name itself; acceptable as a cover theme for internal use, but not a verified product claim

- Claim: Esvatin is an estriol 0.5 mg vaginal tablet
- Supporting source: `raw/2026-04-13 - Esvatin Product-Specific Evidence.md`
- Status: verified
- Allowed class: Internal-only
- Notes: This is the strongest product-specific fact identified

### Slide 2
- Claim: GSM is common in postmenopausal women
- Supporting source: prompt only
- Status: partial
- Allowed class: Education-safe
- Notes: General disease statement provided by the user; no numeric prevalence claim included

- Claim: GSM is mainly associated with estrogen deficiency and affects vagina, vulva, urethra, and bladder
- Supporting source: prompt only
- Status: partial
- Allowed class: Education-safe
- Notes: Broad disease framing is acceptable for internal educational use if kept non-numeric

### Slide 3
- Claim: Common symptoms include dryness, irritation, dyspareunia, and urinary discomfort
- Supporting source: prompt only
- Status: partial
- Allowed class: Education-safe
- Notes: General symptom framing provided by the user

- Claim: Symptoms affect quality of life and may persist or worsen over time
- Supporting source: prompt only
- Status: partial
- Allowed class: Education-safe
- Notes: Keep conceptual and do not add unsupported incidence or progression data

### Slide 4
- Claim: Estriol supports local tissue response in vaginal tissue
- Supporting source: `raw/2026-04-13 - van Haaften 1997 - evidence.md`
- Status: partial
- Allowed class: Education-safe
- Notes: Supported only at a general local tissue-effect level

- Claim: Estriol supports epithelial maturation, vaginal maturation shift, and restoration of atrophic mucosal findings
- Supporting source: `raw/2026-04-13 - Slide 4 Supplemental Evidence.md`
- Status: verified
- Allowed class: Education-safe
- Notes: Strong enough for internal and conservative educational wording

- Claim: Epithelial thickness and collagen/connective tissue support can be discussed
- Supporting source: `raw/2026-04-13 - Slide 4 Supplemental Evidence.md`
- Status: partial
- Allowed class: Education-safe
- Notes: Better framed as local vaginal estrogen class effect rather than estriol-only certainty

- Claim: Vascularization improvement
- Supporting source: `raw/2026-04-13 - Slide 4 Supplemental Evidence.md`
- Status: blocked
- Allowed class: Review-needed
- Notes: No strong estriol-specific human support identified

### Slide 5
- Claim: Intravaginal estrogen improves vaginal cytology with more superficial cells and fewer parabasal cells
- Supporting source: `raw/2026-04-13 - Ali 2024 - evidence.md`
- Status: verified
- Allowed class: Education-safe
- Notes: Strongest verified numeric slide

- Claim: +19.28% superficial cells and -24.85% parabasal cells
- Supporting source: `raw/2026-04-13 - Ali 2024 - evidence.md`
- Status: verified
- Allowed class: Education-safe
- Notes: Present as pooled meta-analytic findings

### Slide 6
- Claim: Vaginal pH improved by a mean difference of -0.94
- Supporting source: `raw/2026-04-13 - Ali 2024 - evidence.md`
- Status: verified
- Allowed class: Education-safe
- Notes: Numeric support is direct

- Claim: Dyspareunia improved with MD -0.52, 95% CI -0.63 to -0.41
- Supporting source: `raw/2026-04-13 - Ali 2024 - evidence.md`
- Status: verified
- Allowed class: Education-safe
- Notes: Numeric support is direct

- Claim: pH restoration may support a healthier vaginal environment
- Supporting source: prompt plus Ali 2024 context
- Status: partial
- Allowed class: Education-safe
- Notes: Keep wording cautious and avoid microbiome overreach

### Slide 7
- Claim: Vaginal estriol shows minimal systemic absorption
- Supporting source: `raw/2026-04-13 - Kolokythas 2024 - evidence.md`
- Status: partial
- Allowed class: Education-safe
- Notes: Safer wording is "no clinically relevant long-term serum hormone changes were identified in the review"

- Claim: Serum estradiol remains within the postmenopausal range
- Supporting source: `raw/2026-04-13 - Kolokythas 2024 - evidence.md`
- Status: blocked
- Allowed class: Review-needed
- Notes: This exact wording was not directly verified from the accessible summary

- Claim: Minimal transient gonadotropin changes may occur
- Supporting source: `raw/2026-04-13 - Kolokythas 2024 - evidence.md`
- Status: verified
- Allowed class: Education-safe
- Notes: Keep this secondary and not the headline

### Slide 8
- Claim: Estriol can be described as a weak or short-acting estrogen with lower receptor affinity or weaker transactivation than estradiol
- Supporting source: `raw/2026-04-13 - Slide 8 Supplemental Evidence.md`
- Status: verified
- Allowed class: Education-safe
- Notes: Strongest new differentiation theme

- Claim: Vaginal estriol has not been shown to cause clinically relevant long-term increases in serum estrone or estradiol in reviewed studies
- Supporting source: `raw/2026-04-13 - Slide 8 Supplemental Evidence.md`
- Status: partial
- Allowed class: Education-safe
- Notes: Safer replacement for the old conversion claim

- Claim: Vaginal-use studies support local action with limited, but not zero, systemic hormonal stimulation
- Supporting source: `raw/2026-04-13 - Slide 8 Supplemental Evidence.md`
- Status: verified
- Allowed class: Education-safe
- Notes: Strong and safer than minimal absorption wording

- Claim: End-product metabolite or nuclear-retention advantage
- Supporting source: `raw/2026-04-13 - Slide 8 Supplemental Evidence.md`
- Status: blocked
- Allowed class: Review-needed
- Notes: Still too weak or too absolute for slide use

### Slide 9
- Claim: Dosage form can influence convenience, acceptance, and persistence
- Supporting source: `raw/2026-04-13 - Slide 9 Supplemental Evidence.md`
- Status: verified
- Allowed class: Education-safe
- Notes: Best supported formulation theme

- Claim: Some dosage forms were preferred over creams or pessaries in comparative and real-world studies
- Supporting source: `raw/2026-04-13 - Slide 9 Supplemental Evidence.md`
- Status: partial
- Allowed class: Education-safe
- Notes: True at a category level; avoid implying direct Esvatin proof unless product-specific evidence is added

- Claim: Practical-use features may support persistence in chronic management
- Supporting source: `raw/2026-04-13 - Slide 9 Supplemental Evidence.md`
- Status: partial
- Allowed class: Education-safe
- Notes: Phrase as potential support from real-world persistence evidence, not as guaranteed adherence

### Slide 10
- Claim: GSM is common and clinically relevant
- Supporting source: prompt plus prior disease framing
- Status: partial
- Allowed class: Education-safe
- Notes: Fine as a non-numeric summary

- Claim: Local estriol helps restore tissue health and improve symptoms
- Supporting source: `raw/2026-04-13 - Ali 2024 - evidence.md`; `raw/2026-04-13 - van Haaften 1997 - evidence.md`
- Status: partial
- Allowed class: Education-safe
- Notes: Tissue support should be phrased broadly; symptom improvement is stronger than histology detail

- Claim: Minimal systemic absorption supports confident long-term local use
- Supporting source: `raw/2026-04-13 - Kolokythas 2024 - evidence.md`
- Status: partial
- Allowed class: Review-needed
- Notes: Safer wording is long-term serum hormone changes were not clinically relevant in the reviewed evidence

- Claim: Esvatin offers a practical option for symptom relief and tissue support
- Supporting source: prompt only plus class-level evidence
- Status: partial
- Allowed class: Internal-only
- Notes: Product-specific value language is not directly verified by the current source set

## Blocked Claim Themes
- product-specific efficacy statements
- strong superiority or metabolism absolutes versus conjugated estrogens
- serum estradiol range claim
- vascularization claim
- product-specific formulation superiority claims
- product-specific GSM labeling unless a stronger product source is added

## Drafting Rules
- Internal-training version may retain `partial` claims only with moderated wording
- External-candidate version should exclude `blocked` claims and further soften `partial` claims
- Slide notes may mention uncertainty, but slide body text should stay clean and conservative
