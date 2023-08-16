"use client";
import Image, { StaticImageData } from "next/image";

interface ListProjectWidgetProps {
  index: number;
  projectName: string;
  projectDescription: string;
  projectImage: StaticImageData;
  onClick?: () => void;
}

export default function ListProjectWidget(
  props: ListProjectWidgetProps,
): JSX.Element {
  return (
    <div
      className={`wrapper my-10 flex flex-col gap-4  ${
        props.index % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <Image
        src={props.projectImage}
        alt="image_1"
        className="h-[200px] rounded-3xl bg-black-be sm:max-w-sm md:h-[350px] md:max-w-2xl"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <div className="flex w-full flex-col justify-center gap-2 rounded-3xl bg-gray-200 p-10 text-black-be md:max-w-sm">
        <h3 className="text-2xl">{props.projectName}</h3>
        <p className="text-md">{props.projectDescription}</p>
      </div>
    </div>
  );
}
