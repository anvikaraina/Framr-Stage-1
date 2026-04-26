export type ChatMode = 'general' | 'coding' | 'math';

export type ChatRole = 'user' | 'assistant';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  kind?: 'text' | 'code';
  language?: string;
}

export interface ModeConfig {
  mode: ChatMode;
  title: string;
  subtitle: string;
  emptyHints: string[];
  quickPrompts: string[];
  initialMessages: ChatMessage[];
  mockResponses: ChatMessage[];
}

export const modeOrder: ChatMode[] = ['general', 'coding', 'math'];

export const modeConfig: Record<ChatMode, ModeConfig> = {
  general: {
    mode: 'general',
    title: 'General Chat',
    subtitle: 'Brainstorm ideas, draft writing, and everyday help.',
    emptyHints: [
      'Summarize my week into a short reflection.',
      'Give me three ideas for a personal portfolio headline.',
      'Help me plan a 30-minute deep-work session.',
    ],
    quickPrompts: [
      'How can I improve my daily focus?',
      'Draft a welcome message for new teammates.',
      'Brainstorm product launch themes.',
    ],
    initialMessages: [
      {
        id: 'g-1',
        role: 'assistant',
        content:
          'Welcome — I\'m your general assistant. Ask me anything and I\'ll respond with concise, practical suggestions.',
      },
    ],
    mockResponses: [
      {
        id: 'gr-1',
        role: 'assistant',
        content:
          'Great prompt. I\'d approach it in 3 parts: clarify your goal, choose a simple first step, and set a clear success metric for today.',
      },
      {
        id: 'gr-2',
        role: 'assistant',
        content:
          'Here\'s a polished version: “Hi team — excited to collaborate with you all. I\'ll share progress updates weekly and keep communication transparent.”',
      },
      {
        id: 'gr-3',
        role: 'assistant',
        content:
          'Try this framework: 10 min context, 15 min execution, 5 min reflection. Keeping each block short tends to improve consistency.',
      },
    ],
  },
  coding: {
    mode: 'coding',
    title: 'Coding Chat',
    subtitle: 'Discuss architecture, debug ideas, and generate code snippets.',
    emptyHints: [
      'Show a reusable TypeScript debounce helper.',
      'Write a React hook for keyboard shortcuts.',
      'Convert this JavaScript function to Python.',
    ],
    quickPrompts: [
      'Create a TS utility for class names.',
      'Explain async/await with an example.',
      'Show Python list comprehension patterns.',
    ],
    initialMessages: [
      {
        id: 'c-1',
        role: 'assistant',
        content: 'Coding mode enabled. I can return TS/JS/Python mock snippets.',
      },
    ],
    mockResponses: [
      {
        id: 'cr-1',
        role: 'assistant',
        kind: 'code',
        language: 'ts',
        content: `export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay = 250
) {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}`,
      },
      {
        id: 'cr-2',
        role: 'assistant',
        kind: 'code',
        language: 'js',
        content: `async function fetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  if (!response.ok) throw new Error('Failed to fetch user');
  return response.json();
}`,
      },
      {
        id: 'cr-3',
        role: 'assistant',
        kind: 'code',
        language: 'python',
        content: `numbers = [1, 2, 3, 4, 5]
squares = [n * n for n in numbers if n % 2 == 1]
print(squares)  # [1, 9, 25]`,
      },
    ],
  },
  math: {
    mode: 'math',
    title: 'Math Chat',
    subtitle: 'See structured, step-by-step mathematical explanations.',
    emptyHints: [
      'Explain how to solve a linear equation.',
      'Walk through factoring a quadratic expression.',
      'Show a sample derivative explanation step by step.',
    ],
    quickPrompts: [
      'Explain solving 2x + 5 = 17.',
      'How does factoring work conceptually?',
      'Outline derivative steps for x².',
    ],
    initialMessages: [
      {
        id: 'm-1',
        role: 'assistant',
        content:
          'Math mode is active. I\'ll provide mock step-by-step reasoning format for learning.',
      },
    ],
    mockResponses: [
      {
        id: 'mr-1',
        role: 'assistant',
        content:
          'Step 1: Isolate the variable term.\nStep 2: Move constants to the opposite side.\nStep 3: Divide by the coefficient.\nStep 4: Verify by substitution.',
      },
      {
        id: 'mr-2',
        role: 'assistant',
        content:
          'For factoring quadratics, look for two numbers that multiply to the constant term and add to the middle coefficient, then split and group.',
      },
      {
        id: 'mr-3',
        role: 'assistant',
        content:
          'Derivative walkthrough format:\n1) Identify power terms.\n2) Apply power rule to each term.\n3) Simplify coefficients.\n4) Check edge cases and constants.',
      },
    ],
  },
};

export const isChatMode = (value: string): value is ChatMode =>
  value === 'general' || value === 'coding' || value === 'math';
