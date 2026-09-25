"use client";

import { Bookmark, BookmarkCheck, CalendarCheck, CalendarPlus } from "lucide-react";
import { toast } from "react-toastify";
import { PLAN_LIMIT, usePlan } from "@/src/context/PlanContext";
import { IWorkout } from "@/src/types/workout-type";
const PlanActions = ({ workout }: { workout: IWorkout }) => {
  const { plan, isInPlan, isSaved, addToPlan, saveForLater } = usePlan();

  const inPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);
  const planIsFull = plan.length >= PLAN_LIMIT;

  const handleAddToPlan = () => {
    addToPlan(workout);
    toast.success(`Added "${workout.name}" to today's plan`);
  };

  const handleSaveForLater = () => {
    saveForLater(workout);
    toast.info(`Saved "${workout.name}" for later`);
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={handleAddToPlan}
          disabled={inPlan || planIsFull}
          className="btn btn-primary rounded-lg px-6"
        >
          {inPlan ? <CalendarCheck className="size-4" /> : <CalendarPlus className="size-4" />}
          {inPlan ? "In today's plan" : "Add to today's plan"}
        </button>

        <button
          onClick={handleSaveForLater}
          disabled={saved}
          className="btn btn-outline rounded-lg border-base-300 px-6 text-white hover:border-primary hover:bg-transparent hover:text-primary"
        >
          {saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
          {saved ? "Saved" : "Save for later"}
        </button>
      </div>

      {planIsFull && !inPlan && (
        <p className="text-xs text-muted">
          Today&apos;s plan is full ({PLAN_LIMIT} lifts). Finish one to make room.
        </p>
      )}
    </div>
  );
};

export default PlanActions;
