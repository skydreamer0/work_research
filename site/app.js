const S = {
  product: "raw/2026-04-13 - Esvatin Product-Specific Evidence.md",
  ali: "raw/2026-04-13 - Ali 2024 - evidence.md",
  kol: "raw/2026-04-13 - Kolokythas 2024 - evidence.md",
  vh: "raw/2026-04-13 - van Haaften 1997 - evidence.md",
  s4: "raw/2026-04-13 - Slide 4 Supplemental Evidence.md",
  s8: "raw/2026-04-13 - Slide 8 Supplemental Evidence.md",
  s9: "raw/2026-04-13 - Slide 9 Supplemental Evidence.md",
  rueda: "raw/2026-04-13 - Rueda 2017 - evidence.md"
};

const U = {
  title: "Esvatin Evidence Controller",
  kicker: "Esvatin Evidence Controller",
  sub: "PM-led training site for verified product facts and class-level evidence",
  eyebrow: "Evidence-linked training site",
  btn: { internal: "Internal training", external: "External candidate" },
  hint: ["Site mode", "Review evidence boundaries first.", "Presentation mode", "Use arrows or buttons."],
  nav: ["GSM", "Impact", "Mechanism", "Evidence", "Safety", "Practical use", "Takeaways"],
  sec: {
    g: ["Understanding GSM", "Disease first."],
    i: ["Clinical Impact", "Symptoms, burden, recognition."],
    m: ["Mechanism and Tissue Response", "Keep it at the tissue level."],
    e: ["Evidence Snapshot", "Teach, do not overclaim."],
    s: ["Safety Discipline", "Conservative wording only."],
    p: ["Practical Use", "Formulation matters."],
    t: ["Takeaways", "Short and memorable."]
  },
  mode: { k: "Presentation Mode", p: "Previous", n: "Next" }
};

const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const chip = (x) => `<span class="status-chip${(typeof x === "object" && x.tone === "caution") ? " is-caution" : ""}">${esc(typeof x === "string" ? x : x.label)}</span>`;
const chips = (a) => a.map(chip).join(" ");

const el = {
  heroTitle: document.getElementById("hero-title"),
  heroSubtitle: document.getElementById("hero-subtitle"),
  heroNote: document.getElementById("hero-note"),
  readingPath: document.getElementById("reading-path"),
  stanceTitle: document.getElementById("stance-title"),
  stanceBody: document.getElementById("stance-body"),
  overviewTitle: document.getElementById("overview-title"),
  overviewSummary: document.getElementById("overview-summary"),
  audienceList: document.getElementById("audience-list"),
  diseaseTitle: document.getElementById("disease-title"),
  diseaseSummary: document.getElementById("disease-summary"),
  diseaseCallout: document.getElementById("disease-callout"),
  impactFlow: document.getElementById("impact-flow"),
  mechanismColumns: document.getElementById("mechanism-columns"),
  evidenceSummaryTitle: document.getElementById("evidence-summary-title"),
  evidenceSummaryBody: document.getElementById("evidence-summary-body"),
  metricCards: document.getElementById("metric-cards"),
  evidenceBars: document.getElementById("evidence-bars"),
  safetyTitle: document.getElementById("safety-title"),
  safetySummary: document.getElementById("safety-summary"),
  guardrailList: document.getElementById("guardrail-list"),
  practicalCards: document.getElementById("practical-cards"),
  takeawayCards: document.getElementById("takeaway-cards"),
  presentationMode: document.getElementById("presentation-mode"),
  presentationTitle: document.getElementById("presentation-title"),
  presentationSummary: document.getElementById("presentation-summary"),
  slideCounter: document.getElementById("slide-counter"),
  presentationInternal: document.getElementById("presentation-internal"),
  presentationExternal: document.getElementById("presentation-external")
};

const buttons = Array.from(document.querySelectorAll("[data-version-toggle]"));
const navButtons = Array.from(document.querySelectorAll("[data-slide-nav]"));
const state = { version: "internal", mode: "site", slide: 0 };

