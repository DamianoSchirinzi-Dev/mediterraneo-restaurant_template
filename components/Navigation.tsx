import Image from "next/image";
import { Logo } from "../public/images";

export default function Navigation() {
  return (
    <div>
      <nav className="flex flex-row gap-10 justify-between items-center mx-6 mt-12 md:items-center md:flex-col 2xl:pb-4 ">
        <div className="mt-2 ml-1 xsm:ml-4 sm:ml-8 space-y-2 md:hidden">
          <span className="block h-0.5 w-11 bg-gray-800"></span>
          <span className="block h-0.5 w-11 bg-gray-800"></span>
          <span className="block h-0.5 w-11 bg-gray-800"></span>
        </div>       
        <Image className="w-2/3 sm:w-1/2 lg:w-2/5 object-cover" src={Logo} width={220} alt="NavIcon" />
        <ul className="hidden md:flex flex-row gap-16 text-lg">
            <li>Book</li>
            <li>Menu</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
      </nav>
    </div>
  );
}
