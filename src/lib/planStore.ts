import { IWorkout } from "@/src/types/workout-type";
export interface IPlanData {
  plan: IWorkout[];
  saved: IWorkout[];
}

const STORAGE_KEY = "fitlog-plan";
const EMPTY: IPlanData = { plan: [], saved: [] };

let cache: IPlanData | null = null;
const listeners = new Set<() => void>();

const readFromStorage = (): IPlanData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? { ...EMPTY, ...JSON.parse(stored) } : EMPTY;
  } catch {
    return EMPTY; 
  }
};

export const planStore = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },


  getSnapshot(): IPlanData {
    if (!cache) cache = readFromStorage();
    return cache;
  },

  getServerSnapshot(): IPlanData {
    return EMPTY;
  },

  update(next: IPlanData) {
    cache = next;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
    }
    listeners.forEach((listener) => listener());
  },
};