function applyStaticCopy() {
  document.documentElement.lang = "en";
  document.title = U.title;
  document.querySelector(".control-kicker").textContent = U.kicker;
  document.querySelector(".control-subtitle").textContent = U.sub;
  document.querySelector(".eyebrow").textContent = U.eyebrow;
  document.querySelector(".presentation-switch-text").textContent = "Presentation mode";
  document.querySelectorAll("[data-version-toggle]").forEach((b) => (b.textContent = U.btn[b.dataset.versionToggle]));
  document.querySelectorAll(".mode-hint span").forEach((s, i) => (s.textContent = U.hint[i]));
  document.querySelectorAll(".section-nav a").forEach((a, i) => (a.textContent = U.nav[i]));
  const sec = [
    ["#understanding-gsm .section-heading h2", U.sec.g[0]], ["#understanding-gsm .section-heading p:last-child", U.sec.g[1]],
    ["#clinical-impact .section-heading h2", U.sec.i[0]], ["#clinical-impact .section-heading p:last-child", U.sec.i[1]],
    ["#mechanism-response .section-heading h2", U.sec.m[0]], ["#mechanism-response .section-heading p:last-child", U.sec.m[1]],
    ["#evidence-outcomes .section-heading h2", U.sec.e[0]], ["#evidence-outcomes .section-heading p:last-child", U.sec.e[1]],
    ["#safety-discipline .section-heading h2", U.sec.s[0]], ["#safety-discipline .section-heading p:last-child", U.sec.s[1]],
    ["#practical-considerations .section-heading h2", U.sec.p[0]], ["#practical-considerations .section-heading p:last-child", U.sec.p[1]],
    ["#takeaways .section-heading h2", U.sec.t[0]], ["#takeaways .section-heading p:last-child", U.sec.t[1]]
  ];
  sec.forEach(([q, t]) => (document.querySelector(q).textContent = t));
  document.querySelector(".presentation-kicker").textContent = U.mode.k;
  document.querySelector('[data-slide-nav="prev"]').textContent = U.mode.p;
  document.querySelector('[data-slide-nav="next"]').textContent = U.mode.n;
}

