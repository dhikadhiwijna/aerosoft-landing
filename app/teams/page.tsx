import Banner from "@/components/Banner";
import { image } from "@/public";
import Image from "next/image";

export default function TeamsPage() {
  return (
    <div className="bg-white-be">
      <Banner title="our team" image={image.aerosoft3} />
      <div className="h-1/2 w-full bg-white-be">
        <div className="m-auto w-1/2 py-12">
          <div className="text-center text-2xl font-bold text-black-be">
            MEET T<span className="bg-orange-be text-white-be">HE TEAM</span>
          </div>
          <div className="flex flex-col gap-24 text-center text-black-be md:flex-row md:justify-center">
            <div className="my-8 flex flex-col items-center gap-4">
              <div className="w-64 ">
                <Image
                  src={image.abidBG}
                  alt={"abid"}
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </div>
              <div className="images-start ml-4 flex flex-col">
                <h3 className="text-lg font-bold uppercase">Abid Robbani</h3>
                <h3 className="text-lg">
                  Digital Marketing and Graphic Designer
                </h3>
              </div>
            </div>

            <div className="my-8 flex flex-col items-center gap-4">
              <div className="w-64 ">
                <Image
                  src={image.dhikaBg}
                  alt={"abid"}
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </div>
              <div className="images-start ml-4 flex flex-col">
                <h3 className="text-lg text-lg font-bold uppercase">
                  Muhammad Adhika Adhiwijna
                </h3>
                <h3 className="text-lg">Software Engineer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
