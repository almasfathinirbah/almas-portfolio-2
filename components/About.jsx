import Image from "next/image";
import { motion } from "framer-motion";

// components
import AnimatedText from "./AnimatedText";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* image + shape */}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              {/* shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/* image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px] flex items-end justify-center">
                <Image
                  src="/assets/about/img.png"
                  width={500}
                  height={500}
                  quality={100}
                  priority
                  alt=""
                />
              </div>
              {/* rotating shape */}
              <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/assets/about/shape-1.svg"
                    width={160}
                    height={160}
                    alt=""
                  />
                </motion.div>
                <div className="absolute text-center text-white">
                  <div className="text-5xl font-bold leading-none">1+</div>
                  <div className="leading-none text-center">
                    Years of <br /> Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
            <div>
              <AnimatedText text="My Name is Almas" textStyles="h2 mb-2" />
              <p className="text-lg">Fullstack Developer & Designer</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
              I am a passionate Fullstack Developer and Designer with over 2
              years of professional experience in building innovative solutions.
              My expertise spans web and mobile development, artificial
              intelligence, and cybersecurity, where I craft user-focused
              designs and robust systems. I thrive on creating seamless, secure,
              and scalable applications that deliver real-world impact. Let's
              collaborate to bring ideas to life through technology!
            </p>
            {/* info items */}
            <div className="grid xl:grid-cols-2 gap-4 mb-12">
              {/* item 1 */}
              <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                <div className="uppercase font-bold text-primary">
                  <User2 className="text-accent" />
                </div>
                <p>Almas Fathin Irbah</p>
              </div>
              {/* item 2 */}
              <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                <div className="uppercase font-bold text-primary">
                  <GraduationCap className="text-accent" />
                </div>
                <p>Bachelor on Civil Engineering</p>
              </div>
              {/* item 3 */}
              <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                <div className="uppercase font-bold text-primary">
                  <HomeIcon className="text-accent" />
                </div>
                <p>Jakarta, Indonesia</p>
              </div>
              {/* item 2 */}
              <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                <div className="uppercase font-bold text-primary">
                  <Calendar className="text-accent" />
                </div>
                <p>Born on 14 Dec, 1997</p>
              </div>
              {/* item 3 */}
              <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                <div className="uppercase font-bold text-primary">
                  <PhoneCall className="text-accent" />
                </div>
                <p>+62 895 1667 5487</p>
              </div>
              {/* item 4 */}
              <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                <div className="uppercase font-bold text-primary">
                  <MailIcon className="text-accent" />
                </div>
                <p>almasfathinirbah@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
