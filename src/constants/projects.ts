export const projects = [
  {
    id: 1,
    title: "Money Rise",
    img: "/mr.png",
    type: "Production",
    desc: "Quick mobile recharge for your top-up, e-load, and wallet balance. Instant and secure service for your phone and wallet.",
    longDesc: `Money Rise is a modern, secure, and user-friendly financial platform composed of a responsive web dashboard and a cross-platform mobile app. Built for speedy development and a polished UX, the web dashboard uses HTML, CSS, TailwindCSS and a Laravel backend with MySQL, while the mobile app is developed in Flutter for native-like performance across Android and iOS. Money Rise supports full user lifecycle features (authentication, identity & profile), a multi-level referral network, mobile top-up and deposit flows, gift card management, employee/operations tools, and a flexible currency & points system — all with real-time notifications and external messaging (Telegram) for critical events.

Core goals

Provide an intuitive, secure wallet and rewards platform that users can access on web or mobile.

Enable virality and organic growth via a structured referral network and incentives.

Give business owners and employees a powerful admin dashboard for operations, reconciliation, and analytics.

Deliver timely, real-time communications (in-app push, Telegram alerts) for high-value events and system monitoring.

Support multiple currencies and a points economy to run promotions, loyalty, and hybrid balance systems.

Key features (user-facing)

1. Authentication & security

Email/password signup, social sign-in options (optional), and phone number verification.

Two-factor authentication (TOTP or SMS) for optional added security.

Secure password reset flow, session management, and device management in user profile.

Role-based access control to separate regular users, merchants, and employees.

2. User profiles & KYC-ready hooks

Profile management (basic details, contact, documents upload).

Optional KYC workflows for identity verification (upload & review pipeline) tied to transaction limits.

3. Multi-level referral network

Track referral relationships (1st-level, configurable depth).

Automatic referral reward calculations: cash, points, or coupons.

Referral tracking dashboard: invited users, conversion rates, rewards earned.

4. Wallets, deposits & mobile top-up

User wallet(s) supporting existing currency balances and a separate points balance.

Deposit flows: bank transfer, card-on-file (via payment gateway integration), or supported local payment rails.

Mobile top-up (airtime/data) module: select operator, enter number, choose package, checkout with wallet or card.

Transaction history with filters, export, and receipts.

5. Gift cards & vouchers

Create, gift, redeem gift cards with unique codes.

Admin options for issuing promotional gift cards, expiry, and usage limits.

UI flows for gifting (select amount, personalize message, deliver via email/SMS/Telegram).

6. Currency & points system

Native support for multiple fiat currencies (display, conversion, formatting).

Separate loyalty points ledger with configurable earn/redeem rules.

Rules engine (admin-configurable) for converting points ↔ currency or applying discounts.

7. Real-time notifications

In-app real-time push notifications (websockets / Pusher / Laravel Echo) for payments, top-ups, referrals, and admin alerts.

Mobile push notifications through Firebase Cloud Messaging (FCM).

Configurable notification preferences in user settings.

8. Telegram messaging & system alerts

Integration to send transactional messages or alerts to Telegram (user opt-in for certain notifications; admin/ops alerts to a Telegram channel/bot).

Support for sending receipts, critical system alerts, and fraud notifications to designated chat(s).

Admin & employee features (dashboard)

1. Employee management & roles

Create employee accounts with granular permissions (operations, finance, support, analytics).

Audit logs for actions taken by staff (edits, approvals, refunds).

2. Dashboard & analytics

KPIs: total deposits, active users, top referrers, successful top-ups, revenue by currency.

Transaction timeline, filters, and CSV export.

Reconciliation tools for matching payment gateway/bank statements to internal deposits.

3. User & transaction management

Searchable user directory, adjust balances (with audit), freeze/unfreeze accounts.

Approve/decline withdrawals, manual corrections with reason codes.

4. Campaigns & promotions

Manage gift cards, discount codes, point multipliers, and referral campaign configurations.

Schedule campaigns and view performance metrics per campaign.

5. Security & compliance

IP & device restrictions, suspicious activity alerts, and integration hooks for third-party compliance tools.

Backup and maintenance utilities for the MySQL DB and Laravel queues.

Architecture & technical notes

Backend

Laravel (API + admin dashboard) with RESTful endpoints (and WebSocket events via Laravel Echo / broadcasting).

MySQL relational database for users, wallets, transactions, referrals, and audit logs.

Queue workers (Laravel Horizon/Redis) for background jobs: notifications, Telegram messages, reconciliation tasks.

Frontend (Web dashboard)

HTML + TailwindCSS for responsive, utility-first styling.

Progressive enhancements for accessibility, responsive layouts for desktop/tablet/phone.

Uses Laravel Blade or SPA frontend depending on preference (Blade for server-rendered admin; Vue/React if SPA).

Mobile (Flutter)

Single codebase for iOS/Android with native-like performance.

Integration with backend APIs, secure token storage, push notifications (FCM), and local caching for offline resilience.

Real-time & integrations

Websockets for live events (new transaction, referral reward, system alert).

Telegram Bot API for sendMessage / sendDocument for receipts and admin alerts.

Payment gateway integration (PCI considerations) for card payments and webhooks for deposit confirmations.

Scalability & reliability

Stateless API servers behind a load balancer; persistent MySQL with read-replicas for scale.

Redis for caching and queue management.

Regular DB backups, monitoring (metrics & logs), and alerting integrated to Telegram/other channels.

UX & UI considerations

TailwindCSS for a clean, consistent design system — components: cards, tables, modals, forms, and responsive navbars.

Mobile-first Flutter design with modular widgets for wallet, payments, referrals, notifications, and support chat.

Gift card and top-up flows optimized to complete within 2–3 taps on mobile.

Admin dashboard with dense data views, quick action buttons, and audit trails for transparency.

Security & privacy

HTTPS everywhere, secure storage of secrets, environment-based config.

Sensitive operations gated by 2FA and employee role checks.

Rate-limiting on key APIs, input validation, prepared statements / ORM protections against injection.

Privacy controls and data export / deletion endpoints to comply with data regulations.

Example user journeys

A. New user — sign up & referral

Sign up with phone/email, verify identity.

Enter referral code (optional) at signup.

Receive welcome bonus in points / small deposit credited to wallet.

Use wallet to top up their phone or redeem gift card.

B. Admin approves top up payout

User requests a high-value cashout; it enters a review queue.

Employee with finance role reviews, approves; the transaction status updates in real time.

User receives in-app and Telegram confirmation; admin gets log entry.

`,
    link: "https://money-rise.com/",
    languages: ["HTML", "CSS", "PHP", "Laravel", "Flutter"],
  },
  {
    id: 2,
    title: "LOI HENG",
    img: "/lh.png",
    type: "Production",
    desc: "Leading IT & e-commerce company offering globally recognized products and networking solutions in Myanmar and Singapore.",
    longDesc: `Loi Heng International is a modern and scalable e-commerce platform designed to deliver a seamless shopping experience for customers while providing powerful tools for administrators and vendors. Built with a hybrid stack — the web frontend leverages Next.js and React with Material UI for a responsive, modern design, while Laravel with a MySQL backend handles secure APIs, authentication, and business logic. HTML and CSS are used for base structure and styling, ensuring accessibility and performance across devices.

The platform is fully equipped with an add-to-cart and checkout system, multi-category and brand-based product organization, advanced search and filtering, and user authentication for both customers and administrators. Customers can browse products, apply discounts or coupons, manage wishlists, place orders, and leave reviews, while the system ensures that all interactions are smooth, fast, and secure.

Core goals

Provide a user-friendly, responsive, and visually appealing e-commerce storefront.
Support scalable product creation and management, including categories, subcategories, and brands.
Enable secure order management, tracking, and customer notifications via email.
Offer a complete marketing toolkit including product reviews, discount codes, and promotional banners.
Give administrators a powerful dashboard for managing users, products, orders, and campaigns.

Key features (user-facing)

1. Authentication & profiles
Secure login and registration system with role-based access (customer, admin, vendor).
Profile management including personal details, saved addresses, and order history.
Email-based account verification and password reset flows.

2. Product catalog & categories
Multi-level category and brand management for organizing thousands of products.
Rich product detail pages with descriptions, images, price, stock levels, and reviews.
Advanced search and filter options by category, brand, price range, and popularity.

3. Cart, checkout & payments
Add-to-cart with quantity control and price updates in real time.
Order summary and checkout with billing/shipping details.
Discount and coupon system for promotions.
Order confirmation via email notification.

4. Wishlist & reviews
Wishlist system to save favorite products for later purchase.
Verified purchase reviews and star ratings to build trust and community feedback.

5. Promotions & banners
Dynamic homepage and category banners to highlight promotions.
Coupon system with expiration rules and usage limits.
Email campaigns to notify customers about sales, promotions, and updates.

6. Notifications & contact
Automated email notifications for orders (confirmation, processing, shipping, delivered).
Contact form integrated with backend for customer inquiries.
Optional integration with third-party mail services (SendGrid, Mailgun, SES) for reliable delivery.

Admin & vendor features

1. Product management
Create, edit, and delete products with categories, tags, and brand associations.
Upload product images, set inventory stock levels, and configure pricing.
Manage discount rules, coupons, and promotional campaigns.

2. Order management
View all incoming orders, update statuses (pending, shipped, delivered, canceled).
Track payments and customer details for fulfillment.
Exportable reports for finance and operations.

3. User management
Admin controls for managing customers and vendors.
Role-based permissions to assign responsibilities.
Audit logs for tracking employee/admin actions.

4. Marketing & analytics
Banner management to promote campaigns and sales.
Discount and coupon system with usage tracking.
Basic analytics (sales performance, top products, popular categories).

Architecture & technical notes

Frontend
Next.js + React with Material UI for responsive, SEO-friendly, and dynamic UI.
Server-side rendering for faster load times and better indexing.
Tailored components with accessibility and cross-device optimization.

Backend
Laravel + MySQL powering APIs, authentication, and order logic.
RESTful endpoints with secure token-based access.
Email integration for notifications and contact forms.

Security & compliance
Role-based access controls for users, admins, and vendors.
Protection against SQL injection, CSRF, and XSS via Laravel and React best practices.
Secure password handling, HTTPS everywhere, and validation for inputs.

`,

    link: "https://mm.loiheng.com/",
    languages: ["HTML", "CSS", "PHP", "Laravel", "Next JS"],
  },
  {
    id: 3,
    title: "Ku Nyi",
    img: "/kn.png",
    type: "Production",
    desc: "Ku Nyi is a modern health and wellness mobile app built with Flutter and powered by a Node.js backend, offering a seamless experience for users to track and improve their lifestyle.",
    longDesc: `Ku Nyi is a fully functional mobile application available on the Google Play Store. 
It is designed with Flutter for cross-platform performance (iOS & Android) and supported by a scalable Node.js backend. 

The app provides users with an intuitive interface to manage their daily activities, track wellness goals, and stay connected with essential health services. With smooth navigation, responsive UI, and secure backend integration, Ku Nyi ensures a reliable and engaging user experience. 

This project demonstrates strong expertise in mobile-first development, backend API design, and real-world deployment for production use.`,
    languages: ["Flutter", "Node.js"],
    link: "https://play.google.com/store/apps/details?id=org.hihealth.kunyi",
  },
];
