import Image from "next/image";
import { ArrowDown } from "lucide-react";
import bannerImg from "@/src/assets/banner.png";

const Banner = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 md:px-8">
      <div className="grid items-center gap-8 rounded-2xl border border-base-300 bg-base-200 p-8 md:grid-cols-2 md:p-14">
        <div className="space-y-5 text-center md:text-left">
          <p className="text-xs font-bold tracking-widest text-primary">WORKOUT LIBRARY</p>

          <h1 className="font-display text-4xl font-bold uppercase leading-none text-white sm:text-5xl lg:text-6xl">
            Train with intent. Log every set.
          </h1>

          <p className="mx-auto max-w-md text-muted md:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s
            plan, and watch the week&apos;s work add up.
          </p>
          <a href="#library" className="btn btn-primary rounded-lg px-6 text-xs font-bold">
            <ArrowDown className="size-4" />
            BROWSE WORKOUTS
          </a>
        </div>
        <div className="flex justify-center">
          <Image
            src={bannerImg}
            alt="Athlete training arms on a preacher curl machine"
            priority
            className="h-auto w-64 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
