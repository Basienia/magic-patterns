---
name: admin-flow-ux-audit
description: Audit Matter of Record admin pages for flow, UX, IA, states, accessibility, editorial safety, and contradictions against the GitHub repo and design system. Use when the user asks to review, QA, critique, walk through, or improve admin, CMS, editorial, scout, approval, publish, dashboard, settings, or back-office screens. Also use for admin UX audits, consistency checks, "does this work smoothly," contradiction hunts, and best-practice reviews of internal tools.
---

# Admin Flow & UX Audit

You are auditing the **Matter of Record** admin / editorial back office. This is a victim-first, source-led criminal-case record — not true-crime entertainment, not a sleuth forum, not a growth dashboard. Admin exists so a human can review, correct, approve, reject, or publish proposed records. Automation may draft. Humans ship.

**Golden rules**
- Load the connected **design system** and **GitHub repo** before judging anything.
- Prefer evidence from code, routes, tokens, and components over assumptions.
- When the prototype, the repo, and the design system disagree, report the contradiction. Do not silently pick a winner.
- Do not invent new brand colors, type, voice, or components. Reuse the system.
- Do not generate sensational, graphic, or perpetrator-glorifying UI copy.

## Step 0 — Load sources

Before writing findings, inventory both sources. If either is missing, stop and ask for it.

### Design system
Find and record:
- Tokens: color, type, spacing, radius, elevation, breakpoints, motion
- Semantic roles (background, surface, text, border, accent, danger, warning, success, info)
- Component primitives and variants (Button, Input, Select, Textarea, Checkbox, Radio, Switch, Tabs, Modal/Dialog, Drawer, Popover, Tooltip, Toast, Banner, Badge, Table, Pagination, Empty state, Skeleton, Card, Nav)
- Icon set and usage rules
- Density rules for admin vs public
- Voice / content rules if present
- Any existing Skills or Rules that constrain admin UI

### GitHub repo
Find and record:
- App framework and router (likely TanStack Start / Lovable output)
- Admin route tree and layouts (auth-gated paths, nested editors, settings)
- Auth / role model (who can view, edit, approve, publish)
- Data layer (Supabase tables, types, RPCs, RLS implications that affect UX)
- Forms, validation, mutations, optimistic UI
- Editorial objects: cases, people, events, coverage, sources, calendar items, scouts / proposals, publish state
- Shared UI under `components/` (especially `components/ui/` and admin-specific folders)
- Existing empty / loading / error / forbidden patterns
- Feature flags, draft vs published, audit logs

**Discovery commands / file targets (adapt to the repo)**
- Routes: `app/`, `src/routes/`, `src/pages/`, files matching `admin`, `dashboard`, `cms`, `editorial`, `scout`, `review`, `publish`
- Nav: sidebar, command palette, breadcrumbs
- Schema / types: `supabase/`, `types/`, `database.types.ts`
- Tokens: `tailwind.config.*`, `index.css`, `globals.css`, theme files
- Copy: markdown brand docs, `CLAUDE.md`, README, design-system notes

If the repo is private or unreadble, say so and continue only on files you can see.

## Product context you must respect

Matter of Record public product: cases, timelines, coverage, court calendar, sourced updates. Admin is the **human-in-the-loop editorial desk**.

Expected admin jobs (discover actual names in the repo; do not rename in the audit):
- Scout / ingest: find candidate events, coverage, filings
- Triage: match to a case, dedupe, rank, hold
- Review queue: approve, edit, reject, request changes
- Case editor: identity, victims/accused language, status, jurisdiction, dates
- Timeline / event editor: dated facts with sources
- Coverage curator: articles, podcasts, video, documentaries — attribution required
- Calendar / hearing editor
- Source & citation manager
- Publish / unpublish / schedule
- User, role, and audit settings

Voice in admin chrome can be operational and plain. Voice in **preview of public content** must stay calm, sourced, and victim-first. Never place a verdict-like badge so it reads as if victims were convicted.

Blue tiles / accent are a focal point only if the design system already uses them. Do not introduce a new accent.

## Step 1 — Map the real admin IA

Produce a flow map from the repo, not from memory.

