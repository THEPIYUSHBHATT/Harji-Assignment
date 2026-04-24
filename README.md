# ConsultOpen Dashboard - Frontend Assignment

This project is a responsive frontend dashboard developed for the **Frontend Developer Assignment** at **Harij Softech Pvt. Ltd.**

It accurately translates the provided Figma design into a highly responsive, performant, and interactive Next.js (App Router) application.

## Tech Stack

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS (for pixel-perfect and responsive design)
- **Iconography:** A strategic mix of `lucide-react` (for standard UI icons) and direct inline `<svg>` exports from Figma (to preserve complex, branded graphics like the progress charts and custom milestones).

## Key Features & Folder Structure

The codebase was modularized for scalability and reusability:

- `/src/app/` - Next.js App Router containing the main Dashboard (`page.js`) and the Career Roadmap page.
- `/src/components/home/` - Dashboard specific components (e.g., `MoodActivityTrends`, `ConsultOpenAI`, `SkillsProgress`).
- `/src/components/career/` - Career roadmap specific components (e.g., `JourneyProgress`, `SessionList`, `SpecialRecommendation`).
- `/src/components/layout/` - Global shell components (`Sidebar`, `TopBar`).

## Assignment Implementation Notes (State & Structure)

This submission focuses on core functionality.

### State & Data Flow

- **Single source of truth:** A shared roadmap store is implemented via React Context in `src/context/RoadmapContext.js`.
- **Mock API shape:** Tasks and milestones are stored in a structured `DEFAULT_ROADMAP` array that mirrors real API responses.
- **Persistence:** Roadmap state is saved and restored using `localStorage` to keep progress after refresh.
- **Derived state:** Progress percentages and active tasks are computed from the roadmap data rather than hardcoded.

### Features Implemented

- **AI Chat Input:** User messages and mock AI responses are shown. Suggestion chips auto-fill and submit.
- **Task Progress System:** Checklist items are interactive, with completion persisted in `localStorage`.
- **Session Task Flow:** Start → Continue → Completed with locked tasks disabled until prerequisites are done.
- **Progress Calculation:** Progress bar and journey ring update dynamically from completed tasks.

### Key Functional Files

- `src/context/RoadmapContext.js` — Global roadmap state, task flow logic, persistence.
- `src/components/home/ConsultOpenAI.js` — Chat input + mock AI responses.
- `src/components/career/SessionList.js` — Task flow and dynamic progress bar.
- `src/components/career/JourneyProgress.js` — Dynamic circular progress.
- `src/components/home/SkillsProgress.js` — Dynamic skill progress derived from task data.
- `src/components/home/TodaysFocus.js` — Active task display.
- `src/components/home/CareerRoadmapPreview.js` — Dynamic roadmap preview.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
