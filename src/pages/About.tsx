import Hero from "../components/sections/Hero";
import MissionSection from "../components/sections/MissionSection";
import ManOnBlue from "../assets/images/man-on-blue.jpg";
import Footer from "../components/sections/Footer";

const About = () => {
  return (
    <>
      <Hero />
      <section className="h-fit bg-white flex flex-col gap-12 xl:gap-14 px-4 lg:px-0 mt-16 lg:mt-36 lg:mx-24 pb-24 lg:mb-16 lg:pb-0">
        <div className="flex flex-col gap-4 text-center">
          <h5 className="text-xl text-primary font-semibold">
            ABOUT THE MINISTRY
          </h5>
          <p className="text-3xl font-trajan">About Prophet I.O Samuel</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-32">
          <p className="text-tertiary text-center lg:text-left leading-7 lg:leading-6">
            Prophet I.O Samuel is a new generational prophet, who is hailed from
            NIBO, Anambra state. Born on the 17th of september 1978, he was the
            first born to survive after several miscarriages from his mother and
            the death of his two elder brothers but God kept him after wordsof
            prophecy came to his mother that she will give birth to a prophet
            who will stop the miscarriages and death of her sons. At the age of
            7, he started prophesying and releasing words of wisdom that
            transformed the lives of many. He dwelth mostly in prayer houses and
            grew in wisdom opening peoples eyes to spiritual mystery. At the age
            of 13 he gave his life to christ under the ministration of
            Evangelist Umar Ukpai. He has followed the footstep of his spiritual
            fathers Senoir Prophet T.B Joshua and Bishop David Oyedepo in love
            and charity affecting the lives of many all over the world. He is
            the general overseer of Shiloh Word Chapel with a vision to win
            souls for eternity
          </p>
          <img
            src={ManOnBlue}
            alt="Photo of Prophet I.O Samuel"
            className="w-[382px] lg:w-[462px] h-[379px] lg:h-[459px] rounded-[42px] border-[3px] border-tertiary shadow-5xl"
          />
        </div>
      </section>
      <MissionSection />
      <Footer />
    </>
  );
};

export default About;
