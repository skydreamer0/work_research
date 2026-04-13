# Esvatin Dual-Version Web Presentation Design

## Goal
Turn the Esvatin slide materials into a polished single-page website that presents both the internal training narrative and the conservative external candidate narrative in one browsable experience.

## Chosen Direction
Build a single-page narrative website with a version switcher.

This direction is preferred over a slide gallery because the source material is content-rich and reads better when regrouped into thematic web sections. It is also preferred over a side-by-side compare view because it keeps the page readable on mobile while still making the difference between the two versions obvious.

## Audience
- Internal teams who want to review the training narrative
- Stakeholders who want to compare the fuller internal framing with the more conservative external framing

## Experience Structure
The page will be organized into the following sections:

1. Hero introduction
2. Disease understanding
3. Clinical impact
4. Mechanism and tissue response
5. Evidence and measurable outcomes
6. Safety and messaging discipline
7. Practical considerations
8. Closing takeaways

## Interaction Model
The page will have a persistent version switch with two states:

- Internal training
- Conservative external candidate

Switching versions updates:

- the hero framing
- section summaries
- evidence density
- emphasis labels and caution wording

The layout will remain stable so the user can compare tone and content depth without re-learning the page.

## Visual Direction
The website should feel medical, calm, and intentional rather than like exported slides. The visual system should use:

- a soft clinical color palette with muted teal, bone, slate, and coral accents
- editorial typography with more character than the default system stack
- layered gradients and subtle grid textures for depth
- custom content blocks for anatomy, flow logic, evidence bars, and caution notes

## Content Handling
The source decks will not be reproduced slide-for-slide. Instead, each web section will synthesize aligned content from both decks. Internal training will show fuller narrative support, while the conservative version will shorten copy and soften claims where the slide deck already does so.

## Technical Approach
Use a static site implementation so the page can be opened directly from the workspace without a build step. The site will be composed of:

- `site/index.html` for semantic structure
- `site/styles.css` for visual system and responsive layout
- `site/app.js` for version switching and dynamic content rendering

## Verification
The implementation should be checked with a lightweight validation script that confirms:

- the website files exist
- the version switch control is present
- the expected themed sections are rendered
- the JavaScript includes both versions of the content model
