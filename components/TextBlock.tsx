import Image from "next/image";

export default function TextBlock(props) {
  return (
    <div className="md:flex md:flex-row md:pt-14 lg:justify-between 2xl:py-16">
      <div className="text-center md:text-left md:w-2/3 md:ml-4 2xl:w-2/5 2xl:pl-20 2xl:pt-14">
        <h2 className="text-xl1 mt-16 md:px-12 md:text-xl1 2xl:text-xl3 2xl:w-4/5 2xl:leading-tight">
          {props.headingText}
        </h2>
        <p className="text-base leading-6 mt-5 px-12 md:text-base 2xl:text-lg 2xl:leading-7 2xl:pt-4">
          {props.bodyText}
        </p>
        <button className="text-white font-thin bg-custom_orange mt-10 py-3 px-5 md:ml-11 2xl:text-lg 2xl:px-6 2xl:py-2 2xl:mt-10">
          {props.buttonText}
        </button>
      </div>

      <Image className="xsm:hidden md:inline-block lg:w-2/5 lg:object-cover" src={props.BG_Overlay} alt="BG_Overlay" />
    </div>
  );
}
