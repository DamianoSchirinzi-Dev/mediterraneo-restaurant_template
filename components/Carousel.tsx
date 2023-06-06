import Image from "next/image";

export default function Carousel({ imageArr }) {
  return (
    <div className="xsml:w-full xsm:carousel sm:flex">
      {imageArr.map((imageSrc: string) => {
        return (
          <div className="xsm:w-full xsm:carousel-item sm:w-1/2 lg:w-1/3" key={imageSrc + 1}>
            <Image src={imageSrc} className="w-full" alt="Carousel Item" />
          </div>
        );
      })}
    </div>
  );
}
