{
  "design_system_name": "[Company Name] Investor Landing (AI Sales Coaching)",
  "brand_attributes": [
    "credible",
    "investor-ready",
    "tech-forward",
    "minimal",
    "premium SaaS",
    "outcomes-driven"
  ],
  "visual_personality": {
    "style": "Swiss-style clarity + premium SaaS minimalism (high whitespace, crisp grid, restrained color)",
    "signature_motif": "‘Signal lines’ — thin 1px dividers + subtle blue focus rings + small data chips to imply analytics without heavy visuals",
    "texture": "Very subtle noise overlay on hero only (<=20% viewport) to avoid flatness"
  },
  "layout_strategy": {
    "page_type": "single-page landing",
    "reading_flow": "Z-pattern in hero, then F-pattern for narrative sections (Problem → Solution → Personas → Impact → Investor Value → Traction → Demo Form)",
    "container": "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
    "section_spacing": "py-16 sm:py-20 lg:py-24",
    "grid": {
      "default": "grid grid-cols-1 gap-6",
      "md": "md:grid-cols-2 md:gap-8",
      "lg": "lg:grid-cols-12 lg:gap-8",
      "bento": "Use lg:grid-cols-12 with cards spanning 4/6/8 columns for premium bento rhythm"
    },
    "nav": {
      "type": "fixed top-0 w-full",
      "behavior": "adds subtle border + blur on scroll; highlights active section",
      "smooth_scroll": "scrollIntoView({ behavior: 'smooth', block: 'start' }) with offset for fixed nav"
    }
  },
  "typography": {
    "font_pairing": {
      "headings": {
        "family": "Space Grotesk",
        "fallback": "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        "usage": "H1/H2 + key metric numerals"
      },
      "body": {
        "family": "Inter",
        "fallback": "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        "usage": "paragraphs, UI labels, nav"
      }
    },
    "google_fonts_import": "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap');",
    "type_scale_tailwind": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight",
      "h2": "text-base md:text-lg font-medium text-muted-foreground",
      "section_title": "text-2xl sm:text-3xl font-semibold tracking-tight",
      "card_title": "text-lg font-semibold",
      "body": "text-sm sm:text-base leading-relaxed",
      "small": "text-xs sm:text-sm text-muted-foreground"
    },
    "copy_rules": [
      "Prefer short, investor-style sentences.",
      "Lead with outcomes (time-to-productivity, retention, efficiency) before feature detail.",
      "Use numeric anchors (e.g., ‘Weeks → Days’) even if placeholders; label as ‘example’ or ‘target’ to avoid false claims."
    ]
  },
  "color_system": {
    "notes": "Blue/white corporate with subtle dark accents. Keep gradients mild and limited to hero decorative overlays only (<=20% viewport).",
    "tokens_css_variables": {
      "light": {
        "--background": "210 40% 98%",
        "--foreground": "222 47% 11%",
        "--card": "0 0% 100%",
        "--card-foreground": "222 47% 11%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "222 47% 11%",
        "--primary": "217 91% 55%",
        "--primary-foreground": "0 0% 100%",
        "--secondary": "210 40% 96%",
        "--secondary-foreground": "222 47% 11%",
        "--muted": "210 40% 96%",
        "--muted-foreground": "215 16% 47%",
        "--accent": "214 95% 93%",
        "--accent-foreground": "222 47% 11%",
        "--border": "214 32% 91%",
        "--input": "214 32% 91%",
        "--ring": "217 91% 55%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 100%",
        "--radius": "0.75rem"
      },
      "dark_optional": {
        "--background": "222 47% 7%",
        "--foreground": "210 40% 98%",
        "--card": "222 47% 9%",
        "--card-foreground": "210 40% 98%",
        "--primary": "217 91% 60%",
        "--primary-foreground": "222 47% 11%",
        "--border": "217 20% 18%",
        "--ring": "217 91% 60%"
      }
    },
    "hex_reference": {
      "ink": "#0B1220",
      "navy": "#0A2540",
      "primary_blue": "#1D63DC",
      "sky_tint": "#EAF2FF",
      "surface": "#FFFFFF",
      "surface_alt": "#F6F8FC",
      "border": "#E3E8F2",
      "muted_text": "#5B677A"
    },
    "allowed_gradients": [
      {
        "name": "hero-wash",
        "css": "radial-gradient(60% 60% at 20% 10%, rgba(29,99,220,0.14) 0%, rgba(29,99,220,0.00) 60%), radial-gradient(50% 50% at 80% 20%, rgba(10,37,64,0.10) 0%, rgba(10,37,64,0.00) 55%)",
        "usage": "Hero section background overlay only (decorative)."
      }
    ],
    "state_colors": {
      "success": "#0F766E",
      "warning": "#B45309",
      "info": "#1D63DC"
    }
  },
  "spacing_radius_shadows": {
    "radius": {
      "card": "rounded-xl",
      "button": "rounded-lg",
      "pill": "rounded-full (chips/badges only)"
    },
    "shadows": {
      "card": "shadow-[0_1px_0_rgba(10,37,64,0.06),0_12px_32px_rgba(10,37,64,0.08)]",
      "hover": "hover:shadow-[0_1px_0_rgba(10,37,64,0.08),0_18px_44px_rgba(10,37,64,0.12)]"
    },
    "borders": {
      "default": "border border-border/80",
      "hairline": "border-t border-border/70"
    }
  },
  "components": {
    "component_path": {
      "button": "/app/frontend/src/components/ui/button.jsx",
      "card": "/app/frontend/src/components/ui/card.jsx",
      "badge": "/app/frontend/src/components/ui/badge.jsx",
      "tabs": "/app/frontend/src/components/ui/tabs.jsx",
      "accordion": "/app/frontend/src/components/ui/accordion.jsx",
      "navigation_menu": "/app/frontend/src/components/ui/navigation-menu.jsx",
      "separator": "/app/frontend/src/components/ui/separator.jsx",
      "input": "/app/frontend/src/components/ui/input.jsx",
      "textarea": "/app/frontend/src/components/ui/textarea.jsx",
      "label": "/app/frontend/src/components/ui/label.jsx",
      "form": "/app/frontend/src/components/ui/form.jsx",
      "dialog": "/app/frontend/src/components/ui/dialog.jsx",
      "sonner_toast": "/app/frontend/src/components/ui/sonner.jsx"
    },
    "section_blueprints": {
      "nav": {
        "structure": "Left: [Company Name] wordmark; Center: section links; Right: Book a Demo button",
        "shadcn": ["navigation-menu", "button"],
        "tailwind": "fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/70",
        "data_testids": {
          "nav": "site-nav",
          "nav-book-demo": "nav-book-demo-button",
          "nav-link-hero": "nav-link-hero",
          "nav-link-problem": "nav-link-problem",
          "nav-link-solution": "nav-link-solution",
          "nav-link-features": "nav-link-features",
          "nav-link-investors": "nav-link-investors",
          "nav-link-traction": "nav-link-traction",
          "nav-link-demo": "nav-link-demo"
        }
      },
      "hero": {
        "layout": "Two-column on lg: left copy + CTAs, right product mock card stack (static placeholders)",
        "background": "Use allowed hero-wash gradient overlay + subtle noise; keep content area solid",
        "primary_cta": "Book a Demo",
        "secondary_cta": "View Platform Overview (scroll to Solution)",
        "shadcn": ["button", "badge", "card"],
        "micro_interactions": [
          "Primary CTA: hover translate-y-[-1px] + shadow increase; active scale-95",
          "Secondary CTA: ghost/outline with subtle bg on hover",
          "Hero mock cards: slight parallax on mouse move (optional)"
        ],
        "data_testids": {
          "hero": "hero-section",
          "hero-primary-cta": "hero-book-demo-button",
          "hero-secondary-cta": "hero-view-overview-button"
        }
      },
      "problem": {
        "pattern": "3 pain cards with crisp titles + 1-line proof statement",
        "shadcn": ["card", "separator"],
        "data_testids": {"problem": "problem-section"}
      },
      "solution": {
        "pattern": "Step timeline (3–4 steps) + ‘What’s inside’ accordion",
        "shadcn": ["accordion", "card"],
        "data_testids": {"solution": "solution-section"}
      },
      "features_by_persona": {
        "pattern": "Tabs: Sales Reps / Managers / Directors; each tab shows bento grid of feature cards",
        "shadcn": ["tabs", "card", "badge"],
        "data_testids": {
          "features": "features-section",
          "features-tab-reps": "features-tab-sales-reps",
          "features-tab-managers": "features-tab-managers",
          "features-tab-directors": "features-tab-directors"
        }
      },
      "business_impact": {
        "pattern": "Metrics strip (4-up) + ‘Operational leverage’ narrative",
        "visual": "Use simple progress bars or mini charts (optional Recharts) with muted styling",
        "shadcn": ["card", "progress", "badge"],
        "data_testids": {"impact": "business-impact-section"}
      },
      "investor_value": {
        "pattern": "Two-column: left thesis bullets, right ‘Scalability’ cards (data flywheel, multi-tenant readiness, content library compounding)",
        "shadcn": ["card", "badge"],
        "data_testids": {"investors": "investor-value-section"}
      },
      "traction_placeholder": {
        "pattern": "Milestones timeline with placeholders + ‘Next 2 quarters’ roadmap chips",
        "shadcn": ["card", "badge", "separator"],
        "data_testids": {"traction": "traction-section"}
      },
      "demo_form": {
        "pattern": "Closing CTA + compact form (name, email, company, role, message). Use shadcn Form + Input + Textarea",
        "shadcn": ["form", "input", "textarea", "label", "button"],
        "data_testids": {
          "demo": "demo-section",
          "demo-form": "demo-request-form",
          "demo-name": "demo-form-name-input",
          "demo-email": "demo-form-email-input",
          "demo-company": "demo-form-company-input",
          "demo-role": "demo-form-role-input",
          "demo-message": "demo-form-message-textarea",
          "demo-submit": "demo-form-submit-button"
        },
        "note": "Frontend-only: on submit show Sonner toast ‘Request received’ and reset form (MOCKED)."
      },
      "footer": {
        "pattern": "Minimal 2-row footer with links + small legal line",
        "shadcn": ["separator"],
        "data_testids": {"footer": "site-footer"}
      }
    }
  },
  "motion_microinteractions": {
    "library": {
      "recommended": "framer-motion",
      "install": "npm i framer-motion",
      "usage_notes": [
        "Use for section entrance (fade + slight y) and nav blur on scroll.",
        "Respect prefers-reduced-motion: disable transforms/animations."
      ]
    },
    "principles": [
      "No flashy animations; keep durations 180–260ms.",
      "Use easing: cubic-bezier(0.2, 0.8, 0.2, 1).",
      "Animate opacity + translateY only; avoid layout shift."
    ],
    "recipes": {
      "section_reveal": {
        "initial": "{ opacity: 0, y: 12 }",
        "whileInView": "{ opacity: 1, y: 0 }",
        "transition": "{ duration: 0.5, ease: [0.2,0.8,0.2,1] }",
        "viewport": "{ once: true, margin: '-80px' }"
      },
      "button_hover": "transition-[background-color,box-shadow,color,border-color] duration-200 hover:shadow-md active:scale-[0.98]",
      "card_hover": "transition-[box-shadow,border-color,background-color] duration-200 hover:border-border hover:bg-background"
    }
  },
  "data_viz_optional": {
    "library": "recharts",
    "install": "npm i recharts",
    "use_cases": [
      "Tiny ‘readiness’ sparkline in Business Impact",
      "Simple bar chart for ‘time-to-productivity’ (placeholder data)"
    ],
    "styling": {
      "chart_container": "rounded-xl border border-border/80 bg-card p-4",
      "colors": {
        "primary": "#1D63DC",
        "muted": "#A9B7D0",
        "grid": "#E3E8F2"
      }
    }
  },
  "accessibility": {
    "requirements": [
      "WCAG AA contrast for text on white and on primary blue buttons.",
      "Visible focus ring: ring-2 ring-ring ring-offset-2 ring-offset-background.",
      "Keyboard navigable nav + tabs.",
      "Respect prefers-reduced-motion."
    ],
    "forms": [
      "Always pair Label with Input.",
      "Provide inline error text area (even if MOCKED)."
    ]
  },
  "images": {
    "image_urls": [
      {
        "category": "hero_background_decor",
        "description": "Optional hero decorative background image (use as low-opacity overlay, not as main background).",
        "url": "https://images.pexels.com/photos/7130505/pexels-photo-7130505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        "category": "hero_background_decor",
        "description": "Alternative hero decorative gradient (blue/green tint).",
        "url": "https://images.pexels.com/photos/7135020/pexels-photo-7135020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        "category": "problem_solution_support",
        "description": "Modern office collaboration photo for a single supporting section (use sparingly; crop wide; avoid faces as focal point).",
        "url": "https://images.unsplash.com/photo-1774600134168-b9ebd714e4e1?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
      }
    ],
    "usage_rules": [
      "No stock-photo overload; max 1–2 photos total.",
      "Prefer abstract gradients + UI mock cards.",
      "Never place text directly on busy photos; use solid surface cards."
    ]
  },
  "implementation_notes_react_tailwind_js": {
    "file_conventions": [
      "Project uses .js (not .tsx). Keep components in .jsx/.js accordingly.",
      "Use shadcn/ui components from /src/components/ui; do not use raw HTML dropdowns/calendars/toasts.",
      "Use lucide-react icons (already common with shadcn) or FontAwesome CDN; no emoji icons."
    ],
    "nav_scroll_scaffold": {
      "snippet": "const scrollToId = (id) => {\n  const el = document.getElementById(id);\n  if (!el) return;\n  const y = el.getBoundingClientRect().top + window.scrollY - 80;\n  window.scrollTo({ top: y, behavior: 'smooth' });\n};"
    },
    "section_ids": [
      "hero",
      "problem",
      "solution",
      "features",
      "impact",
      "investors",
      "traction",
      "demo"
    ],
    "data_testid_rule": "Add data-testid to every CTA button, nav link, tab trigger, form input, and any metric number block. Use kebab-case describing role (not appearance)."
  },
  "instructions_to_main_agent": [
    "Replace default CRA App.css-centered demo styles; do not center the whole app container.",
    "Update /src/index.css :root tokens to the provided HSL values (primary blue, muted, ring, radius).",
    "Implement sections in the specified order with generous spacing and hairline separators.",
    "Use shadcn NavigationMenu for top nav; add smooth scrolling with offset.",
    "Hero: keep background mostly solid; apply hero-wash gradient overlay only as decorative layer (<=20% viewport).",
    "Features: implement Tabs by persona with bento card grid; each card has icon + title + 1–2 lines.",
    "Demo form: use shadcn Form components; submission is MOCKED (toast + reset).",
    "Add Framer Motion for subtle section reveals; ensure prefers-reduced-motion support.",
    "Ensure every interactive element and key metric has data-testid attributes as specified."
  ],
  "GRADIENT_RESTRICTION_RULE": {
    "prohibited": [
      "blue-500 to purple-600",
      "purple-500 to pink-500",
      "green-500 to blue-500",
      "red to pink"
    ],
    "rules": [
      "NEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.",
      "NEVER let gradients cover more than 20% of the viewport.",
      "NEVER apply gradients to text-heavy content or reading areas.",
      "NEVER use gradients on small UI elements (<100px width).",
      "NEVER stack multiple gradient layers in the same viewport.",
      "IF gradient area exceeds 20% of viewport OR affects readability, THEN use solid colors."
    ],
    "allowed_usage": [
      "Section backgrounds (not content backgrounds)",
      "Hero section header content (decorative overlays)",
      "Decorative overlays and accent elements only",
      "Hero section with 2-3 mild colors"
    ]
  },
  "general_ui_ux_design_guidelines": [
    "You must not apply universal transition. Eg: transition: all. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms",
    "You must not center align the app container, ie do not add .App { text-align: center; } in the css file. This disrupts the human natural reading flow of text",
    "NEVER: use AI assistant Emoji characters like 🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use FontAwesome cdn or lucid-react library already installed in the package.json",
    "GRADIENT RESTRICTION RULE: NEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element. Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc",
    "NEVER use dark gradients for logo, testimonial, footer etc",
    "NEVER let gradients cover more than 20% of the viewport.",
    "NEVER apply gradients to text-heavy content or reading areas.",
    "NEVER use gradients on small UI elements (<100px width).",
    "NEVER stack multiple gradient layers in the same viewport.",
    "ENFORCEMENT RULE: Id gradient area exceeds 20% of viewport OR affects readability, THEN use solid colors",
    "How and where to use: Section backgrounds (not content backgrounds); Hero section header content; Decorative overlays and accent elements only; Hero section with 2-3 mild color; Gradients creation can be done for any angle say horizontal, vertical or diagonal",
    "For AI chat, voice application, do not use purple color. Use color like light green, ocean blue, peach orange etc",
    "Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead.",
    "Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.",
    "Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.",
    "Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly",
    "Component Reuse: Prioritize using pre-existing components from src/components/ui when applicable; Create new components that match the style and conventions of existing components when needed; Examine existing components to understand the project's component patterns before creating new ones",
    "IMPORTANT: Do not use HTML based component like dropdown, calendar, toast etc. You MUST always use /app/frontend/src/components/ui/ only as a primary components as these are modern and stylish component",
    "Best Practices: Use Shadcn/UI as the primary component library for consistency and accessibility; Import path: ./components/[component-name]",
    "Export Conventions: Components MUST use named exports (export const ComponentName = ...); Pages MUST use default exports (export default function PageName() {...})",
    "Toasts: Use sonner for toasts; Sonner component are located in /app/src/components/ui/sonner.tsx",
    "Use 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals."
  ]
}
