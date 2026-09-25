import { Clock, Flame, Star } from "lucide-react";
import { IWorkout } from "@/src/types/workout-type";

interface IWorkoutStatsProps {
  workout: IWorkout;
  highlightIcons?: boolean; 
}

const WorkoutStats = ({ workout, highlightIcons = false }: IWorkoutStatsProps) => {
  const iconClass = `size-3.5 ${highlightIcons ? "text-primary" : "text-muted"}`;

  const stats = [
    { icon: <Clock className={iconClass} />, label: `${workout.duration} min` },
    { icon: <Flame className={iconClass} />, label: `${workout.caloriesBurned} kcal` },
    { icon: <Star className={iconClass} />, label: workout.rating },
  ];

  return (
    <ul className="flex flex-wrap items-center gap-4 text-xs text-[#d1d5db]">
      {stats.map((stat, index) => (
        <li key={index} className="flex items-center gap-1.5">
          {stat.icon}
          {stat.label}
        </li>
      ))}
    </ul>
  );
};

export default WorkoutStats;
