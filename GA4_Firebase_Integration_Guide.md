# Google Analytics 4 (GA4) & Firebase Analytics Integration Guide

This guide documents the complete GA4 + Firebase Analytics implementation for the Korè Landing Page application.

---

## 1. Architecture Overview

The analytics system is built with a modular, privacy-first, GDPR/CCPA-compliant architecture supporting **Google Consent Mode v2**.

```
src/
├── analytics/
│   ├── AnalyticsEvents.ts       # Centralized event & parameter constants
│   ├── consent.ts               # Google Consent Mode v2 & localStorage preference manager
│   ├── device.ts                # Browser, OS, Viewport, & Device type detector
│   ├── utm.ts                   # First-touch & Last-touch UTM campaign attribution
│   ├── firebase.ts              # Firebase App & GA4 Analytics singleton initializer
│   ├── analyticsHelpers.ts      # Strongly-typed tracking methods (page_view, waitlist, cta, error)
│   ├── useAnalytics.ts          # Custom hooks (auto pageview, scroll depth, timing, outbound, error)
│   ├── AnalyticsProvider.tsx    # Context Provider & active hook wrapper
│   └── ErrorBoundary.tsx        # React Error Boundary with error analytics logging
└── components/
    └── analytics/
        ├── CookieConsentBanner.tsx # Accessible GDPR/CCPA consent banner
        ├── CookieSettingsModal.tsx # Category preference settings modal
        └── CookieConsent.css       # Responsive styling
```

---

## 2. Tracked Events Reference

| Event Name                    | Type           | Description                                       | Parameters Captured                                                                        |
| :---------------------------- | :------------- | :------------------------------------------------ | :----------------------------------------------------------------------------------------- |
| `page_view`                   | Auto           | Fired on route change / initial load              | `page_path`, `page_title`, `referrer`, `device_type`, `browser`, `os`, `viewport`, `utm_*` |
| `waitlist_started`            | Funnel         | User focuses first input in waitlist form         | `source`, `device_type`, `viewport`                                                        |
| `waitlist_email_entered`      | Funnel         | User focuses/types email input                    | `email_domain`, `device_type`                                                              |
| `waitlist_name_entered`       | Funnel         | User focuses/types name input                     | `device_type`                                                                              |
| `waitlist_submission_attempt` | Funnel         | Form submit button clicked                        | `button_location`, `role`                                                                  |
| `waitlist_submission_success` | **Conversion** | Backend returns successful submission             | `role`, `email_domain`, `timestamp`                                                        |
| `waitlist_submission_failed`  | Error          | Backend returns error status                      | `role`, `error_message`                                                                    |
| `waitlist_duplicate_email`    | Funnel         | User attempts to re-register existing email       | `role`, `error_message`                                                                    |
| `waitlist_validation_error`   | Funnel         | Form validation fails on client side              | `role`, `error_message`                                                                    |
| `waitlist_server_error`       | Error          | API network failure or unexpected exception       | `role`, `error_message`                                                                    |
| `cta_click`                   | Interaction    | User clicks any primary/secondary CTA             | `button_name`, `section`, `position`, `destination`                                        |
| `outbound_click`              | Interaction    | User clicks an external link (WhatsApp, Socials)  | `destination`, `text`, `section`                                                           |
| `scroll_depth`                | Engagement     | Scroll depth thresholds: 25%, 50%, 75%, 90%, 100% | `percent_scrolled`, `page_path`                                                            |
| `time_on_page`                | Engagement     | Time thresholds: 30s, 60s, 120s, 300s             | `time_seconds`, `page_path`                                                                |
| `engaged_user`                | Engagement     | User spent >30 seconds on page                    | `page_path`                                                                                |
| `frontend_error`              | System         | Unhandled React rendering or window exceptions    | `error_message`, `error_stack`, `error_type`                                               |

---

## 3. How to Mark `waitlist_submission_success` as a GA4 Conversion (Key Event)

To track Waitlist Signups as conversions in Google Analytics 4:

1. Log into your [Google Analytics Console](https://analytics.google.com/).
2. Select your Korè GA4 Property.
3. In the left navigation, click **Admin** (gear icon) -> **Data display** -> **Events**.
4. In the list of custom events, find `waitlist_submission_success`.
5. Toggle the switch under **Mark as key event** (formerly "Mark as conversion").
6. Navigate to **Admin** -> **Key events** to confirm `waitlist_submission_success` is listed.

---

## 4. GA4 Dashboard Reports & Navigation

Here is where each custom event and dimension appears in GA4:

### 1. Realtime Report

- **Location**: `Reports` -> `Realtime`
- **Use Case**: Instantly verify live page views, active users, `waitlist_submission_success` events, and consent updates in real time.

### 2. Events Report

- **Location**: `Reports` -> `Engagement` -> `Events`
- **Use Case**: View aggregate event counts for `cta_click`, `scroll_depth`, `waitlist_started`, and `waitlist_submission_success`.

### 3. Conversions / Key Events Report

- **Location**: `Reports` -> `Engagement` -> `Key events`
- **Use Case**: Track conversion trends over time for waitlist signups by date, country, device, and marketing campaign.

### 4. Traffic & User Acquisition Reports

- **Location**: `Reports` -> `Acquisition` -> `Traffic acquisition` (and `User acquisition`)
- **Use Case**: Analyze how users found Korè via `utm_source`, `utm_medium`, `utm_campaign`, and organic referrers.

### 5. Landing Pages Report

- **Location**: `Reports` -> `Engagement` -> `Landing page`
- **Use Case**: Evaluate bounce rate, average engagement time (`time_on_page`), and scroll depth per entry page (`/`, `/team`).

---

## 5. Testing & DebugView Verification

### Enabling GA4 DebugView

To test events in real-time without skewing production reports:

1. Install the **Google Analytics Debugger** Chrome Extension OR run the app with `?debug_mode=true` in the URL:
   `http://localhost:5173/?debug_mode=true`
2. Open [Google Analytics](https://analytics.google.com/) -> **Admin** -> **DebugView**.
3. Perform actions on your site (accept cookies, scroll, submit waitlist, click CTAs).
4. Watch events stream into DebugView in real time.

---

## 6. Privacy & Google Consent Mode v2 Compliance

- **Default State**: `analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`, `functionality_storage`, and `personalization_storage` default to `'denied'`.
- **Script Blocking**: Firebase Analytics singleton initialization is blocked until user clicks **"Accept All"** or enables **"Analytics Cookies"** in Cookie Settings.
- **Preference Persistence**: Saved in `localStorage` under `kore_cookie_consent_v2`.
- **User Control**: Users can reopen and change preferences anytime by clicking **"Cookie Settings"** in the footer.
