"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";

// components
import RotatingShape from "./RotatingShape";
import Header from "./Header";
import Stats from "./Stats/Stats";

const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent/10 xl:bg-white" id="home">
      {/* Header */}
      <Header />
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h1 mb-2 maw-w-[320px] xl:max-w-none">
            <span className="text-accent">I Build And</span> Design Powerful
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Websites", 2000, "Mobiles", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>
          <p className="lead max-w-[476px] mb-7">
            Delivering powerful, custom website and mobile applications that
            blend aesthetics with best performance.
          </p>
          <ScrollLink to="contact" smooth>
            <button className="btn btn-accent mb-8">Contact Me</button>
          </ScrollLink>
          {/* stats */}
          <Stats />
        </div>
        {/* image */}
        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[558px] h-[642px] bottom-0 z-40 left-[-2vw]">
            <div
              style={{
                width: "100%",
                height: "100vh",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              {/* Embed Sketchfab Model dengan latar belakang transparan */}
              <iframe
                title="3D Model"
                src="https://sketchfab.com/models/76430ca6692b4238a54b5d12e90550c5/embed?background_color=000000&transparent=1&autostart=1&hide_controls=1&hide_logo=1&hide_settings=1&camera_position=0,0,5"
                width="130%"
                height="85%"
                frameBorder="0"
                allow="autoplay; fullscreen; vr"
                allowFullScreen
              />
            </div>
          </div>
          {/* arrow shape */}
          <div
            className="hidden xl:flex absolute top-48 left-[4vw]"
            data-scroll
            data-scroll-speed="0.05"
          >
            <Image
              src="/assets/hero/arrow.svg"
              width={160}
              height={160}
              alt=""
            />
          </div>
          {/* shape 1 */}
          <div
            className="absolute top-[600px] left-[3vw]"
            data-scroll
            data-scroll-speed="0.2"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-1.svg"
                  width={38}
                  height={38}
                  alt=""
                />
              }
              direction="left"
              duration={6}
            />
          </div>
          {/* shape 2 */}
          <div
            className="absolute top-[240px] xl:left-[40vw]"
            data-scroll
            data-scroll-speed="0.1"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-2.svg"
                  width={34}
                  height={34}
                  alt=""
                />
              }
              direction="right"
              duration={5}
            />
          </div>
          {/* shape 3 */}
          <div
            className="absolute top-[480px] xl:left-[50vw]"
            data-scroll
            data-scroll-speed="0.08"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-3.svg"
                  width={36}
                  height={36}
                  alt=""
                />
              }
              direction="left"
              duration={7}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
