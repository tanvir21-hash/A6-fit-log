import Link from "next/link";

const NotFound = () => {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <p className="font-display text-8xl font-bold text-primary">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold uppercase text-white">Missed rep</h1>
      <p className="mt-2 text-muted">
        The page you&apos;re looking for doesn&apos;t exist or was moved.
      </p>
      <Link href="/" className="btn btn-primary mt-8 rounded-full px-6">
        Back to workouts
      </Link>
    </section>
  );
};

export default NotFound;
