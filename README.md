# FitLog — Workout Library

FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
Browse twelve workouts covering every major muscle group, open any lift for its specs and step-by-step instructions, then build a focused plan of up to five lifts for the day.

## Technologies Used

| Technology | Purpose |
| --- | --- |
| **Next.js 16 (App Router)** | Pages, routing, server components, loading & 404 pages |
| **React 19 + TypeScript** | UI components with typed data (`IWorkout`) |
| **Tailwind CSS 4** | Utility-first styling and responsive layout |
| **DaisyUI 5** | Components (buttons, badges, tabs, select, loaders) with a custom `fitlog` theme |
| **React Context + `useSyncExternalStore`** | Shared plan/saved state, persisted in `localStorage` |
| **react-toastify** | Toast notifications |
| **lucide-react** | Icons |

## Key Features

1. **Workout library**: 12 workouts from the FitLog API in a responsive 3×4 grid, with a loading animation while data is fetched.
2. **Workout details**: a two-column page with a key specs table, numbered instructions and muscle-group tags.
3. **Today's Plan & Saved**: add lifts to today's plan (capped at 5) or save them for later, with toast feedback and live navbar counters.
4. **My Plan dashboard**: live Exercises / Minutes / Calories metrics, tabs, a **Sort By** dropdown (Duration, Calories, Rating), and **Mark as Done** / **Remove** actions.
5. **Persistent & resilient**: plan data survives page reloads (`localStorage`), unknown routes show a custom 404 page, and every screen works on mobile, tablet and desktop.

## Project Structure

src/
├── app/
│ ├── layout.tsx # fonts, Navbar, Footer, PlanProvider, ToastContainer
│ ├── page.tsx # Home: Banner + Library (Suspense loader)
│ ├── workouts/[id]/ # Workout details page + loading.tsx
│ ├── my-plan/page.tsx # Today's Plan / Saved dashboard
│ └── not-found.tsx # 404 page
├── components/
│ ├── shared/ # Navbar, Footer, Logo, Loader, TagList, WorkoutStats
│ ├── homepage/ # Banner, Library, WorkoutCard
│ ├── workout-details/ # PlanActions (add / save buttons)
│ └── my-plan/ # MetricCard, PlanItemCard, EmptyState
├── context/PlanContext.tsx # plan + saved state and actions (usePlan hook)
├── lib/
│ ├── api.ts # getWorkouts / getWorkoutById
│ └── planStore.ts # localStorage-backed store
└── types/workout-type.ts # IWorkout interface


## API

- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Links

- Live Link: https://a6-fit-log-nine.vercel.app/
- GitHub Repository Link: 