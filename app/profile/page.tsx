import Banner from "@/components/Banner";
import Image from "next/image";
import bgImage from "../../public/image/aerosooft.webp";
import { image } from "@/public";

export default function Profile() {
  return (
    <div className="bg-white-be">
      <Banner
        title="About Us"
        image={image.aerosoft}
        description="Aerosoft has become our second home
where technology & creativity fused into digital chemistry"
      />
      <div className="h-1/2 w-full bg-white-be">
        <div className="m-auto w-1/2 py-12">
          <div className="text-black-be">
            <div className="mb-8 flex items-center justify-between">
              <div className="font-bold uppercase">aerosoft.</div>
              <Image
                src={image.aerosoftLogo}
                alt={"logo"}
                className="h-auto w-24 object-contain"
              />
            </div>
            <div className="md: text-center md:text-start">
              Aerosoft adalah Perusahaan Agency berbasis teknologi yang dibentuk
              dengan tujuan mempermudah bisnis anda untuk masuk ke dalam dunia
              digital. Kami mempunyai tim professional yang ahli dan sudah
              bertahun tahun terjun dibidangnya. Perusahaan kami bergerak pada
              bidang digital, seperti design ( Social Media, Packaging, UI/UX
              [Website], Logo, Brand, etc ], Company Profile/Building landing
              page / Ecommerce website/Payment gateway etc with professional
              fullstack developer.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
