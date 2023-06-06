import Image from "next/image";
import Carousel from "@/components/Carousel";
import TextBlock from "@/components/TextBlock";
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
  Food_5,
  Food_6,
  Logo,
} from "../public/images";

export default function Home() {
  const imageSet1 = [Food_1, Food_2, Food_3, Food_5, Food_6]
  const imageSet2 = [Chef_1,Chef_2,Chef_3]

  return (
    <main className="font-poppins">     

      <section className="my-10">
        <Carousel imageArr={imageSet1} />

        <TextBlock
          headingText="Welcome to Mediterraneo"
          bodyText=" Where fresh and flavorful Mediterranean-inspired cuisine meets warm
            and inviting hospitality. Our menu is crafted with care, using
            locally-sourced ingredients and inspired by the cuisines of Greece,
            Italy, and Spain. Join us for a meal and experience the true taste
            of the Mediterranean."
          buttonText="See the menu"
          BG_Overlay={BackgroundOverlay_1}
        />
      </section>

      <section className="my-16">
        <Carousel imageArr={imageSet2} />

        <TextBlock
          headingText="At Mediterraneo"
          bodyText="We believe that food should be both delicious and nourishing. That's
          why we prioritize fresh, wholesome ingredients in all of our dishes.
          Our family-owned restaurant is committed to providing a warm and
          welcoming atmosphere where guests can relax and savor every bite."
          buttonText="Book a table."
          BG_Overlay={BackgroundOverlay_1}
        />       
      </section>

      <footer>
        <div className="text-center mb-14">
          <hr className="h-0.5 border-t-0 bg-black opacity-40 my-12 " />
          <ul className="text-sm leading-6 mt-5 px-12 md:text-base 2xl:text-lg 2xl:leading-7 2xl:pt-4">
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
