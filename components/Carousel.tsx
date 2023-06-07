import Image, { StaticImageData } from "next/image";

export default function Carousel({imageArr}: {imageArr: StaticImageData[]}) {
  return (
    <div className="w-full carousel sm:flex">
      {imageArr.map((imageSrc: StaticImageData) => {
        return (
          <div className="w-full carousel-item sm:w-1/2 lg:w-1/3" key={imageSrc.src}>
            <Image src={imageSrc} className="w-auto object-cover" alt="Carousel Item" />
          </div>
        );
      })}
    </div>
  );
}