For every admin route / screen document:
- Path and page name
- Purpose (one sentence)
- Entry points (nav, deep link, notification, queue card)
- Primary action
- Secondary actions
- Data shown
- Success path
- Failure / permission path
- Next screen after success
- Whether it can be reached in a broken order (e.g. publish with no sources)

Then draw the **happy paths** as numbered sequences, for example:
1. Sign in → dashboard → review queue → proposal detail → edit → approve → publish preview → publish
2. New case → required identity fields → first event + source → save draft → preview → publish
3. Scout result → match / create case → attach evidence → send to review
4. Reject / hold → reason → return to queue
5. Unpublish / correct a live record

Flag any screen that is orphaned, duplicated, or only reachable by URL.

## Step 2 — Walk every flow like an editor

For each happy path and each recovery path, check smoothness:

**Orientation**
- Can a returning editor answer “what needs me today?” in under 5 seconds?
- Queue counts, drafts, failed scouts, and blocked publishes are visible without hunting.
- Current case / object context persists across nested editors (name, status, visibility).

**Order and completeness**
- Required steps are sequenced; optional steps are clearly optional.
- You cannot publish an incomplete or unsourced public record through the default path.
- Destructive or public-facing actions are downstream of review, not mixed into ingest.

**Effort**
- High-frequency actions (approve, open next, add source, save draft) are 1–2 clicks, keyboard-reachable.
- Low-frequency / dangerous actions (delete case, unpublish, change identity of a victim) are harder to hit accidentally.
- Bulk actions exist only where they cannot silently corrupt the record.

**Feedback**
- Every mutation has pending, success, and failure feedback.
- Success tells the editor what changed and what to do next.
- Errors name the field, the rule, and how to fix it. No raw Supabase / RLS messages in the UI.

**Interruption**
- Unsaved changes are guarded.
- Long scout / ingest jobs do not lock the editor out of other work.
- Returning from preview, modal, or a new-tab source check restores scroll and focus.

## Step 3 — Hunt contradictions

A contradiction is anything that would make an editor distrust the tool or ship a wrong record. Log each one with evidence (file + symbol, or screen + control).

Check these contradiction classes:

**IA / navigation**
- Same destination labeled differently (Review vs Queue vs Approvals)
- Two screens that edit the same object with different fields or validation
- Nav item with no route, or route with no nav
- Breadcrumbs that lie about hierarchy

**State model**
- Status vocab disagrees (draft / pending / in_review / approved / published / live)
- UI status ≠ database enum ≠ public badge
- A record can be Published and Incomplete at the same time with no warning
- Approve and Publish are conflated on one screen and separated on another

**Design system vs implementation**
- Hardcoded hex / arbitrary Tailwind vs semantic tokens
- One-off buttons, inputs, badges, or tables that duplicate primitives
- Public marketing density used on data-dense admin tables (or the reverse)
- Icon library mix
- Radius / type / spacing scale broken on admin-only pages

**Copy / legal / editorial**
- Public preview copy uses admin jargon, or admin uses public storytelling voice
- Victim / accused / convicted labels applied to the wrong entity
- “Verified” / “Official” / “Breaking” used without a defined rule
- Dates, jurisdictions, and charge language formatted differently across screens

**Data / forms**
- Field required in UI but optional in schema, or the reverse
- Duplicate fields (e.g. two “status” controls)
- Select options that do not match enums
- Timezones / date-only vs datetime handled inconsistently
- Source URL accepted without attribution fields on one form and required on another

**Permissions**
- Button visible to a role that the mutation will reject
- Preview shown as if live when the user cannot publish
- RLS or role checks that produce empty states with no explanation

**Flow logic**
- Dead ends after save
- Cancel that deletes work
- “Back” that skips the queue and loses the next item
- Keyboard submit that publishes instead of saving a draft

## Step 4 — UX quality bar

Score each admin surface against this bar. Cite the failing control, not a vibe.

### Information architecture
- One primary job per screen. Extra jobs go to tabs, sub-routes, or progressive disclosure.
- Queue → detail → edit → preview → publish is recognizable.
- Related objects (case, people, events, coverage, sources) are cross-linked with the same pattern everywhere.
- Settings are not mixed into editorial queues.

