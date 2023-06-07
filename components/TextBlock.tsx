import Image from "next/image";

export default function TextBlock(props : any) {
  return (
    <div className="md:flex md:flex-row md:justify-between md:align-middle md:py-12 2xl:py-16">
      <div className="text-center md:text-left md:px-12 md:ml-8 md:w-3/5 lg:pt-12 2xl:pt-24 2xl:w-4/5 2xl:ml-20">
        <h2 className="text-xl1 mt-16 leading-7 2xl:text-xl3 2xl:leading-tight">
          {props.headingText}
        </h2>
        <p className="text-base leading-6 mt-7 mx-12 sm:mx-24 md:mx-0 lg:w-4/5 2xl:text-lg 2xl:leading-7 2xl:mt-6">
          {props.bodyText}
        </p>
        <button className="text-white font-thin bg-custom_orange mt-10 py-3 px-5 2xl:text-lg 2xl:px-6 2xl:py-2 2xl:mt-10">
          {props.buttonText}
        </button>
      </div>

      <Image
        className="xsm:hidden md:inline-block md:w-4/5 lg:w-3/5 object-cover overflow-hidden"
        src={props.BG_Overlay}
        alt="BG_Overlay"
      />
    </div>
  );
}
