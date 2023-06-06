import Image from "next/image";
import { Logo } from "../public/images";

export default function Navigation() {
  return (
    <div>
      <nav className="flex flex-row justify-between gap-10 mx-7 mt-11 2xl:items-center 2xl:flex-col 2xl:pb-4 ">
        <div className="pt-3 space-y-2 2xl:hidden">
          <span className="block h-0.5 w-8 bg-gray-800"></span>
          <span className="block h-0.5 w-8 bg-gray-800"></span>
          <span className="block h-0.5 w-8 bg-gray-800"></span>
        </div>       
        <Image className="2xl:w-1/4 2xl:object-cover" src={Logo} width={200} alt="NavIcon" />
        <ul className="hidden 2xl:flex flex-row gap-16 text-lg">
            <li>Book</li>
            <li>Menu</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
      </nav>
    </div>
  );
}
