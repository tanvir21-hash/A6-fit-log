import Logo from "@/src/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-base-300 bg-[#090a0d]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:px-8 md:text-left">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" className="h-8 w-auto" priority />
          <span className="text-sm font-extrabold uppercase tracking-widest text-white">
            Fitlog
          </span>
        </div>
        <p className="text-xs text-muted">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;