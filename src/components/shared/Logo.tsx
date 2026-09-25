import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src={logo} alt="FitLog logo" width={24} height={24} />
      <span className="font-display text-xl font-bold tracking-wide text-white">
        FITLOG
      </span>
    </Link>
  );
};

export default Logo;
