"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { usePlan } from "@/src/context/PlanContext";
import { IWorkout } from "@/src/types/workout-type";
import Loader from "@/src/components/shared/Loader";
import MetricCard from "@/src/components/my-plan/MetricCard";
import PlanItemCard from "@/src/components/my-plan/PlanItemCard";
import EmptyState from "@/src/components/my-plan/EmptyState";

type Tab = "plan" | "saved";
type SortBy = "duration" | "calories" | "rating";

const sorters: Record<SortBy, (a: IWorkout, b: IWorkout) => number> = {
  duration: (a, b) => a.duration - b.duration,
  calories: (a, b) => b.caloriesBurned - a.caloriesBurned,
  rating: (a, b) => b.rating - a.rating,
};

const MyPlanPage = () => {
  const { plan, saved, isLoaded, removeFromPlan, removeFromSaved } = usePlan();
  const [activeTab, setActiveTab] = useState<Tab>("plan");
  const [sortBy, setSortBy] = useState<SortBy>("duration");


  const totalMinutes = plan.reduce((sum, workout) => sum + workout.duration, 0);
  const totalCalories = plan.reduce((sum, workout) => sum + workout.caloriesBurned, 0);

  
  const list = [...(activeTab === "plan" ? plan : saved)].sort(sorters[sortBy]);

  const handleMarkDone = (workout: IWorkout) => {
    removeFromPlan(workout.id); // frees a slot under the 5-lift cap
    toast.success(`Nice work! "${workout.name}" is done`);
  };

  const handleRemove = (workout: IWorkout) => {
    if (activeTab === "plan") removeFromPlan(workout.id);
    else removeFromSaved(workout.id);
    toast.error(`Removed "${workout.name}"`);
  };

  const tabs = [
    { key: "plan" as const, label: "Today's Plan" },
    { key: "saved" as const, label: "Saved" },
  ];

  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-12 md:px-8">
      <div>
        <h1 className="font-display text-4xl font-bold uppercase text-white">My Plan</h1>
        <p className="mt-1 text-muted">Cap of five lifts for today. Finish them, then load more.</p>
      </div>

      
      <div className="grid divide-y divide-base-300 rounded-2xl border border-base-300 bg-[#13161d] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <MetricCard label="Exercises" value={plan.length} highlight />
        <MetricCard label="Minutes" value={totalMinutes} />
        <MetricCard label="Calories" value={totalCalories} />
      </div>

    
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="tablist" className="tabs tabs-box w-fit border border-base-300 bg-transparent">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              onClick={() => setActiveTab(tab.key)}
              className={`tab text-sm ${activeTab === tab.key ? "tab-active font-bold" : "text-muted"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-3 text-sm text-muted">
          Sort By
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortBy)}
            className="select select-sm w-36 rounded-lg border-base-300 bg-base-200 text-white"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      {/* List */}
      {!isLoaded ? (
        <Loader />
      ) : list.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          {list.map((workout) => (
            <PlanItemCard
              key={workout.id}
              workout={workout}
              onRemove={() => handleRemove(workout)}
              onMarkDone={activeTab === "plan" ? () => handleMarkDone(workout) : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MyPlanPage;
