import ResponsiveCarousel from "@/components/HomeComponent/CommentCarousel";
import ListProjectWidget from "@/components/HomeComponent/ListProjectWidget";
import data from "@/data/home.json";
import { dataProject } from "@/data/project.js";
import { image } from "@/public";
import { faArrowRight, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white-be">
      <div className="wrapper mt-16 flex min-h-screen flex-1 flex-col p-12 md:p-24">
        <h1 className="gradient-text pb-4 text-center text-5xl font-bold uppercase md:text-8xl">
          Powerful Digital Branding Agency
        </h1>

        <p className="text-md mt-12 text-center text-darkgray-be md:mt-24 md:text-xl">
          Provide the best service and without revision restrictions, we are
          ready to help your business grow more with attractive and
          user-friendly designs.
        </p>
      </div>

      <div className="wrapper m-auto flex max-w-md flex-col rounded-3xl bg-black-be p-10 md:max-w-4xl">
        <h3 className="text-2xl md:text-5xl">
          Provide the best service, with ideas that are out of the box
        </h3>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg pt-5 text-sm md:text-lg">
            At Aerosoft Agency, we&apos;re passionate about customer experience
            and team culture. When you choose to join Aerosoft Agency.
            you&apos;re joining a team that genuinely loves what they do
          </p>
          <Link
            href={`/profile`}
            className="flex w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-orange-be px-5 py-3 md:w-auto md:max-w-xs"
          >
            <div>Know More</div>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>

      <div className="wrapper m-10 flex justify-between gap-8">
        <p className="w-full max-w-sm text-2xl font-bold text-black-be">
          We are a creative agency that focuses on digital branding
        </p>

        <p className="w-full max-w-xs text-black-be">
          At Aerosoft Agency, we make sure that every project we work on is a
          success. We are a creative agency that focuses on digital branding.
        </p>
      </div>

      <div className="wrapper flex justify-center gap-8">
        <Image
          src={image.gifBg}
          alt="image_1"
          width={800}
          height={500}
          className="rounded-3xl"
          layout="intrinsic"
          loading="lazy"
          objectFit="cover"
        />
        <div className="hidden lg:block">
          {data.map((item, index) => (
            <div key={index} className="mt-4 flex flex-col gap-2 text-black-be">
              <h3 className="text-2xl">{item.name}</h3>
              <p className="text-md">{item.description}</p>
              <div className="mt-2 h-1 w-full rounded-xl bg-gray-200" />
            </div>
          ))}
        </div>
      </div>

      <div className="wrapper my-8 block lg:hidden">
        {data.map((item, index) => (
          <div key={index} className="mt-4 flex flex-col gap-2 text-black-be">
            <h3 className="text-2xl">{item.name}</h3>
            <div className="text-md">{item.description}</div>
            <div className="mt-2 h-1 w-full rounded-xl bg-gray-200" />
          </div>
        ))}
      </div>

      <div className="wrapper my-8 flex items-center justify-between gap-8">
        <p className="text-3xl text-black-be">
          We offer several service for you
        </p>

        <Link
          href={`/services`}
          className="flex items-center gap-2 rounded-xl bg-orange-be px-5 py-3"
        >
          <div>Explore More</div>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>

      <div className="my-8">
        {dataProject.map((item, index) => (
          <ListProjectWidget
            key={index}
            index={index}
            projectName={item.project_name}
            projectDescription={item.project_description}
            projectImage={item.project_image}
            // onClick={() => console.log("tes")}
          />
        ))}
      </div>

      <div className="flex w-full justify-center bg-black-be py-12">
        <ResponsiveCarousel />
      </div>

      <div className="flex w-full flex-1 justify-center bg-black-be">
        <div className="wrapper m-auto mx-8 rounded-3xl bg-orange-be p-16">
          <div className="flex flex-col items-center gap-5 border-b-2 pb-16 md:flex-row md:items-start md:items-center md:justify-between">
            <div className="max-w-2xl text-center text-5xl md:text-start md:text-7xl">
              Have an Awesome project?
            </div>
            <Link
              href={`/services`}
              className="flex items-center gap-2 rounded-xl border bg-orange-be px-5 py-3"
            >
              <div className="text-2xl">Explore More</div>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="mt-10 flex flex-col justify-between md:flex-row">
            <div className="flex justify-center md:justify-start md:text-start">
              <Image
                src={image.aerosoftLogo}
                alt={"logo"}
                className="h-auto w-48 object-contain"
              />
            </div>

            <div className="flex flex-col items-center gap-2 pt-6 md:items-start md:gap-8 md:pt-0">
              <div>Home</div>
              <div className="flex flex-col items-center gap-1 md:items-start md:gap-4">
                <Link href={`/profile`} className="font-extralight">
                  About Us
                </Link>
                <Link href={`/services`} className="font-extralight">
                  Services
                </Link>
                <Link href={`/teams`} className="font-extralight">
                  Our Teams
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 pt-6 md:items-start md:gap-8 md:pt-0">
              <div>Social Media</div>
              <div className="flex flex-col items-center gap-1 md:items-start md:gap-4">
                <div className="font-extralight">Instagram</div>
                <div className="font-extralight">Linkedin</div>
                <div className="font-extralight">Behance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
