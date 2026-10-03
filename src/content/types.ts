/* Content ledger conventions.
   Every page module exports `content` (what renders) and `sources` (where each block came from).
   `sources` keys are dot-paths into `content`; the longest matching prefix wins.
   OLD-SITE   verbatim or lightly trimmed from vynzicfo.com (reference/existing-site)
   BLUEPRINT  from the founder's blueprint deck (reference/blueprint-deck-text.md)
   EDITED     rewritten for clarity/brevity; `note` says what it was built from
   NEEDS-INPUT  slot exists, content does not; tracked in CONTENT-REQUESTS.md and never rendered */
export type Src = 'OLD-SITE' | 'BLUEPRINT' | 'EDITED' | 'NEEDS-INPUT';
export type SourceMap = Record<string, Src | { src: Src; note: string }>;

export interface Step { title: string; text: string; icon?: string; outputs?: string[] }
export interface Module { title: string; text?: string }
export interface Workstream { title: string; modules: string[] }

export interface PracticeContent {
  slug: string;
  name: string;
  short: string;
  eyebrow: string;
  icon: string;
  accent: 'blue' | 'teal';
  hero: { title: string; text: string; cta: string };
  challenge: { title: string; intro: string; situations: string[] };
  work: { title: string; intro: string; workstreams: Workstream[] };
  how: { title: string; intro: string; steps: Step[] };
  deliverables: { title: string; items: Module[] };
  who: { title: string; items: string[] };
  proof: { title: string; items: { title: string; text: string }[] }; // empty = block not rendered
  cta: { title: string; text: string; primary: string };
}
