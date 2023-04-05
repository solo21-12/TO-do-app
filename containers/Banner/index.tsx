import Image from "next/image";
import Link from "next/link";
import { Generator } from "./util/Generator";
import React, { useEffect } from "react";

export const Banner = () => {
  const [imgSrc, setImg] = React.useState<string>("");

  useEffect(() => {
    const img: string = Generator();
    setImg(img);
  }, []);
  return (
    <div className="flex sm:flex-row  flex-col mt-16 justify-between  w-[80%] lg:w-2/3 mx-auto">
      <div className=" md:mx-14 sm:w-1/2">
        <h1 className=" text-3xl md:text-4xl lg:text-6xl mb-5 font-bold">
          Plan your day ahead!
        </h1>
        <p className="text-xs  md:text-sm lg:text-base text-gray-600 md:mb-10 mb-5">
          ipsum dolor sit amet consectetur adipisicing elit. Numquam quas
          maiores in sunt aliquam! Itaque eligendi provident consequatur
          molestiae at aut similique pariatur ipsam mollitia veniam corrupti,
          possimus tenetur vero..
        </p>
        <button className=" bg-black text-white text-xs md:text-sm px-2 py-2 md:px-3 md:py-2 rounded-md hover:text-slate-300 mb-5">
          <Link href="/active">schedule</Link>
        </button>
      </div>
      <div className=" mx-10 hidden sm:block sm:w-1/2 max-h-[300px] w-full object-contain rounded-md overflow-hidden">
        {imgSrc && (
          <Image
            priority
            src={imgSrc}
            width={350}
            height={120}
            alt={""}
            className=" rounded-md shadow-sm shadow-slate-100 object-contain"
          />
        )}
      </div>
    </div>
  );
};