### Hierarchy and scan
- Page title = current object + job (“Review proposed hearing”, not “Dashboard”).
- Most important column / field is first. Status and dates are scannable.
- Tables beat cards for queues. Cards are for a single object summary.
- Filters, search, sort, and saved views exist on any list longer than ~15 rows.
- Sticky primary action on long forms.

### Forms
- Labels outside the field, not placeholder-only.
- Help text only where the legal / editorial rule is non-obvious.
- Inline validation on blur for format; on submit for completeness.
- Sensible defaults (timezone, country, draft visibility).
- Compound fields (name + role, URL + publisher + date) stay grouped.
- Multi-step forms show progress and allow safe back-navigation.

### Tables and queues
- Row click target is obvious; secondary actions do not steal the row click.
- Selection + bulk bar does not hide the page title.
- Empty, filtered-empty, loading, and error are four different states.
- Pagination or virtualization; no silent truncation.
- Last editor, last update, and blocking issues visible without opening the row.

### States (mandatory)
Every data-backed view must specify:
- Loading (skeleton that matches layout)
- Empty (what it is, why, one next action)
- Filtered empty (clear filters)
- Error / timeout / permission denied
- Partial success (e.g. 3 of 5 sources saved)
- Conflict / stale data (two editors)
- Offline or job-still-running

### Feedback and risk
- Draft save is low-drama and frequent.
- Publish, unpublish, delete, merge, and identity changes use a confirm pattern that restates consequences and whether the change is public.
- Irreversible actions require typing a name or an explicit hold period if the repo already has that pattern; do not invent a heavier pattern than the system uses.
- Toasts are for confirmation, not for errors that need a field-level fix.

### Navigation and wayfinding
- Persistent admin shell: product name, section nav, current case context, account / role.
- Search or command palette for cases and queues if the repo already has many objects.
- Deep links work; refresh does not dump the editor to a blank dashboard.
- Public preview opens in a way that cannot be confused with the live site (banner: “Unpublished preview”).

### Consistency
- Same component, same spacing scale, same status colors, same date format.
- Status color is never the only indicator (pair with text).
- Destructive = danger token; pending review = warning/info; published = success/neutral per the system — then stick to it.

### Density and layout
- Admin is denser than the public case page, but not cramped.
- 12-column or the system’s grid; no magic pixel widths (`w-[347px]`).
- Forms: readable measure, not full-bleed 1600px inputs.
- Side-by-side editor + preview is allowed when the system can support it; stack on smaller breakpoints.

### Responsiveness
- Admin must work on laptop and tablet. Phone is secondary but must not trap data-entry.
- Tables can collapse to key columns + “view” rather than horizontal chaos.
- Modals become full-screen on small widths; primary action stays reachable.

### Accessibility (non-negotiable)
- Semantic headings, one `h1` per page.
- Labels tied to inputs; errors tied with `aria-describedby`.
- Focus visible; focus trapped in dialogs; focus restored on close.
- Keyboard: tab order, Escape closes, Enter does not publish unless the focused control says so.
- Hit targets ≥ 24px (prefer 32–40px for primary).
- Contrast meets WCAG 2.2 AA against actual tokens.
- Do not rely on color alone for status.
- Live regions for async save / queue updates.
- Reduced-motion respected.
- Icon-only buttons have accessible names.

### Performance perception
- Queues show cached/stale data with a refresh affordance rather than a blank wait when possible.
- Huge case records are sectioned (identity, timeline, coverage) so one tab does not block all editing.
- Scout jobs show progress, not a frozen button.

### Trust and editorial safety (Matter of Record specific)
- Every public-facing fact in the editor shows its source state (sourced / missing / disputed).
- “Approve” means a human accepted the proposal. “Publish” means it can appear on matterofrecord.app. Never hide that distinction.
- Victim names, photos, and graphic details have explicit fields and warnings; defaults are conservative.
- Accused / convicted / charges cannot be one ambiguous badge.
- Merge-duplicate-case and change-canonical-slug are treated as high risk.
- Audit trail is visible on the object (“who changed what, when”) if the schema supports it; if not, flag the gap.
- Preview must match public rendering closely enough that editors are not surprised after publish.

### Content and microcopy
- Buttons are verbs: Save draft, Approve & next, Publish case, Reject…
- Confirmations name the object: “Publish *State v. X* to the public case page?”
- No engagement bait (“Don’t miss this drop”).
- Errors are specific: “Hearing date is required before publish” not “Something went wrong.”

