import { IWorkout } from "../types/workout-type";

const API_BASE_URL = "https://api.abcz.workers.dev/api/fitlog";


export const getWorkouts = async (): Promise<IWorkout[]> => {
  try {
    const response = await fetch(API_BASE_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return [];
  }
};

export const getWorkoutById = async (id: string): Promise<IWorkout | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, { cache: "no-store" });
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error(`Error fetching workout ${id}:`, error);
    return null;
  }
};
