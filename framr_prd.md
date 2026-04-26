# Framr Product Requirements Document (PRD)

## Project Overview
Framr is a premium AI workspace application designed for clarity, reasoning, and deep work. It features an ultra-minimalist, Apple-level aesthetic with a centered, content-first layout.

## Unified Design System (Locked)
Consistency is the highest priority. All screens must share the same layout structure, spacing, typography, and component library.

### Visual Style
- **Minimalism:** High whitespace, strict grid alignment, no decorative clutter.
- **Palette:** 
  - Light: Background #FAFAFA, Text #0A0A0A, Borders #EAEAEA.
  - Dark: Background #0B0B0F, Text #F5F5F5.
  - Accents: Soft blue, violet, mint for active states.
- **Radius System:**
  - Messages: 24–28px
  - Prompt Bar: 32–36px
  - Code Blocks: 16–20px
  - Buttons: 14–18px

## Key Screens to Generate
1. **Landing / Login Page:** Featuring a hero section with a realistic product screenshot mock.
2. **Main Chat (Empty):** Large centered composer.
3. **Main Chat (Active):** Centered conversation flow.
4. **Prompt Composer Focused:** Showing the model selector (Swift, Core, Ultra, Vision) inside the input bar.
5. **Code Rendering Example:** VS Code-style dark panel embedded in chat.
6. **Math Rendering Example:** LaTeX-style inline/centered math without boxes.
7. **Dark Mode Main Chat:** The active chat interface in the dark theme.

## Core Interaction Patterns
- **Prompt Composer:** Centers in empty states, stays bottom-center in active states.
- **Model Selector:** A pill inside the input bar, NOT in the navbar.
- **Sidebar:** Collapsible, chat history only.
- **AI Messages:** Rounded containers, soft contrast.
- **User Messages:** Right-aligned bubbles.
- **Thinking State:** Inline text with a soft pulse/fade, no spinners.