const copy = (external) => ({
  heroTitle: external ? "Esvatin Review Console" : "Esvatin Evidence Controller",
  heroSubtitle: external ? "Conservative review candidate for PM-led teaching." : "PM teaching view for evidence discipline.",
  heroNoteLead: "Boundary legend:",
  heroNoteChips: external ? ["Verified product fact", "Conservative wording", "Review-needed"] : ["Verified product fact", "Class-level evidence", "Review-needed"],
  path: external
    ? ["Verify the product fact first.", "Teach GSM as disease education.", "Use only the safest estriol class evidence.", "Keep product-specific claims out unless verified.", "Review before publishing externally."]
    : ["Verify the product fact first.", "Teach GSM as disease education.", "Use estriol class evidence for mechanism, safety, and practical use.", "Keep product-specific claims separate from class evidence.", "Review before publishing."],
  stance: { title: "Teaching rule", body: external ? "One verified fact is enough: Esvatin is an estriol 0.5 mg vaginal tablet. Keep everything else conservative and evidence-linked." : "One verified fact is enough: Esvatin is an estriol 0.5 mg vaginal tablet. Keep class evidence and product facts separate." },
  overview: { title: "What this site is for", summary: external ? "A tighter review candidate with visible evidence boundaries." : "A controller-style teaching site for PM-led sales training.", chips: external ? ["Conservative", "Evidence-linked", "No unsupported claims"] : ["Teaching-first", "Evidence-linked", "Boundary-aware"], audiences: ["Product manager", "Sales training lead", "Medical reviewer"] },
  disease: { title: "GSM in one line", summary: "GSM is a common postmenopausal condition linked to estrogen decline and involving the vulva, vagina, urethra, and bladder.", callout: "Teach the disease first, then move into treatment logic." },
  impactFlow: [
    { title: "Common symptoms", body: "Dryness, irritation, dyspareunia, and urinary discomfort." },
    { title: "Clinical impact", body: "Comfort, intimacy, and quality of life can be affected." },
    { title: "Recognition gap", body: "Patients may not report symptoms proactively." },
    { title: "Why it matters", body: "Recognition supports timely and relevant management." }
  ],
  mechanism: external
    ? [
        { title: "Local tissue response", body: "Use the safest frame: local estrogenic tissue effects are teaching support, not product proof." },
        { title: "Maturation shift", body: "Epithelial maturation and restoration of atrophic mucosal findings are the clearest tissue-level themes." },
        { title: "Avoid overclaim", body: "Do not turn class-level histology into an Esvatin-specific claim." }
      ]
    : [
        { title: "Local tissue response", body: "Use local estrogenic tissue effects as the teaching frame, not as product proof." },
        { title: "Maturation shift", body: "Epithelial maturation, VMI shift, and restoration of atrophic mucosal findings are the clearest tissue-level themes." },
        { title: "Avoid overclaim", body: "Do not turn class-level histology into an Esvatin-specific claim." }
      ],
  evidence: {
    title: "Class-level evidence snapshot",
    body: "These pooled intravaginal estrogen findings are useful for teaching, but they are not Esvatin-specific proof.",
    metrics: [
      { label: "Superficial cells", value: "+19.28%" },
      { label: "Parabasal cells", value: "-24.85%" },
      { label: "Vaginal pH", value: "-0.94" },
      { label: "Dyspareunia", value: "-0.52" }
    ],
    bars: [
      { label: "Cytology change", value: 88, note: "pooled evidence" },
      { label: "pH relevance", value: 78, note: "clinical context" },
      { label: "Symptom link", value: 82, note: "teaching utility" }
    ]
  },
  safety: { title: "Local use and safety", summary: "Reviewed vaginal estriol evidence did not identify clinically relevant long-term serum hormone changes. Keep the wording conservative.", guardrails: ["Use local-use language, not zero-exposure language.", "Avoid product-specific PK claims unless a product study exists.", "Treat limited systemic stimulation as the safer phrase.", "Do not promote unsupported superiority over other formats."] },
  practical: external
    ? [
        { title: "Product fact", body: "Esvatin is a prescription estriol 0.5 mg vaginal tablet.", status: "Verified fact", caution: false },
        { title: "Practical use", body: "Dosage form may influence convenience, acceptance, and persistence.", status: "Use with caution", caution: false },
        { title: "Boundary check", body: "Keep product-specific claims limited to verified Esvatin facts and formal review.", status: "Review-needed", caution: true }
      ]
    : [
        { title: "Product fact", body: "Esvatin is a prescription estriol 0.5 mg vaginal tablet.", status: "Verified fact", caution: false },
        { title: "Practical use", body: "Dosage form can influence convenience, acceptance, and persistence.", status: "Education-safe", caution: false },
        { title: "Boundary check", body: "Keep product-specific claims limited to verified Esvatin facts and formal review.", status: "Review-needed", caution: true }
      ],
  takeaways: [
    { title: "Disease first", body: "GSM is a meaningful postmenopausal condition that deserves recognition." },
    { title: "Use class evidence carefully", body: "Local estriol evidence supports symptom improvement and a healthier epithelial pattern." },
    { title: "Stay conservative on safety", body: "Reviewed data are reassuring, but long-term hormonal wording should stay cautious." },
    { title: "Protect the boundary", body: "Limit product-specific claims to verified Esvatin facts and formal review." }
  ],
  presentation: { title: external ? "Conservative external candidate" : "Internal training deck", summary: external ? "10 slides, conservative wording, and no unsupported product claims." : "10 slides with visible evidence boundaries and PM-friendly teaching cues." }
});

