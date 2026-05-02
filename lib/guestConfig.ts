import { EventKey } from './events'

// ─────────────────────────────────────────────────────────────────
//  GUEST INVITE SYSTEM
//  Each guest gets a personalised link:
//  https://susmitha-x-tharan.vercel.app/invite/TOKEN
//
//  BUILT-IN TIERS:
//  • ALL  → Haldi + Sangeeth + Wedding
//  • SW   → Sangeeth + Wedding
//  • W    → Wedding only
//
//  ADD CUSTOM GUEST TOKENS BELOW (name = shown as "Dear [name],")
//  Only set `name` for personal tokens, not tier tokens.
// ─────────────────────────────────────────────────────────────────

export interface GuestConfig {
  name?: string        // Optional — only set for named personal invites
  events: EventKey[]
}

export const GUEST_TOKENS: Record<string, GuestConfig> = {
  // ── TIER TOKENS — no name, no "Dear X" shown ──────────────────
  'ALL': { events: ['haldi', 'sangeeth', 'wedding'] },
  'SW':  { events: ['sangeeth', 'wedding'] },
  'W':   { events: ['wedding'] },

  // ── CUSTOM GUEST TOKENS — add yours below ─────────────────────
  // 'KOLANI01':     { name: 'Kolani Family',     events: ['haldi', 'sangeeth', 'wedding'] },
  // 'NALLAMOTHU01': { name: 'Nallamothu Family', events: ['haldi', 'sangeeth', 'wedding'] },
  // 'SHARMA01':     { name: 'Priya & Rahul',     events: ['sangeeth', 'wedding'] },
}

export const DEFAULT_EVENTS: EventKey[] = ['haldi', 'sangeeth', 'wedding']

export function getGuestConfig(token: string): GuestConfig | null {
  return GUEST_TOKENS[token.toUpperCase()] ?? GUEST_TOKENS[token] ?? null
}
