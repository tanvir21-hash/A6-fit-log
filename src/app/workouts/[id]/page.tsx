import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkoutById } from "@/src/lib/api";
import TagList from "@/src/components/shared/Taglist";
import PlanActions from "@/src/components/workout-details/PlanActions";

export const generateMetadata = async ({ params }: PageProps<"/workouts/[id]">) => {
  const { id } = await params;
  const workout = await getWorkoutById(id);
  return { title: workout ? `${workout.name} | FitLog` : "Workout not found | FitLog" };
};

const WorkoutDetailsPage = async ({ params }: PageProps<"/workouts/[id]">) => {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  if (!workout) notFound();

  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-8 lg:grid-cols-2 lg:gap-14">
      <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:sticky lg:top-24 lg:self-start">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </figure>

      <div className="space-y-6">
        <div className="space-y-3">
          <h1 className="font-display text-4xl font-bold uppercase text-white">{workout.name}</h1>
          <p className="leading-relaxed text-muted">{workout.description}</p>
          <TagList tags={workout.muscleGroups} uppercase={false} />
        </div>

        <dl className="divide-y divide-base-300 overflow-hidden rounded-2xl border border-base-300 bg-[#13161d]">
          {specs.map((spec) => (
            <div key={spec.label} className="flex justify-between gap-4 px-6 py-4 text-sm">
              <dt className="text-xs font-bold uppercase tracking-wider text-muted">{spec.label}</dt>
              <dd className="text-right font-semibold text-white">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div>
          <h2 className="mb-4 font-extrabold uppercase text-white">Instructions</h2>
          <ol className="space-y-3">
            {workout.instructions.map((step, index) => (
              <li key={index} className="flex gap-3 text-sm text-[#d1d5db]">
                <span className="font-bold text-primary">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <PlanActions workout={workout} />
      </div>
    </section>
  );
};

export default WorkoutDetailsPage;
