import { defineMiddleware } from "astro:middleware";

/**
 * Security headers applied to every response.
 *
 * These defend against common web attacks (XSS, clickjacking, protocol
 * downgrade, MIME sniffing) and tighten the default browser behaviour.
 */
const securityHeaders: Record<string, string> = {
  /* ── HSTS ──────────────────────────────────────────────── */
  // Forces browsers to always use HTTPS for this domain (and subdomains)
  // for one year. `preload` lets the domain be included in browsers'
  // built-in HSTS lists so even the very first visit is over HTTPS.
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",

  /* ── COOP ──────────────────────────────────────────────── */
  // Isolates the browsing context so other origins can't get a reference
  // to this window (prevents cross-origin attacks like Spectre side-channels).
  "Cross-Origin-Opener-Policy": "same-origin",

  /* ── Clickjacking protection ───────────────────────────── */
  // Prevents any site from embedding this page inside an <iframe>.
  "X-Frame-Options": "DENY",

  /* ── Content Security Policy ───────────────────────────── */
  // Controls which resources the browser is allowed to load:
  //   - default-src 'self'        → only load resources from our own origin
  //   - script/style 'unsafe-inline' → needed for Astro's inline <script> and <style> blocks (theme toggle, scroll observer, scoped CSS)
  //   - font-src 'self'           → self-hosted fonts only (Inter, Agustina)
  //   - img-src 'self' data:      → allow images from our origin + inline data URIs (e.g. SVG backgrounds)
  //   - frame-ancestors 'none'    → like X-Frame-Options DENY but for CSP
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data:",
    "frame-ancestors 'none'",
  ].join("; "),

  /* ── MIME sniffing protection ──────────────────────────── */
  // Stops browsers from guessing (sniffing) the Content-Type of a response.
  // Without this, a browser might execute a file that looks like JS even
  // if the server says it's plain text — a classic XSS vector.
  "X-Content-Type-Options": "nosniff",

  /* ── Referrer policy ───────────────────────────────────── */
  // Sends the full URL as referrer only to same-origin requests.
  // Cross-origin requests get just the origin (e.g. "https://andrejesus.com")
  // so outbound links don't leak the full page path to third parties.
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();

  for (const [header, value] of Object.entries(securityHeaders)) {
    response.headers.set(header, value);
  }

  return response;
});
