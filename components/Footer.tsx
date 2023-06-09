import Image from "next/image";
import Logo from "@/public/images/MediterraneoLogo.png";

export default function Footer() {
  return (
    <footer>
      <div className="text-center border-t border-gray-700 mb-14">
        <ul className="px-12 mt-12 text-sm leading-6 md:text-base 2xl:text-lg 2xl:leading-7 md:mt-20">
          <li>1 Aytoun Street</li>
          <li>Dallas</li>
          <li>Texas</li>
          <li>PXY 10TB</li>
          <li>+07884601102</li>
          <li>Mediterraneo.admin@gmail.com</li>
        </ul>

        <Image
          src={Logo}
          width={240}
          className="pt-12 mx-auto"
          alt="footer_logo"
        />
      </div>
    </footer>
  );
}
