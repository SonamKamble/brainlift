# BrainLift

Understand anything — from age 5 to expert.

BrainLift is an AI-powered learning app that explains any topic at multiple levels of understanding. Enter a topic and instantly get explanations tailored for different audiences — from a 5-year-old to a domain expert.

## Demo

https://github.com/user-attachments/assets/f00c6a26-b577-4c93-970b-8cdb146c3a00

## Features

### Multi-Level Explanations
Every topic is explained at 4 levels:
- **Age 5** — Simple, fun language a child can understand
- **Beginner** — Clear intro for someone new to the topic
- **Intermediate** — Deeper dive with technical context
- **Expert** — Professional-level explanation with precise terminology

### Analogies Generator
Generates a relatable real-world analogy to make the topic click instantly.

### Real-Life Examples
Three practical, real-world scenarios showing where the topic applies in everyday life.

### Quiz Me
Three interactive questions with show/hide answers to test your understanding after reading.

### Visual Learning Mode
Auto-generated Mermaid.js flowchart/diagram that visually maps out the topic's key concepts.

### Dark Mode
Full dark mode support via system preference detection.

### Responsive Layout
Two-column grid on desktop, single column on mobile — minimal scrolling.

## Tech Stack

| Layer     | Technology          |
|-----------|---------------------|
| Framework | React 19            |
| Language  | TypeScript          |
| Bundler   | Vite 8              |
| Styling   | TailwindCSS + CSS   |
| AI        | OpenAI GPT-4o       |
| Diagrams  | Mermaid.js          |
| Linting   | ESLint + typescript-eslint |

## Getting Started

### Prerequisites
- Node.js 18+
- An OpenAI API key with available credits

### Installation

```bash
git clone https://github.com/your-username/brainlift.git
cd brainlift
npm install
```

### Configuration

Create a `.env.local` file in the project root:

```
VITE_OPENAI_API_KEY=your-openai-api-key-here
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── SearchBar.tsx         # Topic input + submit button
│   ├── ExplanationCard.tsx   # Level-specific explanation card
│   ├── AnalogyCard.tsx       # Analogy display
│   ├── RealLifeExamples.tsx  # Real-world examples list
│   ├── QuizSection.tsx       # Interactive quiz with reveal
│   ├── MermaidDiagram.tsx    # Mermaid.js diagram renderer
│   ├── LoadingSkeleton.tsx   # Shimmer skeleton loader
│   └── ErrorMessage.tsx      # User-friendly error display
├── services/
│   └── openai.ts             # OpenAI API integration
├── types/
│   └── index.ts              # TypeScript interfaces
├── App.tsx                   # Main app with grid layout
└── main.tsx                  # Entry point
```

## Who Is This For?

- **Students** — Understand new concepts at your level
- **Developers** — Quickly grasp unfamiliar technologies
- **Interview Prep** — Review topics at varying depth
- **Teachers** — Get explanations ready for different audiences

## License

MIT
