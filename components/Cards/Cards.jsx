"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

const journey = [
  // experience
  {
    type: "experience",
    company: "Odeao Labs",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    position: "Web Developer",
    duration: "Jul 2021 - Present",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl torquent semper interdum efficitur leo torquent primis rhoncus bibendum. Hendrerit dui torquent facilisis pharetra a habitant blandit enim. Ut primis molestie eget nisi laoreet commodo.",
  },
  {
    type: "experience",
    company: "Stack3d Labs",
    logoUrl: "/assets/journey/experience/logo-2.svg",
    position: "Frontend Developer",
    duration: "Mar 2019 - Jun 2021",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus senectus dis massa id vestibulum dignissim pulvinar porttitor. Dui neque feugiat netus torquent finibus suspendisse. Justo dapibus ex ac dictum est.",
  },
  {
    type: "experience",
    company: "Magnolia",
    logoUrl: "/assets/journey/experience/logo-3.svg",
    position: "UI/UX Developer",
    duration: "Jan 2017 - Feb 2019",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis magnis etiam aliquet pellentesque pretium, senectus mi.",
  },
  {
    type: "experience",
    company: "Warspeed Inc",
    logoUrl: "/assets/journey/experience/logo-4.svg",
    position: "Full Stack Developer",
    duration: "Aug 2015 - Dec 2016",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Dignissim nam facilisis iaculis senectus natoque, dignissim dui. Mauris ut sed consectetur tortor senectus lobortis.",
  },
  // education
  {
    type: "education",
    company: "Udemy",
    logoUrl: "/assets/journey/education/logo-1.svg",
    qualification: "Web Development",
    duration: "Jan 2020 - Apr 2020",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan amet ipsum erat dui tristique sem lorem pulvinar. Posuere maximus scelerisque; eu fames tempus tempor. Penatibus nisl tellus; tempus nam inceptos sit pretium finibus sagittis.",
  },
  {
    type: "education",
    company: "CodeAcademy Bootcamp",
    logoUrl: "/assets/journey/education/logo-2.svg",
    qualification: "Full Stack Dev Cart",
    duration: "Jan 2020 - May 2020",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Euismod malesuada dictumst duis; proin dignissim habitasse turpis volutpat.",
  },
  {
    type: "education",
    company: "Design Institute",
    logoUrl: "/assets/journey/education/institution.svg",
    qualification: "UI/UX Diploma",
    duration: "Aug 2018 - Dec 2018",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla cubilia feugiat egestas convallis at. Pellentesque eros suspendisse egestas netus eget mi dapibus.",
  },
  {
    type: "education",
    company: "Business School",
    logoUrl: "/assets/journey/education/institution.svg",
    qualification: "Project Management Cert",
    duration: "Mar 2021 - Jun 2021",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Porta elit augue pretium facilisi ridiculus volutpat enim suspendisse. Ut penatibus habitasse feugiat eget finibus inceptos adipiscing nisl. Amet vitae faucibus eleifend arcu habitant viverra.",
  },
  // skills
  {
    type: "skill",
    name: "HTML",
    icon: <FaHtml5 />,
    duration: "learned in 2015",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Morbi primis sodales sociosqu nisl porttitor interdum mattis luctus aenean. Morbi class ipsum curabitur accumsan risus vestibulum feugiat.",
  },
  {
    type: "skill",
    name: "CSS",
    icon: <FaCss3Alt />,
    duration: "learned in 2015",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus nibh tincidunt eget placerat massa montes. Tempus quis metus himenaeos maecenas neque.",
  },
  {
    type: "skill",
    name: "Javascript",
    icon: <FaJs />,
    duration: "learned in 2016",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis dapibus cubilia ridiculus, nulla vulputate nam.",
  },
  {
    type: "skill",
    name: "React.js",
    icon: <FaReact />,
    duration: "learned in 2018",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quisque enim netus fermentum faucibus, integer mollis curabitur vehicula magnis. Senectus feugiat morbi dis elit feugiat torquent.",
  },
  {
    type: "skill",
    name: "Wordpress",
    icon: <FaWordpress />,
    duration: "learned in 2020",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Neque consequat elit auctor, venenatis mauris curabitur litora. Himenaeos vulputate dictum ligula imperdiet pellentesque consectetur. Aliquam feugiat class in at ante.",
  },
  {
    type: "skill",
    name: "Figma",
    icon: <FaFigma />,
    duration: "learned in 2018",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Enim volutpat mi massa dapibus arcu donec arcu. Ante elementum varius ac libero arcu rhoncus.",
  },
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">My Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "experience")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "education")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "skill")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;
