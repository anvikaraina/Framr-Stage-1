---
name: Framr
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  h1:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
  code:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 800px
  sidebar-width: 260px
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  prompt-padding: 20px 24px
---

## Brand & Style
This design system is built on the philosophy of "Invisible Interface"—where the UI recedes to prioritize the user's cognitive flow and the AI's output. It draws heavily from Apple-level minimalism, characterized by generous whitespace, precise geometric alignment, and a lack of decorative ornamentation. 

The target audience consists of power users, researchers, and creative professionals who require a distraction-free environment. The emotional response is one of calm authority; the interface should feel expensive, deliberate, and highly responsive. By utilizing a mix of ultra-minimalism and subtle glassmorphism, the system creates a sense of depth without relying on heavy shadows or complex textures.

## Colors
The palette is strictly monochromatic at its core to ensure the focus remains on content. The light mode uses a soft off-white (#FAFAFA) to reduce eye strain, while the dark mode utilizes a deep obsidian (#0B0B0F). 

Accent colors—soft blue, violet, and mint—are reserved for functional signaling:
- **Soft Blue**: Active states, primary actions, and AI "thinking" indicators.
- **Violet**: Premium features or model-specific distinctions.
- **Mint**: Success states and completed computations.

Borders are kept at a low-contrast ratio (#EAEAEA in light mode) to define sections without breaking the visual flow.

## Typography
The system utilizes **Inter** for all UI and prose elements to maintain a neutral, systematic appearance. A strong hierarchy is established through weight and scale rather than color. 

- **Headlines**: Use tighter letter spacing and semi-bold weights to create a premium, editorial feel.
- **Body Text**: Optimized for long-form readability with a generous 1.6 line height. 
- **Monospace**: While Inter is used for the UI, code blocks should utilize a high-quality monospace or geometric sans like **Space Grotesk** for technical clarity.
- **LaTeX**: Math rendering should appear inline with the body text, using standard mathematical weights without containing boxes or background tints.

## Layout & Spacing
The layout follows a centered, focus-driven architecture. 
- **Centered Chat Column**: The main interaction area is capped at 800px to maintain optimal line lengths for readability.
- **Collapsible Sidebar**: A 260px sidebar on the left houses history and settings. When collapsed, it should disappear entirely or leave a minimal 64px rail.
- **Prompt Composer**: Positioned at the bottom, floating or anchored, with significant internal padding to accommodate multi-line inputs.
- **Vertical Rhythm**: Spacing follows a strict 8px base grid. Message bubbles are separated by 16px, while distinct topics or sessions are separated by 32px.

## Elevation & Depth
This design system avoids traditional heavy drop shadows. Depth is communicated through:
1.  **Backdrop Blurs**: Floating elements like the model selector pill or the prompt bar use a 20px Gaussian blur (glassmorphism) with a 60% opacity background.
2.  **Tonal Layering**: In Dark Mode, the background is the darkest layer (#0B0B0F), while containers (like code blocks) are slightly lighter (#16161D) to appear "closer" to the user.
3.  **Low-Contrast Outlines**: 1px solid borders serve as the primary divider. Shadows, if used, are reserved for the active prompt bar—a singular, diffused 20% opacity shadow to indicate focus.

## Shapes
The shape language is defined by oversized, friendly radii that contrast with the austere color palette. 
- **Message Bubbles**: Uses a 26px radius to create a "container" feel that is distinct from the background.
- **Prompt Composer**: Features a nearly pill-shaped 34px radius, signaling it as the primary entry point.
- **Interactive Elements**: Buttons use a slightly sharper 16px radius to maintain a professional "tool" aesthetic.
- **Code Blocks**: Rounded at 18px to soften the technical content, ensuring the VS Code-style containers feel integrated into the softer UI.

## Components
- **Prompt Bar**: A large, rounded container. It must include a **Model Selector Pill** on the left or right, styled with a subtle border and a dropdown chevron.
- **Message Bubbles**: 
    - *User*: Outlined or subtly tinted background with text aligned right.
    - *Assistant*: No background (flush with chat column) or a very light gray tint, text aligned left.
- **Code Containers**: Inspired by VS Code. Dark theme by default (even in light mode) with a header bar containing the language label and "Copy" button. Radius must be 18px.
- **LaTeX Rendering**: Rendered via KaTeX or MathJax. No background boxes or borders. The math should feel like a native part of the sentence structure.
- **Buttons**: High-contrast (Primary: #0A0A0A bg with #FAFAFA text). Hover states should involve a slight opacity shift rather than a color change.
- **Pills**: Used for model selection and tags. These are fully rounded (999px) and use the accent colors at 10% opacity with 100% opacity text.