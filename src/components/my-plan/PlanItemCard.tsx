import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { IWorkout } from "@/src/types/workout-type";
import WorkoutStats from "../shared/WorkoutStats";

interface IPlanItemCardProps {
  workout: IWorkout;
  onRemove: () => void;
  onMarkDone?: () => void; 
}

const PlanItemCard = ({ workout, onRemove, onMarkDone }: IPlanItemCardProps) => {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-200 p-4 sm:flex-row sm:items-center">
      {/* Thumbnail + info */}
      <div className="flex flex-1 items-center gap-4">
        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg sm:w-36">
          <Image src={workout.image} alt={workout.name} fill sizes="144px" className="object-cover" />
        </div>

        <div className="min-w-0 space-y-1">
          <h3 className="font-display text-lg font-bold uppercase text-white">{workout.name}</h3>
          <p className="text-xs font-semibold text-muted">{workout.equipment}</p>
          <WorkoutStats workout={workout} highlightIcons />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
        <Link
          href={`/workouts/${workout.id}`}
          className="btn btn-sm btn-outline border-base-300 text-white hover:border-white hover:bg-transparent"
        >
          View Details
        </Link>

        {onMarkDone && (
          <button onClick={onMarkDone} className="btn btn-sm btn-primary">
            <Check className="size-4" />
            Mark as Done
          </button>
        )}

        <button
          onClick={onRemove}
          aria-label={`Remove ${workout.name}`}
          className="btn btn-sm btn-circle btn-ghost text-muted hover:text-error"
        >
          <X className="size-4" />
        </button>
      </div>
    </article>
  );
};

export default PlanItemCard;
