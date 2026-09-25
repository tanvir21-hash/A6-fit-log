const Loader = ({ text = "Loading workouts…" }: { text?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <span className="loading loading-bars loading-lg text-primary"></span>
      <p className="text-sm text-muted">{text}</p>
    </div>
  );
};

export default Loader;
