import Banner from "@/components/Banner";
import { image } from "@/public";

export default function ServicePage() {
  return (
    <div className="bg-white-be">
      <Banner
        title="Services"
        image={image.aerosoft2}
        description="Aerosoft combines Customer Experience, Data Analytics, and
                ROI-oriented approaches to help our clients succes through
                digital innovation."
      />
      <div className="h-1/2 w-full bg-white-be">
        <div className="m-auto w-1/2 py-12">
          <div className="text-center text-black-be md:text-start">
            <div className="mb-8">
              <div className="font-bold uppercase">Creative</div>
            </div>
            <div>
              Kami menyediakan jasa design pembuatan logo, mockup serta brand
              guidelines nya. untuk segala jenis social media seperti Instagram
              post dan story, tiktok video, facebook banner dan profile, dan
              twitter kami juga dapat mengeleloa kebutuhannya. Kelebihan yang
              kami miliki adalah design yang fresh dan terkini, yang dibuat
              berdasarkan brief yang di setujui oleh klien.
            </div>

            <ul className="my-5 flex flex-col gap-5 text-center lg:flex-row">
              <li className="rounded-md border border-orange-be p-3 text-orange-be">
                Logo Design
              </li>
              <li className="rounded-md border border-orange-be p-3 text-orange-be">
                Short Video Edit (Tiktok)
              </li>
              <li className="rounded-md border border-orange-be p-3 text-orange-be">
                Illustration Design
              </li>
              <li className="rounded-md border border-orange-be p-3 text-orange-be">
                Mockup Design
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full bg-orange-be py-12">
          <div className="m-auto w-1/2 text-white-be">
            <div className="text-center md:text-start">
              <div className="mb-8">
                <div className="font-bold uppercase">
                  Social Media Management
                </div>
              </div>
              <div>
                Dengan banyaknya chanel social media di dunia digital, maka kami
                menwarkan jasa untuk mengelola social media secara sistemik,
                tertata, dan ter planning semaksimal mungkin, untuk mencapai
                target klien.
              </div>

              <ul className="my-5 flex flex-col gap-5 text-center lg:flex-row">
                <li className="rounded-md border border-white-be p-3 text-white-be">
                  Copywriting
                </li>
                <li className="rounded-md border border-white-be p-3 text-white-be">
                  Performance Review
                </li>
                <li className="rounded-md border border-white-be p-3 text-white-be">
                  ADS
                </li>
                <li className="rounded-md border border-white-be p-3 text-white-be">
                  KOL
                </li>
                <li className="rounded-md border border-white-be p-3 text-white-be">
                  Content Planning
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="m-auto w-1/2 py-12">
          <div className="text-center text-black-be md:text-start">
            <div className="mb-8">
              <div className="font-bold uppercase">Technology</div>
            </div>
            <div>
              Kami menyediakan jasa untuk mengembangkan website, baik itu
              company profile, landing page, maupun ecommerce. Kami juga bisa
              mengoptimalkan website anda agar bisa muncul di halaman pertama
              google. Kelebihan kami adalah kami memiliki tim yang berpengalaman
              dan sudah teruji, serta kami memberikan garansi untuk setiap
              pekerjaan yang kami kerjakan.
            </div>

            <ul className="my-5 flex flex-col gap-5 text-center lg:flex-row">
              <li className="rounded-md border border-orange-be p-3 text-orange-be">
                UI/UX Design
              </li>
              <li className="rounded-md border border-orange-be p-3 text-orange-be">
                Web Development
              </li>
              <li className="rounded-md border border-orange-be p-3 text-orange-be">
                Search Engine Optimization
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
