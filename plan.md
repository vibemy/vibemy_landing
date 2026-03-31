# plan.md — Investor-Facing Landing Page (AI Sales Coaching Platform)

## 1. Objectives
- Produce a premium, investor-ready landing page for **[Company Name]** that clearly communicates the platform as an **AI-powered sales readiness ecosystem** (reps + managers + leadership).
- Deliver complete landing page copy (all required sections), including **3 alternative hero headlines**, **3 CTA options**, and a **short investor pitch summary**.
- Implement a **frontend-only React** landing page using **shadcn/ui**, responsive layout, and subtle professional animations.
- Provide clear “Book a Demo” CTAs plus a clean bottom-of-page contact/demo request form (static).

## 2. Implementation Steps

### Phase 1 — Core POC (Copy + Page Skeleton Proof)
Goal: validate the core workflow (investor narrative + conversion path) before styling polish.

**Core to prove:** Investor understands value in <30 seconds and can reach a demo request endpoint (static form UI).

1) Information architecture + wire outline
- Confirm section order and key messages per section (Hero → Problem → Solution → Features by audience → Impact → Investor value → Traction placeholder → CTA + Form).

2) Copy POC (single-pass draft)
- Write v1 copy for all sections (concise, outcome-focused) including:
  - 3 hero headline options + subheadline
  - 3 CTA label options
  - investor pitch summary (5–7 sentences)
- Add placeholders for logos/testimonials/traction metrics.

3) Skeleton UI POC (fast build)
- Build a minimal React page with anchors, nav, hero, and a working (static) form component.
- Validate on mobile + desktop that layout is readable and CTA is obvious.

4) Fix-until-works checkpoint
- Iterate copy for clarity and investor tone (remove product jargon, quantify via outcome language, tighten narrative).
- Ensure the core CTA path is frictionless (hero CTA + sticky/top nav CTA + bottom form).

**User stories (Phase 1)**
1. As an investor, I want to understand what the company does within 10 seconds so I can decide to keep reading.
2. As an investor, I want to see the specific sales enablement problem quantified in business terms so I can gauge urgency.
3. As an investor, I want a crisp explanation of how the product works so I can judge defensibility and feasibility.
4. As an investor, I want a clear path to book a demo so I can engage immediately.
5. As an investor, I want to see placeholders for proof (logos/traction) so I can imagine how diligence evidence will be added.

---

### Phase 2 — V1 App Development (Production-Quality Landing Page)
Goal: implement the full premium SaaS landing page with shadcn/ui components, responsive styling, and subtle animations.

1) Project setup
- React + Tailwind + shadcn/ui.
- Typography: modern sans-serif (e.g., Inter).
- Theme tokens: corporate blue/white with subtle dark accents; consistent spacing and hierarchy.

2) Page layout + components (V1)
- Top nav: [Company Name], section links, primary “Book a Demo” button.
- Hero: headline/subheadline + primary/secondary CTAs; optional product UI mock placeholder card.
- Problem: 3–5 pain points (ramp time, inconsistency, manager bandwidth, turnover, visibility gaps).
- Solution: 3-step “How it works” (Train knowledge base → Rep coaching loop → Leadership visibility).
- Features by audience (3 columns/sections):
  - Sales Representatives (24/7 coach, role-play, call training, goal sheets, reminders)
  - Sales Managers (train model, update KB, generate assets: scripts/PDFs/exams/videos)
  - Directors/Leadership (readiness dashboards, achievements, performance trends)
- Business impact: outcome tiles (faster ramp, consistent coaching, reduced workload, lower turnover, better visibility).
- Why investors should care: scalability, margin leverage, operational efficiency, expanding market tailwinds.
- Traction/milestones placeholder: metrics cards with “Add KPI here” fields.
- Social proof placeholder block: “Trusted by…” empty state.
- Closing CTA + contact/demo request form: name, email, company, role, message (static submit + success toast).
- Footer: minimal links, privacy placeholder.

3) Interactions + subtle animations
- Use gentle scroll-reveal / fade-up transitions and hover states.
- Smooth scroll to sections and form.

4) Content finalization
- Ensure investor-grade voice: confident, measurable outcomes, platform framing.
- Add “security/enterprise-ready” microcopy placeholder if desired (no claims requiring proof).

5) V1 testing pass (end-to-end)
- Validate responsive breakpoints, CTA buttons, anchor links, form validation states, accessibility basics.

**User stories (Phase 2)**
1. As an investor, I want a premium-looking page so the company feels credible and fundable.
2. As an investor, I want to quickly scan outcomes (ramp, retention, efficiency) so I can assess ROI potential.
3. As an investor, I want features grouped by persona so I can see platform breadth without confusion.
4. As a strategic partner, I want to understand the operational workflow (reps → managers → leadership) so I can evaluate adoption.
5. As an interested stakeholder, I want to submit a demo request with clear confirmation so I know the request worked.

---

### Phase 3 — Expansion (Polish + Modularization + Optional Enhancements)
Goal: improve conversion and maintainability without adding backend.

1) Copy variants + iteration
- Swap hero headline variants and CTAs quickly (config-driven content object).
- Add optional FAQ section (security, rollout time, integrations placeholders).

2) Component modularization
- Extract each section into its own component file.
- Centralize copy/content in a single data module.

3) Accessibility + performance
- Improve keyboard navigation, aria labels for form.
- Optimize images/placeholders, reduce layout shift.

4) Analytics placeholders (no backend)
- Add optional hooks for future analytics (events for CTA clicks).

5) Phase testing pass (end-to-end)
- Re-test responsiveness, section ordering, animation performance, and form UX.

**User stories (Phase 3)**
1. As a marketer, I want to update messaging in one place so I can iterate without touching layout code.
2. As an investor, I want an FAQ to remove common objections quickly.
3. As a user on mobile, I want fast loading and smooth scrolling so the page feels modern.
4. As an operator, I want consistent components so future pages can be built faster.
5. As a stakeholder, I want CTA click tracking ready so we can measure conversion later.

---

### Phase 4 — Future Add-ons (Only if requested)
- Add real form submission (email service/webhook) + spam protection.
- Add CMS-driven content.
- Add investor deck download gate.

**User stories (Phase 4)**
1. As a stakeholder, I want demo requests delivered to email/CRM so follow-up is immediate.
2. As a stakeholder, I want spam protection so submissions are high quality.
3. As a marketer, I want to publish updates without deployments.
4. As an investor, I want to download a one-pager/deck so I can share internally.
5. As an analyst, I want attribution on conversions so we can optimize acquisition.

## 3. Next Actions
1) Draft the complete landing page copy (all required sections) + 3 hero headlines + 3 CTAs + investor pitch summary.
2) Build Phase 1 skeleton page with section scaffolding + CTA anchors + static form.
3) Review copy for investor clarity and tighten value prop; iterate until the narrative is crisp.
4) Implement Phase 2 premium UI with shadcn/ui, refined spacing/typography, and subtle animations.

## 4. Success Criteria
- Investor comprehension test: value proposition is clear from Hero + Problem + Solution without scrolling back.
- Visual quality: premium SaaS look (consistent typography, spacing, color system) across mobile/tablet/desktop.
- Conversion readiness: “Book a Demo” is visible above the fold and repeated; bottom form has validation + success state.
- Content completeness: all required sections present; placeholders included for future social proof and traction.
- Stability: no broken links/anchors, no layout issues at key breakpoints, animations remain subtle and performant.