const slides = (external) => [
  {
    topline: "Slide 1",
    title: "Esvatin: Local Estrogen Therapy for Genitourinary Health",
    subtitle: external ? "Conservative review candidate" : "Understanding GSM and its treatment logic",
    tags: external ? [{ label: "Verified product fact" }, { label: "Conservative wording" }, { label: "Review-needed" }] : [{ label: "Verified product fact" }, { label: "Internal training" }, { label: "Boundary-aware" }],
    bullets: [
      "Esvatin is a prescription estriol 0.5 mg vaginal tablet.",
      external ? "This version stays conservative and keeps product claims tightly bounded." : "This version teaches disease logic while keeping product claims tightly bounded.",
      "The rest of the science is estriol or local-estrogen class evidence unless the slide says otherwise.",
      "Use the legend to separate product facts, class evidence, and review-needed wording."
    ],
    footnote: `Verified product fact: ${S.product}`
  },
  {
    topline: "Slide 2",
    title: "Understanding GSM",
    subtitle: "A common postmenopausal condition linked to estrogen decline",
    tags: [{ label: "Education-safe" }, { label: "Disease first" }],
    bullets: [
      "GSM is common in postmenopausal women and frequently encountered in practice.",
      "It is mainly associated with declining estrogen levels after menopause.",
      "It affects the vulva, vagina, urethra, and bladder.",
      "Start with disease understanding before treatment discussion."
    ],
    footnote: "Source framing from the verified workspace workflow and disease-education prompt."
  },
  {
    topline: "Slide 3",
    title: "Why GSM Matters Clinically",
    subtitle: "Symptoms can affect comfort, intimacy, and quality of life",
    tags: [{ label: "Education-safe" }, { label: "Field relevance" }],
    bullets: [
      "Common symptoms include dryness, irritation, dyspareunia, and urinary discomfort.",
      "These symptoms can affect comfort, intimacy, and quality of life.",
      "Symptoms may persist or worsen if they are not recognized and addressed.",
      "Many patients do not bring them up on their own."
    ],
    footnote: "General disease-education framing from the verified prompt set."
  },
  {
    topline: "Slide 4",
    title: "Mechanism and Tissue-Level Effects",
    subtitle: external ? "Keep the explanation at the tissue level" : "Safe teaching frames local action as tissue-level support",
    tags: [{ label: "Education-safe" }, { label: "Class evidence" }, { label: "Use with caution", tone: "caution" }],
    cards: external
      ? [
          { caption: "Epithelial maturation", body: "Supported as a clean tissue-level teaching point." },
          { caption: "VMI shift", body: "Use this as the clearest histology signal." },
          { caption: "Atrophic restoration", body: "Helpful for education, not product-specific proof." },
          { caption: "Avoid", body: "Do not use vascularization or product-specific histology claims." }
        ]
      : [
          { caption: "Epithelial maturation", body: "Supported as a clean tissue-level teaching point." },
          { caption: "VMI shift", body: "Use this as the clearest histology signal." },
          { caption: "Atrophic restoration", body: "Helpful for education, not product-specific proof." },
          { caption: "Use with caution", body: "Thickness and collagen language should stay class-level only." }
        ],
    footnote: `Support: ${S.vh}; ${S.s4}`
  },
  {
    topline: "Slide 5",
    title: "Evidence of Cytology Improvement",
    subtitle: "Pooled evidence shows measurable epithelial change",
    tags: [{ label: "Education-safe" }, { label: "Numeric evidence" }],
    metrics: [{ caption: "Superficial cells", value: "+19.28%" }, { caption: "Parabasal cells", value: "-24.85%" }],
    bullets: ["Intravaginal estrogen improved vaginal cytology in pooled evidence.", "These values should be presented as meta-analytic findings, not as product-specific results."],
    footnote: `Support: ${S.ali}`
  },
  {
    topline: "Slide 6",
    title: "pH Normalization and Symptom Relief",
    subtitle: "Tissue-level change can be linked to symptom-level improvement",
    tags: [{ label: "Education-safe" }, { label: "Symptom link" }],
    metrics: [{ caption: "Mean vaginal pH", value: "-0.94" }, { caption: "Dyspareunia MD", value: "-0.52" }],
    bullets: ["The pooled evidence supports a healthier vaginal environment.", "Dyspareunia improved with a 95% CI of -0.63 to -0.41."],
    footnote: `Support: ${S.ali}`
  },
  {
    topline: "Slide 7",
    title: "Local Use and Reassuring Hormonal Findings",
    subtitle: "Keep the safety message conservative",
    tags: [{ label: "Education-safe" }, { label: "Safety" }],
    quotes: [
      { caption: "Safe headline", body: "Reviewed vaginal estriol evidence did not identify clinically relevant long-term serum hormone changes." },
      { caption: "Safer follow-up", body: "Minimal transient gonadotropin changes were reported in some studies, so the wording should stay careful." }
    ],
    footnote: `Support: ${S.kol}`
  },
  {
    topline: "Slide 8",
    title: "Estriol in the Context of Local Therapy",
    subtitle: external ? "Conservative differentiation only" : "A careful scientific distinction",
    tags: [{ label: "Education-safe" }, { label: "Mechanistic context" }, { label: "Avoid absolutes", tone: "caution" }],
    cards: external
      ? [
          { caption: "Safe claim", body: "Estriol can be described conservatively as a weak or short-acting estrogen." },
          { caption: "Limited systemic stimulation", body: "Vaginal-use studies support local action with limited systemic hormonal stimulation." },
          { caption: "Avoid", body: "Do not use end-product metabolite or nuclear-retention claims." }
        ]
      : [
          { caption: "Safe claim", body: "Estriol can be described as a weak or short-acting estrogen in mechanistic literature." },
          { caption: "Limited systemic stimulation", body: "Vaginal-use studies support local action with limited, but not zero, systemic hormonal stimulation." },
          { caption: "Avoid", body: "Do not use end-product metabolite or nuclear-retention claims." }
        ],
    footnote: `Support: ${S.s8}; ${S.kol}`
  },
  {
    topline: "Slide 9",
    title: "Practical Use and Patient Acceptance",
    subtitle: "Formulation matters for teaching and field conversation",
    tags: [{ label: "Education-safe" }, { label: "Practical use" }],
    cards: external
      ? [
          { caption: "Convenience", body: "Dosage form may influence convenience." },
          { caption: "Acceptance", body: "Patient experience can shape acceptance." },
          { caption: "Persistence", body: "Real-world use can differ across formats." }
        ]
      : [
          { caption: "Convenience", body: "Dosage form can influence convenience." },
          { caption: "Acceptance", body: "Comparative and real-world data support preference differences across formats." },
          { caption: "Persistence", body: "Practical-use factors may influence treatment persistence over time." }
        ],
    bullets: ["Do not turn preference into a blanket efficacy claim.", "Keep the discussion focused on practical use and long-term adoption."],
    footnote: `Support: ${S.s9}; ${S.rueda}`
  },
  {
    topline: "Slide 10",
    title: "Key Messages for Practice",
    subtitle: external ? "A concise, evidence-linked closing summary" : "Four take-home points for internal sales training",
    tags: [{ label: "Internal training" }, { label: "Review boundary", tone: "caution" }],
    bullets: [
      "GSM is a meaningful postmenopausal condition that deserves recognition.",
      "Local estriol evidence supports improvement in cytology and symptoms.",
      "Reviewed data are reassuring, but long-term hormonal wording should stay cautious.",
      "Product-specific claims should remain limited to verified Esvatin facts and formal review."
    ],
    footnote: external ? "Use the conservative version only after internal review." : "Use the claim map before publishing or sharing externally."
  }
];

