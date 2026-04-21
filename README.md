# ConsultOpen Dashboard - Frontend Assignment

This project is a responsive frontend dashboard developed for the **Frontend Developer Assignment** at **Harij Softech Pvt. Ltd.**

It accurately translates the provided Figma design into a highly responsive, performant, and interactive Next.js (App Router) application.

##  Tech Stack

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS (for pixel-perfect and responsive design)
- **Iconography:** A strategic mix of `lucide-react` (for standard UI icons) and direct inline `<svg>` exports from Figma (to preserve complex, branded graphics like the progress charts and custom milestones).

##  Key Features & Folder Structure

The codebase was modularized for scalability and reusability:

- `/src/app/` - Next.js App Router containing the main Dashboard (`page.js`) and the Career Roadmap page.
- `/src/components/home/` - Dashboard specific components (e.g., `MoodActivityTrends`, `ConsultOpenAI`, `SkillsProgress`).
- `/src/components/career/` - Career roadmap specific components (e.g., `JourneyProgress`, `SessionList`, `SpecialRecommendation`).
- `/src/components/layout/` - Global shell components (`Sidebar`, `TopBar`).

##  Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
