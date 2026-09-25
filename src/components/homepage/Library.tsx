import { getWorkouts } from "@/src/lib/api";
import WorkoutCard from "./WorkoutCard";

const Library = async () => {
  const workouts = await getWorkouts();

  if (workouts.length === 0) {
    return (
      <p className="py-16 text-center text-muted">
        Couldn&apos;t load workouts right now. Please refresh the page.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default Library;