const versions = { internal: { ...copy(false), slides: slides(false) }, external: { ...copy(true), slides: slides(true) } };

function renderList(target, items, fn) { target.innerHTML = ""; items.forEach((x) => target.appendChild(fn(x))); }

function renderSite(v) {
  el.heroTitle.textContent = v.heroTitle;
  el.heroSubtitle.textContent = v.heroSubtitle;
  el.heroNote.innerHTML = `${v.heroNoteLead} ${chips(v.heroNoteChips)}`;
  el.stanceTitle.textContent = v.stance.title;
  el.stanceBody.textContent = v.stance.body;
  el.overviewTitle.textContent = v.overview.title;
  el.overviewSummary.innerHTML = `${esc(v.overview.summary)}<br>${chips(v.overview.chips)}`;
  el.diseaseTitle.textContent = v.disease.title;
  el.diseaseSummary.textContent = v.disease.summary;
  el.diseaseCallout.textContent = v.disease.callout;
  el.evidenceSummaryTitle.textContent = v.evidence.title;
  el.evidenceSummaryBody.innerHTML = `${esc(v.evidence.body)}<br>${chips(v.overview.chips)}`;
  el.safetyTitle.textContent = v.safety.title;
  el.safetySummary.textContent = v.safety.summary;
  renderList(el.readingPath, v.path, (x) => { const li = document.createElement("li"); li.textContent = x; return li; });
  renderList(el.audienceList, v.overview.audiences, (x) => { const li = document.createElement("li"); li.textContent = x; return li; });
  renderList(el.impactFlow, v.impactFlow, (x) => { const a = document.createElement("article"); a.className = "flow-card"; a.innerHTML = `<h3>${esc(x.title)}</h3><p>${esc(x.body)}</p>`; return a; });
  renderList(el.mechanismColumns, v.mechanism, (x) => { const a = document.createElement("article"); a.className = "mechanism-card"; a.innerHTML = `<h3>${esc(x.title)}</h3><p>${esc(x.body)}</p>`; return a; });
  renderList(el.metricCards, v.evidence.metrics, (x) => { const a = document.createElement("article"); a.className = "metric-card"; a.innerHTML = `<span class="metric-label">${esc(x.label)}</span><strong class="metric-value">${esc(x.value)}</strong>`; return a; });
  renderList(el.evidenceBars, v.evidence.bars, (x) => { const a = document.createElement("article"); a.className = "bar-item"; a.innerHTML = `<div class="bar-meta"><span>${esc(x.label)}</span><span>${esc(x.note)}</span></div><div class="bar-track"><div class="bar-fill" style="width:${x.value}%"></div></div>`; return a; });
  renderList(el.guardrailList, v.safety.guardrails, (x) => { const li = document.createElement("li"); li.textContent = x; return li; });
  renderList(el.practicalCards, v.practical, (x) => { const a = document.createElement("article"); a.className = "practical-card"; a.innerHTML = `<span class="status-chip${x.caution ? " is-caution" : ""}">${esc(x.status)}</span><h3>${esc(x.title)}</h3><p>${esc(x.body)}</p>`; return a; });
  renderList(el.takeawayCards, v.takeaways, (x) => { const a = document.createElement("article"); a.className = "takeaway-card"; a.innerHTML = `<h3>${esc(x.title)}</h3><p>${esc(x.body)}</p>`; return a; });
}

