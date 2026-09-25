import Link from "next/link";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-base-300 px-4 py-20 text-center">
      <h3 className="font-display text-xl font-bold uppercase text-white">Nothing here yet</h3>
      <p className="mt-1 text-sm text-muted">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href="/" className="btn btn-primary btn-sm mt-6 rounded-full px-6">
        Go to workouts
      </Link>
    </div>
  );
};

export default EmptyState;
