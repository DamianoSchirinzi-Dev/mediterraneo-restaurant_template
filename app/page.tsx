import Carousel from "@/components/Carousel";
import TextBlock from "@/components/TextBlock";
import {
  BackgroundOverlay_1,
  BackgroundOverlay_2,
  Food_1,
  Food_2,
  Food_3,
  Food_5,
  Food_6,
  Lifestyle_1,
  Lifestyle_2,
  Lifestyle_3,
  Lifestyle_4,
  Lifestyle_5,
  Lifestyle_6,
} from "../public/images";

export default function Home() {
  const imageSet1 = [Food_5, Food_6, Food_1, Food_2, Food_3]
  const imageSet2 = [Lifestyle_1,Lifestyle_2,Lifestyle_3,Lifestyle_4,Lifestyle_5,Lifestyle_6]

  return (
    <main className="font-poppins text-custom_text_black">     

      <section className="my-11">
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
          hideButton={true}
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
          BG_Overlay={BackgroundOverlay_2}
          hideButton={true}
        />       
      </section>  
    </main>
  );
}
