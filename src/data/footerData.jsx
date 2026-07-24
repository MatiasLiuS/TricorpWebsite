// src/data/footerData.js

export const footerContent = {
  logo: {
    src: "/assets/tricorp-horizontal-transparent.png",
    alt: "Tricorp Logo"
  },
  badgeText: "Strategy. Implementation. Value Creation.",
  narrativeText: "Building businesses. Implementing strategy. Creating value. We close the execution gap for leading enterprises and global investors.",
  gatewayTitle: "Contact Gateway",
  contacts: [
    { label: "info@tricorp.us", href: "mailto:info@tricorp.us", type: "email" },
    { label: "www.tricorp.us", href: "https://www.tricorp.us", type: "web" }
  ],
  trustBadge: "Trust Built Over Time",
  trustMetrics: [
    { value: "30+", label: "Years of Executive Experience" },
    { value: "2003", label: "Established Enterprise" },
    { value: "2004", label: "Online Since 2004 ↗", href: "https://who.is/whois/tricorp.us", isLink: true },
    { value: "Global", label: "Commercial Relationships" }
  ],
  footerSummary: "For more than two decades, Tricorp has helped organizations transform strategy into measurable business value through disciplined implementation, trusted relationships and long-term vision.",
  copyright: `© ${new Date().getFullYear()} Tricorp. All rights reserved.`
};