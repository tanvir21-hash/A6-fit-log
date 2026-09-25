import Image from "next/image";
import Link from "next/link";
import { IWorkout } from "@/src/types/workout-type";
import TagList from "../shared/Taglist";
import WorkoutStats from "../shared/WorkoutStats";

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-base-300 bg-[#14171f] transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
    >
      <figure className="relative h-48 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14171f] via-transparent to-transparent" />
      </figure>

      <div className="space-y-3 p-5">
        <TagList tags={workout.muscleGroups} />

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white">
            {workout.name}
          </h3>
          <p className="text-xs text-muted">{workout.equipment}</p>
        </div>

        <div className="flex items-center justify-between border-t border-base-300 pt-3 text-xs text-muted">
          <WorkoutStats workout={workout} />
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;