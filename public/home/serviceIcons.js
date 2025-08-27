const serviceIcons = {
    badge: {
        default: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e16f286a17acea46d284b9_Business%20Website%20Audit-1.svg",
        hover: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e16f22db56b5a9122d93f2_Business%20Website%20Audit.svg",
    },
    stats: {
        default: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e1708ffc5600d27d5aa884_Strategic%20Website%20Planning-1.svg",
        hover: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e1709579c08cac4523c742_Strategic%20Website%20Planning.svg",
    },
    graph: {
        default: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e1710dbe0e0e54b0545be5_Competitive%20Analysis-1.svg",
        hover: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e17117fa1918813c11b4b8_Competitive%20Analysis.svg",
    },
    funnel: {
        default: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e17260f208bf21b5bcf9a6_CRO.svg",
        hover: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e172497b3211fdc31d4ac7_CRO-1.svg",
    },
    ticket: {
        default: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e1758e79c08cac4528822a_Brand%20Positioning%20and%20Messaging-1.svg",
        hover: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e17566fc5600d27d5f278c_Brand%20Positioning%20and%20Messaging.svg",
    },
    analytics: {
        default: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e1708ffc5600d27d5aa884_Strategic%20Website%20Planning-1.svg",
        hover: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e1709579c08cac4523c742_Strategic%20Website%20Planning.svg",
    },
    handshake: {
        default: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e68d80ffd21b1f31d8a076_Client%20Onboarding%20Solutions.svg",
        hover: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e68d8559f59618c34d3786_Client%20Onboarding%20Solutions-1.svg",
    },
    speaker: {
        default: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e68db45a9e5e3d496d589e_Digital%20Marketing%20Strategy.svg",
        hover: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e68dbbac6cecdbea39a7d8_Digital%20Marketing%20Strategy-1.svg",
    },
    maintenance: {
        default: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e68df42414abaeaf922a31_Website%20Maintenance%20and%20Support-1.svg",
        hover: "https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e68decae69a0b6df2f5b6d_Website%20Maintenance%20and%20Support.svg",
    },
};

const servicesData = [
    {
        id: "businessAudit",
        title: "Business Website Audit",
        description: "Assess your website's performance and provide improvement recommendations.",
        href: "/home/business-website-audit.html",
        iconKey: "badge",
    },
    {
        id: "strategicPlanning",
        title: "Strategic Website Planning",
        description: "Create a strategy to align your website with business goals and audience needs.",
        href: "/home/strategic-website-planning.html",
        iconKey: "stats",
    },
    {
        id: "competitiveAnalysis",
        title: "Competitive Analysis",
        description: "Review competitors' sites to uncover opportunities for differentiation.",
        href: "/home/competitive-analysis.html",
        iconKey: "graph",
    },
    {
        id: "conversionOptimization",
        title: "Conversion Rate Optimization",
        description: "Enhance design and functionality to boost user engagement and conversions.",
        href: "/home/conversion-rate-optimization.html",
        iconKey: "funnel",
    },
    {
        id: "brandPositioning",
        title: "Brand Positioning and Messaging",
        description: "Develop content and visuals to clearly communicate your brand's value.",
        href: "/home/brand-positioning-and-messaging.html",
        iconKey: "ticket",
    },
    {
        id: "analytics",
        title: "Website Analytics and Reporting",
        description: "Track performance metrics and generate insights for data-driven decisions.",
        href: "/home/website-analytics-and-reporting.html",
        iconKey: "analytics",
    },
    {
        id: "clientOnboarding",
        title: "Client Onboarding Solutions",
        description: "Implement processes to streamline client onboarding and improve experience.",
        href: "/home/client-onboarding-solutions.html",
        iconKey: "handshake",
    },
    {
        id: "digitalMarketing",
        title: "Digital Marketing Strategy",
        description: "Plan integrated marketing efforts to drive traffic, leads, and sales.",
        href: "/home/digital-marketing-strategy.html",
        iconKey: "speaker",
    },
    {
        id: "maintenance",
        title: "Website Maintenance and Support",
        description: "Ensure your website is up-to-date, secure, and running smoothly.",
        href: "/home/website-maintenance-and-support.html",
        iconKey: "maintenance",
    },
];
