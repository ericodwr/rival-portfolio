import Image from 'next/image';
import TitleProject from './components/TitleProject';

const socialMedia = [
  {
    imageUrl: '/socials/ig.svg',
    link: '',
  },
  {
    imageUrl: '/socials/tiktok.svg',
    link: '',
  },
  {
    imageUrl: '/socials/linkedin.svg',
    link: '',
  },
];

export default function Home() {
  return (
    <>
      <main>
        {/* hero section */}
        <section className="relative">
          <div className="absolute w-full top-4">
            <nav className="flex justify-between items-center text-white px-6 md:px-20">
              <p className="md:text-3xl">Mrivaal</p>
              <button className="bg-white text-black text-sm p-1 md:w-20 md:h-10 rounded-lg">
                Contact
              </button>
            </nav>
          </div>

          <div className="h-screen hero flex flex-col justify-center text-white items-center">
            <div className="text-4xl uppercase md:text-6xl xl:text-8xl flex flex-col justify-center items-center leading-snug font-light">
              <h2>Muhammad</h2>
              <h2>Rivaldiansyah</h2>
            </div>
            <h4 className="text-xl md:text-2xl mt-3 font-extralight">
              Creative Video Editor
            </h4>
          </div>
        </section>
        {/* hero section */}

        {/* About Section */}
        <section className="relative flex flex-col-reverse xl:grid xl:grid-cols-2 xl:gap-x-32 px-8 xl:px-14 my-12">
          <div className="relative flex mt-6 xl:mt-0 flex-col gap-3 xl:gap-9">
            <div className="text-xl xl:text-5xl leading-normal">
              <h1>Hey I'm Mrivaal</h1>
              <h1 className="text-[#FF7F01]">Freelance Video Editor</h1>
            </div>
            <p className="xl:pl-4 text-justify xl:text-2xl leading-9">
              I have been a video editor for 6 years. I have worked on a wide
              variety of video projects and I always set professional standards
              for the videos I manage from file organization, timing, and
              licensing of assets used. I also always research and analyze the
              video in each of my projects. I've also been a director and
              videogrpaher on several video projects, so I've learned and
              understood some basic techniques in the whole video production
              process.
            </p>
            <div className="flex justify-center my-4 xl:my-0 xl:justify-end gap-6">
              {socialMedia.map((s) => {
                return (
                  <div key={s.imageUrl}>
                    <a href={s.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={s.imageUrl}
                        alt={s.imageUrl}
                        width={26}
                        height={26}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <Image
              src={'/about.svg'}
              alt="about"
              width={50}
              height={50}
              className="h-[300px] w-full"
            />
          </div>
        </section>
        {/* About Section */}

        {/* Projects Section */}

        {/* Honda */}
        <section className="my-12">
          <TitleProject
            imageUrl={'/projects/honda.svg'}
            title={`Make Short Content Video Welovehonda 
On instagram & tiktok`}
            subtitle={`I have held various videos from welovehonda, ranging from continental to informative content. here are examples of videos that I have done`}
          />
          <div></div>
        </section>
        {/* Honda */}

        {/* Predator */}
        <section className="my-12">
          <TitleProject
            imageUrl={'/projects/predator.svg'}
            title={`Ads Video with Content Creator 
to Promote Brand Acer Predator`}
            subtitle={`Create endorse content of Acer Predator products for marketing needs for the features of the laptop. and used as an attraction for participants to take part in the competition which was awarded an Acer Predator Helios 16 laptop.`}
          />
          <div></div>
        </section>
        {/* Predator */}

        {/* Video Labs */}
        <section className="my-12">
          <TitleProject
            imageUrl={'/projects/videolabs.svg'}
            title={`Educational video for online class video editor in videolabs`}
            subtitle={`Edit videos of videolabs educational material with good visuals with the aim of making it easier for members to understand the content of the material.`}
          />
          <div></div>
        </section>
        {/* Video Labs */}

        {/* Other Work */}
        <section className="my-12">
          <TitleProject
            title={`Other Work`}
            subtitle={`Various videos such as advertising, short form content, explanation, motion graphics, and short movies are other results of my portfolio`}
          />
          <div></div>
        </section>
        {/* Other Work */}

        {/* Projects Section */}

        {/* Contact */}
        <section className="my-12 flex flex-col justify-center items-center text-white">
          <h1 className="xl:text-8xl text-4xl text-center leading-normal xl:leading-loose xl:px-56 font-light">
            Make your videos to the next quality
          </h1>
          <button className="w-[122px] xl:w-[159px] h-[40px] xl:h-[46px] mt-12 xl:mt-0 rounded-lg bg-white text-black">
            Contact Me
          </button>
        </section>
        {/* Contact */}

        <footer className="flex flex-col xl:flex-row gap-4 justify-between items-center py-4 px-4 xl:px-10">
          <div className="flex gap-2 xl:gap-6">
            {socialMedia.map((s) => {
              return (
                <div key={s.imageUrl}>
                  <a href={s.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={s.imageUrl}
                      alt={s.imageUrl}
                      width={26}
                      height={26}
                    />
                  </a>
                </div>
              );
            })}
          </div>
          <p className="text-sm">©2024 Designed and Developed by ErgoWork</p>
        </footer>
      </main>
    </>
  );
}
