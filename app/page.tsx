import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  BackgroundOverlay_1,
  BackgroundOverlay_2,
  Chef_1,
  Chef_2,
  Chef_3,
  Food_1,
  Food_2,
  Food_3,
  Food_4,
  Food_5,
  Food_6,
  Logo,
} from "../public/images";

export default function Home() {
  return (
    <main className="font-poppins">
      <nav className="flex flex-row justify-between gap-10 mx-7 mt-11">
        <div className="pt-3 space-y-2">
          <span className="block h-0.5 w-8 bg-gray-800"></span>
          <span className="block h-0.5 w-8 bg-gray-800"></span>
          <span className="block h-0.5 w-8 bg-gray-800"></span>
        </div>
        <Image src={Logo} width={200} alt="NavIcon" />
      </nav>

      <section className="my-10">
      <div className="w-full carousel">
          <div className="carousel-item w-full">
            <Image
              src={Food_1}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <Image
              src={Food_2}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <Image
              src={Food_3}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>       

        <div className="text-center">
          <h2 className="text-2xl mt-16 ">Welcome to Mediterraneo</h2>
          <p className="text-sm leading-6 mt-5 px-12">
            Where fresh and flavorful Mediterranean-inspired cuisine meets warm
            and inviting hospitality. Our menu is crafted with care, using
            locally-sourced ingredients and inspired by the cuisines of Greece,
            Italy, and Spain. Join us for a meal and experience the true taste
            of the Mediterranean.
          </p>
          <button className="text-white bg-custom_orange mt-10 py-3 px-4">
            See the menu
          </button>
        </div>
      </section>

      <section className="my-16">    
      <div className="w-full carousel">
          <div className="carousel-item w-full">
            <Image
              src={Chef_1}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <Image
              src={Chef_2}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <Image
              src={Chef_3}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl mt-16 ">At Mediterraneo</h2>
          <p className="text-sm leading-6 mt-5 px-12">
            We believe that food should be both delicious and nourishing. That's
            why we prioritize fresh, wholesome ingredients in all of our dishes.
            Our family-owned restaurant is committed to providing a warm and
            welcoming atmosphere where guests can relax and savor every bite.
          </p>
          <button className="text-white bg-custom_orange mt-10 py-3 px-4">
            Book a table.
          </button>
        </div>
      </section>

      <footer>
        <div className="text-center mb-14">
          <hr className="h-0.5 border-t-0 bg-black opacity-40 my-12 " />
          <ul>
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
    </main>
  );
}