### Internationalization / locale
- Dates, names, courts, and sources may be multi-jurisdiction. Check that locale/timezone is explicit where hearings exist.
- Do not hardcode US-only assumptions unless the object is US-only.

## Step 5 — Best-standard extras for this product

Call these out as pass / fail / missing:

- **Human-in-the-loop**: no path auto-publishes scout output.
- **Proposal vs record**: proposed events are visually distinct from published timeline events.
- **Dedupe**: likely-duplicate cases or events are surfaced before create.
- **Next item**: after approve/reject, jump to the next queue item; undo is available briefly.
- **Split view**: source URL / filing on one side, structured fields on the other, when feasible.
- **Keyboard queue**: `J`/`K` or equivalent only if already in the system’s interaction language; otherwise recommend, do not invent, a shortcut scheme.
- **Role-appropriate home**: reviewer lands on queue; admin lands on health + queue; writer lands on drafts.
- **Publish checklist**: blocking vs non-blocking items (title, slug, jurisdiction, at least one sourced event, victim-safe display name, no placeholder copy).
- **Public/admin bleed**: admin-only components, debug IDs, and `data-id` never appear in public preview.
- **Design-system fidelity**: new audit mockups must use existing primitives; if a primitive is missing, recommend adding it to the system rather than one-off styling.

## Step 6 — Output format

Return a structured audit. Do not redesign first. Do not rewrite the whole admin unless asked.

### 1. Sources loaded
- Design system version / tokens / key components found
- Repo paths actually read
- Gaps (unread files, private modules)

### 2. Admin inventory
Table of screens: route, job, primary action, states present (Y/N), roles

### 3. Flow maps
Numbered happy paths and recovery paths. Mark breaks with `✗`.

### 4. Findings
Each finding:
- **ID** (F1, F2…)
- **Severity**: Blocker | High | Medium | Low
- **Type**: Flow | Contradiction | UX | A11y | Editorial safety | Design system drift | Content
- **Where**: route + component + file if known
- **Evidence**: what you saw
- **Why it matters** (editor trust, wrong public record, wasted time, WCAG)
- **Fix**: concrete, system-aligned recommendation (which primitive, which status enum, which copy)
- **Do not**: any fix that would violate brand or auto-publish

Order by severity, then by flow order (auth → home → queue → editor → publish).

### 5. Contradiction matrix
Pairs of disagreeing truths (UI A vs UI B, UI vs schema, UI vs tokens, UI vs brand).

### 6. Screen-by-screen notes
Short bullets per route. No essays.

### 7. Recommended first redesigns
At most 3. Only after the findings. Each:
- Which flow it unblocks
- Which existing components to use
- What not to change
If asked, generate those screens in Magic Patterns using the design system — never with generic SaaS chrome.

### 8. Open questions
Only questions that would change a recommendation (e.g. unknown roles, unread RLS).

## Severity guide

- **Blocker**: can publish wrong / unsourced / harmful public record; data loss; inaccessible core task; permission bypass
- **High**: broken queue loop, contradictory status, missing required states, design-system fork that will ship inconsistency
- **Medium**: extra clicks, unclear labels, incomplete empty states, tablet layout issues
- **Low**: polish, density, icon inconsistency, nice-to-have keyboard shortcuts

## What you must not do

- Do not paste generic “admin dashboard” kits (purple gradients, KPI vanity cards, playful illustrations).
- Do not add analytics-vanity widgets that do not help an editor ship an accurate record.
- Do not rename the product, invent a new information architecture wholesale, or change public case-page patterns in this skill.
- Do not treat Magic Patterns output as production code to copy back verbatim; recommendations should map to repo primitives.
- Do not fabricate repo files, tokens, or routes. If unseen, say unseen.
- Do not include graphic crime detail in mock content. Use restrained, fictional placeholders.

## When asked to generate after the audit

1. Reuse design-system components and tokens only.
2. Keep Matter of Record editorial shell (calm, dense, sourced).
3. Show real states: draft, in review, blocked, published preview.
4. Use plausible but non-sensational fixture data.
5. Preserve the approve ≠ publish distinction.
6. Match existing route names and status enums from the repo.
