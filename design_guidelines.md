{
  "brand": {
    "name": "AI Sales Coach (Investor Landing)",
    "attributes": [
      "futuristic",
      "high-credibility",
      "scalable-enterprise",
      "precision/metrics-driven",
      "cinematic-but-readable"
    ],
    "north_star": "Make investors feel: this is a defensible AI platform (not a feature), with clear ROI, strong retention mechanics, and enterprise readiness."
  },

  "visual_personality": {
    "style_fusion": {
      "layout_principle": "Swiss / editorial hierarchy (clean grids, strong typographic rhythm)",
      "surface_treatment": "Glassmorphism panels + subtle noise + hairline borders",
      "atmosphere": "Sci‑fi HUD: grid patterns, scanlines, holographic edge glows",
      "accent_behavior": "Neon accents used as highlights only (rings, borders, small glows) — never as large gradients"
    },
    "do_not": [
      "Do not use purple/pink saturated gradients across large areas.",
      "Do not make content cards gradient-filled.",
      "Do not center-align the entire page container.",
      "Do not use emoji icons. Use lucide-react or FontAwesome CDN."
    ]
  },

  "typography": {
    "google_fonts_import": "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap');",
    "font_pairing": {
      "headings": "Space Grotesk (500/600/700)",
      "body": "IBM Plex Sans (400/500/600)",
      "numbers_metrics": "Space Grotesk (600/700)"
    },
    "text_size_hierarchy": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl",
      "h2": "text-base md:text-lg",
      "body": "text-sm sm:text-base",
      "small": "text-xs text-muted-foreground"
    },
    "type_rules": [
      "Use tighter tracking for headings: tracking-[-0.02em] on H1/H2.",
      "Use leading-tight for headings, leading-relaxed for body paragraphs.",
      "Investor metrics: use tabular-nums where possible (font-variant-numeric: tabular-nums)."
    ]
  },

  "color_system": {
    "mode": "dark",
    "semantic_tokens_hsl": {
      "background": "222 47% 6%",
      "foreground": "210 40% 98%",
      "card": "222 47% 9%",
      "card-foreground": "210 40% 98%",
      "popover": "222 47% 9%",
      "popover-foreground": "210 40% 98%",

      "primary": "190 95% 52%",
      "primary-foreground": "222 47% 6%",

      "secondary": "222 30% 14%",
      "secondary-foreground": "210 40% 98%",

      "muted": "222 30% 14%",
      "muted-foreground": "215 20% 70%",

      "accent": "196 92% 18%",
      "accent-foreground": "210 40% 98%",

      "border": "215 28% 22%",
      "input": "215 28% 22%",
      "ring": "190 95% 52%",

      "destructive": "0 84% 60%",
      "destructive-foreground": "210 40% 98%"
    },
    "extended_palette": {
      "bg_0": "#070A12",
      "bg_1": "#0B1020",
      "glass": "rgba(255,255,255,0.06)",
      "glass_strong": "rgba(255,255,255,0.10)",
      "hairline": "rgba(255,255,255,0.10)",
      "neon_cyan": "#22D3EE",
      "neon_blue": "#60A5FA",
      "neon_violet": "#A78BFA",
      "signal_green": "#34D399",
      "warning_amber": "#FBBF24"
    },
    "gradient_policy": {
      "allowed": [
        "Hero background only (<=20% viewport coverage)",
        "Decorative overlays (radial glows behind hero art)",
        "Very large CTA background only if subtle"
      ],
      "prohibited": [
        "Purple/pink saturated gradients",
        "Gradients on cards, tables, long text blocks",
        "Gradients on small UI elements (<100px)",
        "Stacked gradients in same viewport"
      ],
      "safe_gradients": {
        "hero_radial": "radial-gradient(60% 60% at 20% 10%, rgba(34,211,238,0.18) 0%, rgba(34,211,238,0.00) 60%), radial-gradient(50% 50% at 80% 20%, rgba(96,165,250,0.14) 0%, rgba(96,165,250,0.00) 55%)",
        "accent_glow": "radial-gradient(closest-side, rgba(34,211,238,0.22), rgba(34,211,238,0))"
      }
    }
  },

  "design_tokens_css": {
    "instructions": "Main agent should update /app/frontend/src/index.css :root tokens to the semantic_tokens_hsl above, and add the following custom properties under :root for futuristic effects.",
    "css": ":root {\n  --radius: 1rem;\n  --glass-bg: rgba(255,255,255,0.06);\n  --glass-bg-strong: rgba(255,255,255,0.10);\n  --glass-border: rgba(255,255,255,0.12);\n  --shadow-elev-1: 0 10px 30px rgba(0,0,0,0.35);\n  --shadow-elev-2: 0 18px 60px rgba(0,0,0,0.45);\n  --glow-cyan: 0 0 0 1px rgba(34,211,238,0.25), 0 0 24px rgba(34,211,238,0.18);\n  --glow-blue: 0 0 0 1px rgba(96,165,250,0.22), 0 0 26px rgba(96,165,250,0.16);\n  --grid-line: rgba(255,255,255,0.06);\n  --scanline: rgba(255,255,255,0.05);\n  --noise-opacity: 0.06;\n  --focus-ring: 0 0 0 3px rgba(34,211,238,0.35);\n}\n"
  },

  "layout": {
    "grid": {
      "container": "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
      "section_spacing": "py-16 sm:py-20 lg:py-24",
      "hero": "min-h-[calc(100vh-80px)]",
      "columns": {
        "hero": "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12",
        "hero_left": "lg:col-span-6",
        "hero_right": "lg:col-span-6",
        "feature_grid": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      }
    },
    "section_order_keep": [
      "Hero",
      "Problem",
      "Solution",
      "Features (tabs)",
      "Business Impact",
      "Investor Value",
      "Traction",
      "Demo Form",
      "Footer"
    ],
    "investor_storytelling": {
      "rule": "Each section must end with a single investor takeaway line (small, muted) + a CTA anchor link.",
      "takeaway_style": "text-xs sm:text-sm text-muted-foreground"
    }
  },

  "surfaces_and_effects": {
    "background_layers": {
      "base": "bg-[#070A12] text-foreground",
      "grid_overlay": "Use a pseudo-element with repeating-linear-gradient to draw a subtle grid (opacity 6%).",
      "scanlines": "Use a pseudo-element with repeating-linear-gradient(180deg, transparent 0 2px, rgba(255,255,255,0.04) 2px 3px) at very low opacity.",
      "noise": "Use a tiny noise PNG/SVG overlay or CSS noise via background-image; keep opacity <= var(--noise-opacity)."
    },
    "glass_card_recipe": {
      "tailwind": "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[var(--shadow-elev-1)]",
      "hover": "hover:border-cyan-300/30 hover:bg-white/7 hover:shadow-[var(--shadow-elev-2)]",
      "focus": "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40 focus-visible:ring-offset-0"
    },
    "holographic_edge": {
      "usage": "Apply to hero art container, key metric cards, and primary CTA only.",
      "tailwind": "ring-1 ring-cyan-300/20 shadow-[var(--glow-cyan)]"
    }
  },

  "components": {
    "component_path": {
      "button": "/app/frontend/src/components/ui/button.jsx",
      "card": "/app/frontend/src/components/ui/card.jsx",
      "tabs": "/app/frontend/src/components/ui/tabs.jsx",
      "navigation_menu": "/app/frontend/src/components/ui/navigation-menu.jsx",
      "sheet_mobile_nav": "/app/frontend/src/components/ui/sheet.jsx",
      "accordion": "/app/frontend/src/components/ui/accordion.jsx",
      "input": "/app/frontend/src/components/ui/input.jsx",
      "textarea": "/app/frontend/src/components/ui/textarea.jsx",
      "form": "/app/frontend/src/components/ui/form.jsx",
      "badge": "/app/frontend/src/components/ui/badge.jsx",
      "separator": "/app/frontend/src/components/ui/separator.jsx",
      "progress": "/app/frontend/src/components/ui/progress.jsx",
      "sonner_toasts": "/app/frontend/src/components/ui/sonner.jsx"
    },
    "button_variants": {
      "primary": {
        "shape": "rounded-xl (8–12px feel)",
        "tailwind": "bg-cyan-300 text-slate-950 hover:bg-cyan-200 shadow-[var(--glow-cyan)]",
        "motion": "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-[background-color,box-shadow,transform] duration-200"
      },
      "secondary_glass": {
        "tailwind": "bg-white/5 text-foreground border border-white/10 hover:bg-white/8 hover:border-cyan-300/25",
        "motion": "transition-[background-color,border-color,box-shadow] duration-200"
      },
      "ghost": {
        "tailwind": "hover:bg-white/5 text-muted-foreground hover:text-foreground",
        "motion": "transition-[background-color,color] duration-200"
      }
    },
    "tabs_features": {
      "pattern": "Use Tabs for Features section: left = tab list (glass), right = tab content (glass card with mini-metrics + bullets).",
      "tab_list_tailwind": "grid grid-cols-2 md:flex md:flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl",
      "tab_trigger_tailwind": "data-[state=active]:bg-white/10 data-[state=active]:shadow-[var(--glow-blue)]"
    },
    "traction": {
      "pattern": "Use Card grid with 3–6 KPI tiles (ARR, pilots, retention, time-to-productivity). Add subtle Progress bars for credibility.",
      "kpi_tile": "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
    }
  },

  "motion_and_microinteractions": {
    "library": {
      "recommended": "framer-motion",
      "install": "npm i framer-motion",
      "usage": "Use for section entrance (fade/slide), hover glow intensification, and tab content transitions. Respect prefers-reduced-motion."
    },
    "principles": [
      "Use motion to guide attention: hero -> problem -> solution -> proof -> form.",
      "Keep durations 180–320ms for UI; 500–900ms for section reveals.",
      "Avoid parallax on text blocks; apply only to decorative glows/hero art.",
      "Never use transition: all. Use transition-[color,background-color,border-color,box-shadow,opacity]"
    ],
    "scroll_effects": {
      "hero_glow_parallax": "On scroll, slightly shift radial glow background (translateY 12–24px) and reduce opacity.",
      "section_reveal": "Use IntersectionObserver or framer-motion whileInView with viewport={{ once: true, amount: 0.2 }}"
    }
  },

  "accessibility": {
    "contrast": "All text on dark background must meet WCAG AA. Use muted-foreground only for secondary text; never for body paragraphs.",
    "focus": "Use visible focus rings (ring-cyan-300/40) on all interactive elements.",
    "reduced_motion": "Honor prefers-reduced-motion: disable scanline animation and heavy parallax.",
    "keyboard": "Tabs, nav, and form must be fully keyboard navigable (shadcn already helps)."
  },

  "testing_attributes": {
    "rule": "All interactive and key informational elements MUST include data-testid in kebab-case.",
    "examples": [
      "data-testid=\"nav-demo-button\"",
      "data-testid=\"hero-primary-cta\"",
      "data-testid=\"features-tabs-trigger-roleplay\"",
      "data-testid=\"traction-kpi-arr\"",
      "data-testid=\"demo-form-email-input\"",
      "data-testid=\"demo-form-submit-button\"",
      "data-testid=\"demo-form-error-text\""
    ]
  },

  "image_urls": {
    "hero_background_optional": [
      {
        "url": "https://images.unsplash.com/photo-1604818659463-34304eab8e70?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
        "description": "Abstract neon light field for hero ambient background (use as very low-opacity overlay, blur + darken).",
        "category": "hero"
      }
    ],
    "section_dividers_or_backplates": [
      {
        "url": "https://images.unsplash.com/photo-1597848007618-54db4e82fe3a?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
        "description": "Futuristic corridor lines; can be used behind Traction section as a masked, low-opacity strip.",
        "category": "traction"
      }
    ],
    "holographic_texture_optional": [
      {
        "url": "https://images.pexels.com/photos/7130463/pexels-photo-7130463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "description": "Soft cyan glow texture for subtle overlay in hero or footer (opacity <= 0.08).",
        "category": "decorative"
      }
    ]
  },

  "section_blueprints": {
    "nav": {
      "behavior": "Fixed top nav with blur + glass; active section indicator as a thin cyan underline that animates.",
      "tailwind": "fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[#070A12]/60 backdrop-blur-xl",
      "microinteraction": "On scroll > 12px: increase bg opacity and add subtle shadow."
    },
    "hero": {
      "layout": "Left: headline + proof bullets + CTAs. Right: holographic product mock card stack (3 cards offset).",
      "headline": "AI Sales Coaching that scales onboarding, performance, and retention.",
      "proof_row": "Add 3 proof chips: '24/7 Coach', 'Role-play + Call Training', 'Org-wide Readiness Analytics'",
      "cta": "Primary: Request Demo. Secondary: View Investor Thesis (scroll to Investor Value).",
      "background": "Use grid + scanlines + two radial glows (cyan + blue). Keep glows behind content only."
    },
    "problem": {
      "pattern": "Two-column: left narrative, right 'cost of delay' metric tiles (time-to-ramp, churn risk, manager bandwidth).",
      "component": "Card + Badge + Separator"
    },
    "solution": {
      "pattern": "Timeline-like steps (Onboard → Practice → Coach → Measure) using Cards with numbered badges.",
      "component": "Card + Badge"
    },
    "features_tabs": {
      "pattern": "Tabs with 5–6 feature categories: Video Library, Live Call Training, Role-play, Goal Sheets, Tour Reminders, Manager Knowledge Base.",
      "component": "Tabs"
    },
    "business_impact": {
      "pattern": "Investor-friendly outcomes grid + mini charts (optional).",
      "optional_chart_lib": {
        "name": "recharts",
        "install": "npm i recharts",
        "use": "Tiny sparkline in KPI cards (no heavy dashboards)."
      }
    },
    "investor_value": {
      "pattern": "3-card thesis: Market pain, Platform moat (trainable AI + KB), Expansion (multi-team, multi-region). Add a 'Why now' callout.",
      "component": "Card + Accordion (for FAQs)"
    },
    "traction": {
      "pattern": "KPI tiles + logo strip (monochrome) + short quotes (glass cards).",
      "component": "Card + Progress"
    },
    "demo_form": {
      "pattern": "Glass form card with strong focus states; inline validation; toast on submit.",
      "component": "Form + Input + Textarea + Button + Sonner"
    },
    "footer": {
      "pattern": "Dark minimal footer with subtle grid overlay; include compliance/trust links.",
      "component": "Separator"
    }
  },

  "implementation_notes_for_main_agent": {
    "instructions_to_main_agent": [
      "Update /app/frontend/src/index.css tokens to dark futuristic palette (semantic_tokens_hsl).",
      "Replace current hero-noise with hero_radial + grid + scanlines (pseudo-elements).",
      "Keep gradients under 20% viewport; use solid dark surfaces for reading areas.",
      "Use shadcn components for all interactive UI (Tabs, Form, Inputs, Sheet).",
      "Add data-testid to every button/link/input/tab trigger and key KPI text.",
      "Add framer-motion for section reveals and hover glow intensification; respect reduced motion.",
      "Avoid transition: all; use transition-[...] utilities.",
      "Ensure nav blur works on Safari (backdrop-filter + -webkit-backdrop-filter)."
    ],
    "js_file_note": "Project uses .js/.jsx. Any new components should be .jsx and follow named exports; pages default export."
  },

  "appendix_general_ui_ux_design_guidelines": "<General UI UX Design Guidelines>\n    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.\n</General UI UX Design Guidelines>"
}
