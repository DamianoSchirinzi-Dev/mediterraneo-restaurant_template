import Carousel from "@/components/Carousel";
import TextBlock from "@/components/TextBlock";
import {
  BackgroundOverlay_1,
  Lifestyle_1,
  Lifestyle_2,
  Lifestyle_3,
  Lifestyle_4,
  Lifestyle_5,
  Lifestyle_6,
} from "../../public/images";

export default function Home() {
  const imageSet2 = [
    Lifestyle_4,
    Lifestyle_6,
    Lifestyle_5,
    Lifestyle_1,
    Lifestyle_3,
    Lifestyle_2,
  ];

  return (
    <div>
      <section className="my-11 font-poppins text-custom_text_black">       
        <Carousel imageArr={imageSet2} />
        <TextBlock
          headingText="About us"
          bodyText="Welcome to Mediterraneo, where passion for exceptional food and genuine hospitality come together to create a memorable dining experience. Nestled in the heart of Manchester, our family-owned restaurant is dedicated to serving Mediterranean-inspired cuisine that delights the senses and nourishes the soul.
                    At Mediterraneo, we believe that food is not just sustenance; it is an art form. Our culinary team, led by our talented chef, draws inspiration from the sun-kissed lands of Greece, Italy, and Spain to create a menu that celebrates the diverse flavors and vibrant ingredients of the Mediterranean region.
                    Every dish at Mediterraneo is a harmonious blend of fresh, locally-sourced ingredients and traditional recipes passed down through generations. We take pride in hand-selecting the finest produce, herbs, and spices to ensure that each plate tells a story of authenticity and exquisite taste."
          buttonText="See the menu"
          BG_Overlay={BackgroundOverlay_1}
          hideButton={false}
        />
      </section>
    </div>
  );
}
