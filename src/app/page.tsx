import { Suspense } from "react";
import Banner from "@/src/components/homepage/Banner";
import Library from "../components/homepage/Library";
import Loader from "../components/shared/Loader";

export const dynamic = "force-dynamic";

const HomePage = () => {
  return (
    <>
      <Banner />

      <section id="library" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-8">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold uppercase text-white">The Library</h2>
          <p className="mt-1 text-sm text-muted">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <Suspense fallback={<Loader />}>
          <Library />
        </Suspense>
      </section>
    </>
  );
};

export default HomePage;
