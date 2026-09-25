"use client";

import { createContext, ReactNode, useContext, useSyncExternalStore } from "react";
import { planStore } from "@/src/lib/planStore";
import { IWorkout } from "@/src/types/workout-type";
export const PLAN_LIMIT = 5;

interface IPlanContext {
  plan: IWorkout[]; // Today's Plan tab
  saved: IWorkout[]; // Saved tab
  isLoaded: boolean; // false during the server render, true once localStorage is read
  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
  addToPlan: (workout: IWorkout) => void;
  saveForLater: (workout: IWorkout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const PlanContext = createContext<IPlanContext | null>(null);

const noopSubscribe = () => () => {};

const PlanProvider = ({ children }: { children: ReactNode }) => {
  const { plan, saved } = useSyncExternalStore(
    planStore.subscribe,
    planStore.getSnapshot,
    planStore.getServerSnapshot,
  );

  const isLoaded = useSyncExternalStore(noopSubscribe, () => true, () => false);

  const isInPlan = (id: number) => plan.some((workout) => workout.id === id);
  const isSaved = (id: number) => saved.some((workout) => workout.id === id);

  const addToPlan = (workout: IWorkout) => {
    if (isInPlan(workout.id) || plan.length >= PLAN_LIMIT) return;
    planStore.update({ plan: [...plan, workout], saved });
  };

  const saveForLater = (workout: IWorkout) => {
    if (isSaved(workout.id)) return;
    planStore.update({ plan, saved: [...saved, workout] });
  };

  const removeFromPlan = (id: number) => {
    planStore.update({ plan: plan.filter((workout) => workout.id !== id), saved });
  };

  const removeFromSaved = (id: number) => {
    planStore.update({ plan, saved: saved.filter((workout) => workout.id !== id) });
  };

  const value = {
    plan,
    saved,
    isLoaded,
    isInPlan,
    isSaved,
    addToPlan,
    saveForLater,
    removeFromPlan,
    removeFromSaved,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

// Small helper hook so components write `usePlan()` instead of `useContext(PlanContext)`
export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) throw new Error("usePlan must be used inside <PlanProvider>");
  return context;
};

export default PlanProvider;