function slideHtml(s, i, total) {
  const t = s.tags ? `<div style="display:flex;flex-wrap:wrap;gap:8px;">${chips(s.tags)}</div>` : "";
  const c = s.cards ? `<div class="slide-hero-grid">${s.cards.map((x) => `<article class="slide-card"><span class="slide-caption">${esc(x.caption)}</span><p>${esc(x.body)}</p></article>`).join("")}</div>` : "";
  const m = s.metrics ? `<div class="slide-metric-grid">${s.metrics.map((x) => `<article class="slide-metric"><span>${esc(x.caption)}</span><strong>${esc(x.value)}</strong></article>`).join("")}</div>` : "";
  const q = s.quotes ? `<div class="slide-quote-grid">${s.quotes.map((x) => `<article class="slide-quote"><span class="slide-caption">${esc(x.caption)}</span><p>${esc(x.body)}</p></article>`).join("")}</div>` : "";
  const b = s.bullets ? `<ul class="slide-bullets">${s.bullets.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
  const cta = i === total - 1 ? `<a href="#" class="slide-link">${esc(s.cta || "Return to the controller")}</a>` : "";
  const cls = ["slide", i === 0 && "slide-cover", i === total - 1 && "slide-close"].filter(Boolean).join(" ");
  return `<article class="${cls}" data-slide-index="${i}"><p class="slide-topline">${esc(s.topline)}</p><h3>${esc(s.title)}</h3><p class="slide-subtitle">${esc(s.subtitle)}</p>${t}${c}${m}${q}${b}<p class="slide-footnote">${esc(s.footnote)}</p>${cta}</article>`;
}

function renderPresentation(v, key) {
  const target = key === "internal" ? el.presentationInternal : el.presentationExternal;
  target.innerHTML = v.slides.map((s, i) => slideHtml(s, i, v.slides.length)).join("");
  el.presentationTitle.textContent = v.presentation.title;
  el.presentationSummary.textContent = v.presentation.summary;
  updateCounter();
}

function updateButtons() {
  buttons.forEach((b) => { const on = b.dataset.versionToggle === state.version; b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", String(on)); });
}

function updateCounter() { el.slideCounter.textContent = `Slide ${state.slide + 1} / ${versions[state.version].slides.length}`; }
function goToSlide(n) { const slides = Array.from(document.querySelectorAll(`.presentation-deck[data-version="${state.version}"] .slide`)); if (!slides.length) return; state.slide = Math.max(0, Math.min(n, slides.length - 1)); slides[state.slide].scrollIntoView({ behavior: "smooth", block: "start" }); updateCounter(); }
function setMode(mode) { state.mode = mode; document.body.classList.toggle("is-presentation-mode", mode === "presentation"); el.presentationMode.checked = mode === "presentation"; if (mode === "presentation") setTimeout(() => goToSlide(state.slide), 50); }
function setVersion(key) { state.version = key; document.body.dataset.version = key; renderSite(versions[key]); renderPresentation(versions[key], key); updateButtons(); if (state.mode === "presentation") goToSlide(state.slide); }

applyStaticCopy();
buttons.forEach((b) => b.addEventListener("click", () => { state.slide = 0; setVersion(b.dataset.versionToggle); }));
el.presentationMode.addEventListener("change", (e) => setMode(e.target.checked ? "presentation" : "site"));
navButtons.forEach((b) => b.addEventListener("click", () => goToSlide(state.slide + (b.dataset.slideNav === "next" ? 1 : -1))));
document.addEventListener("keydown", (e) => {
  if (state.mode !== "presentation") return;
  if (e.key === "ArrowRight") { e.preventDefault(); goToSlide(state.slide + 1); }
  if (e.key === "ArrowLeft") { e.preventDefault(); goToSlide(state.slide - 1); }
  if (e.key === "Escape") { e.preventDefault(); setMode("site"); }
});
setVersion("internal");
setMode("site");
