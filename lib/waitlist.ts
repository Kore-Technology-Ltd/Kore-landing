/**
 * Kore Waitlist API Client
 * ========================
 * Used by the landing page to submit waitlist entries
 * and fetch live signup counts for social proof display.
 *
 * Drop this file in: apps/landing/lib/waitlist.ts
 */

export type WaitlistRole = 
  | "farmer" 
  | "wholesaler" 
  | "restaurant" 
  | "hotel" 
  | "retailer" 
  | "consumer" 
  | "household" 
  | "investor" 
  | "partner";

export interface WaitlistSubmission {
  name: string;
  email: string;
  phone: string;
  location: string;
  role: WaitlistRole;
}

export interface WaitlistStats {
  farmer: number;
  wholesaler: number;
  restaurant: number;
  hotel: number;
  retailer: number;
  consumer: number;
  household: number;
  investor: number;
  partner: number;
  total: number;
}

interface ApiResponse<T = null> {
  success: boolean;
  message?: string;
  code?: string;
  data?: T;
  cached_at?: string;
}

// ─── CONFIG ──────────────────────────────────────────────────────────────────

/**
 * Set NEXT_PUBLIC_WAITLIST_ENDPOINT in your .env.local:
 *
 * NEXT_PUBLIC_WAITLIST_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
 *
 * Get this URL from: Apps Script > Deploy > Manage Deployments > Copy URL
 */
const ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;

if (!ENDPOINT && typeof window !== "undefined") {
  console.warn("[Waitlist] NEXT_PUBLIC_WAITLIST_ENDPOINT is not set.");
}

// ─── SUBMIT ──────────────────────────────────────────────────────────────────

/**
 * Submit a waitlist entry.
 *
 * Usage:
 * const result = await submitWaitlist({ name, email, phone, location, role });
 * if (result.success) { show success state }
 * else { show result.message as error }
 */
export async function submitWaitlist(
  submission: WaitlistSubmission
): Promise<ApiResponse> {
  if (!ENDPOINT) {
    throw new Error("Waitlist endpoint not configured.");
  }

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({
      name: submission.name.trim(),
      email: submission.email.trim().toLowerCase(),
      phone: submission.phone.trim(),
      location: submission.location.trim(),
      role: submission.role,
      // Apps Script reads origin from the request for CORS
      origin: typeof window !== "undefined" ? window.location.origin : "",
    }),
  });

  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }

  return response.json();
}

// ─── STATS ───────────────────────────────────────────────────────────────────

/**
 * Fetch live signup counts for the social proof section.
 *
 * Usage in a Server Component (Next.js App Router):
 * const stats = await fetchWaitlistStats();
 * // Revalidate every 5 minutes
 *
 * Usage in a Client Component:
 * const [stats, setStats] = useState<WaitlistStats | null>(null);
 * useEffect(() => { fetchWaitlistStats().then(setStats); }, []);
 */
export async function fetchWaitlistStats(): Promise<WaitlistStats | null> {
  if (!ENDPOINT) return null;

  try {
    const response = await fetch(`${ENDPOINT}?action=stats`, {
      // Next.js cache: revalidate every 5 minutes
      // Remove this if using outside of Next.js
      next: { revalidate: 300 },
    } as RequestInit);

    if (!response.ok) return null;

    const json: ApiResponse<WaitlistStats> = await response.json();
    return json.success && json.data ? json.data : null;
  } catch {
    // Stats are non-critical — fail silently
    // The landing page will just not show the numbers
    console.warn("[Waitlist] Could not fetch stats.");
    return null;
  }
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

/**
 * Format a stat number for display.
 * 2847 → "2,847"
 * 1234567 → "1.2M"
 */
export function formatStatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000)     return n.toLocaleString("en-NG");
  return String(n);
}

/**
 * Normalize a Nigerian phone number to E.164 before sending.
 * The Apps Script also normalizes, but cleaner to do it on the client too.
 */
export function normalizeNigerianPhone(input: string): string {
  const digits = input.replace(/\D/g, "");
  if (digits.startsWith("234")) return "+" + digits;
  if (digits.startsWith("0"))   return "+234" + digits.slice(1);
  return "+" + digits;
}