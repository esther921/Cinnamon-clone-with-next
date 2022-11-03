import Background from "../components/background";
import Button from "../components/button";
import Small_image_word_fixer from "../components/development-design-sales/small-image-word-fixer";
import Image_fixer from "../components/image-fixer";
import Image_word_fixer from "../components/image-word-fixer";
import Navbar from "../components/navbar";
import Services_fixer from "../components/our-services/services-fixer";
import Footer from "../components/Sections/footer";
import Word_button_grid from "../components/Sections/word-button-grid";
import Who_we_are from "../components/who-we-are";


export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        {/* Navbar and the head-section*/}
        <div className="relative flex flex-col pb-4">
          <Background />
          <div className="fixed z-[1000] w-full">
            <Navbar />
          </div>

          <div className="pl-16 flex flex-col gap-6 py-48">
            <p className="text-[5rem] text-slate-100 font-heavy leading-tight">
              Trick or treat design & development agency.
            </p>
            <p className="text-xl text-gray-300 pr-[35rem]">
              Extend your team with our high performing specialists or hire us
              to shape your product from scratch. Either way, we’ll get your
              product off the ground and build a momentum for your success.
            </p>
          </div>
        </div>

        {/* Image_fixer and _zoomer */}
        <div className="flex flex-col pb-32">
          <Image_fixer
            bg={"bg-emerald-200"}
            src={"/Images/Image-fixer/Mockup_1.webp"}
            text1={"PRODUCT DESIGN"}
            text2={"QUALITY DESIGN"}
            heading={"Corrily: Optimize prices to maximize revenue"}
            pl={"pr-[36rem]"}
            paragraph={
              "Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign."
            }
          />

          <Image_fixer
            bg={"bg-purple-900"}
            src={"/Images/Image-fixer/Fiona_Thumbnail.webp"}
            text1={"PRODUCT DESIGN"}
            text2={"WEB DEVELOPMENT"}
            heading={"Fiona: Engage & Decide"}
            pl={"pr-[50rem]"}
            paragraph={
              "Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."
            }
          />

          <Image_fixer
            bg={"bg-amber-300"}
            src={"/Images/Image-fixer/thumbnail.webp"}
            num={"3"}
            text1={"PRODUCT DESIGN"}
            text2={"WEB DEVELOPMENT"}
            text3={"QUALITY ASSURANCE"}
            heading={
              <>
                <span>{"Ukulele:"}</span>
                <br />
                <span>{" The largest ukulele tabs archive"}</span>{" "}
              </>
            }
            pl={"pr-[5rem]"}
            paragraph={
              "Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website."
            }
          />
        </div>

        {/* Our services Section */}
        <div className="relative">
          <Background />
          <div className="grid grid-cols-5 pt-40 pl-20 pr-12">
            <p className="col-span-2 text-white text-[3.5rem] font-bold">
              Our services
            </p>
            <div className="flex flex-col col-span-3">
              <div className="flex pb-28">
                <Services_fixer
                  mr={"mr-8"}
                  src={"/Images/Services/product-design.webp"}
                  heading={"Product design"}
                  paragraph={
                    "Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that's easy on the eyes."
                  }
                />

                <Services_fixer
                  src={"/Images/Services/development.webp"}
                  heading={"Development"}
                  paragraph={
                    "By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
                  }
                />
              </div>
              <div className="flex">
                <Services_fixer
                  mr={"mr-8"}
                  src={"/Images/Services/quality-assurance.webp"}
                  heading={"Quality assurance"}
                  paragraph={
                    "Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing."
                  }
                />

                <Services_fixer
                  src={"/Images/Services/marketing-and-growth.webp"}
                  heading={"Marketing & growth"}
                  paragraph={
                    "By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people."
                  }
                />
              </div>
              <div className="pl-8 pt-24 pb-36">
                <Button text={"See Our Services"} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Word_button_grid />
        </div>

        <div>
          <Who_we_are />
        </div>

        {/* Word_button_grid */}
       

        
        {/* Image_word_fixer */}

        <div className="pt-40 pb-40">
          <h1 className="pl-16 text-6xl font-bold pb-12">Our offices</h1>
          <div className="flex pl-16 gap-8 overflow-hidden">
            <Image_word_fixer
              src={"/Images/Image-and-word-fixer/zagreb.jpeg"}
              text={"Zagreb"}
              paragraph={"Slavonska avenija 6, 10000, Zagreb, Croatia"}
            />
            <Image_word_fixer
              src={"/Images/Image-and-word-fixer/new-york.jpeg"}
              text={"New York"}
              paragraph={"500 7th Ave, New York, NY 10018, United States"}
            />
            <Image_word_fixer
              src={"/Images/Image-and-word-fixer/belgrade.jpeg"}
              text={"Belgrade"}
              paragraph={"Bulevar vojvode Mišića 37 11000, Belgrade, Serbia"}
            />
          </div>
          <div className="flex gap-16 pl-16 pt-16 pb-8">
            <picture className="hover:-translate-y-2 delay-100">
              <img
                className="w-12"
                src="/Images/Image-and-word-fixer/arrow-left.png"
                alt=""
              />
            </picture>
            <picture className="hover:-translate-y-2 delay-100">
              <img
                className="w-12"
                src="/Images/Image-and-word-fixer/arrow-right.png"
                alt=""
              />
            </picture>
          </div>
        </div>
        {/* Small_image_word_fixer */}
        <div className="flex flex-col gap-4 px-16">
          <p className="text-5xl leading-normal font-bold">
            Stay in the loop <br /> on the tech topics
          </p>
          <div className="grid grid-cols-3 gap-12">
            <Small_image_word_fixer
              src={"/Images/Small-image-word-fixer/Freelance_VS.png"}
              heading1={"SALES"}
              text1={"Matija Bermanec & L..."}
              text2={"2022-10-13"}
              text3={"6min"}
              heading2={"Differences in Hiring an Agency vs.Freelancers 2.0"}
            />
            <Small_image_word_fixer
              src={"/Images/Small-image-word-fixer/Flutter_Template.png"}
              heading1={"DEVELOPMENT"}
              text1={"Samantha Holstead"}
              text2={"2022-10-03"}
              text3={"3min"}
              heading2={"Cinnamon Flutter Template Overview"}
            />
            <Small_image_word_fixer
              src={"/Images/Small-image-word-fixer/Tinder_blog.png"}
              heading1={"DESIGN"}
              text1={"Jan Marin"}
              text2={"2022-10-23"}
              text3={"10min"}
              heading2={"How Tinder Swindled user Experience"}
            />
          </div>
          <div className="flex gap-4 text-blue-600 pt-12 pb-40">
            <picture className="pt-1.5">
              <img src="/Images/right-blue-chevron.svg" alt="" />
            </picture>
            <p className="underline underline-offset-8 decoration-2 text-base font-bold">
              VIEW MORE BLOGS
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="relative">
        <Background />
        <div className="w-full">
          <Footer />
        </div>
        </div>
                 
        {/* Whole Container */}
      </div>
    </>
  );
}
