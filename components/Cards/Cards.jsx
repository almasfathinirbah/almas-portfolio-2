"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import LanguageSkillBar from "./LanguageSkillBar";

const languages = [
  { language: "English", level: "B1" },
  { language: "Indonesia", level: "Native" },
  { language: "Russian", level: "A1" },
  { language: "Japanese", level: "A1" },
  { language: "Turkish", level: "A1" },
];

const journey = [
  // experience
  {
    type: "experience",
    company: "PT. Telekomunikasi Selular",
    logoUrl: "/assets/journey/experience/pt-telkomsel.png",
    position: "Network IT Helpdesk",
    duration: "Jul 2023 - Present",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl torquent semper interdum efficitur leo torquent primis rhoncus bibendum. Hendrerit dui torquent facilisis pharetra a habitant blandit enim. Ut primis molestie eget nisi laoreet commodo.",
  },
  {
    type: "experience",
    company: "PT. Mitra Integrasi Informatika",
    logoUrl: "/assets/journey/experience/pt-mii.png",
    position: "Application Developer Junior",
    duration: "Oct 2022 - Present",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus senectus dis massa id vestibulum dignissim pulvinar porttitor. Dui neque feugiat netus torquent finibus suspendisse. Justo dapibus ex ac dictum est.",
  },
  {
    type: "experience",
    company: "Magnolia",
    logoUrl: "/assets/journey/experience/pt-abipraya.jpeg",
    position: "Site Engineering at Ciawi Dam Construction Project",
    duration: "Jul 2019 - Sep 2019",
    description:
      "Tested materials for concrete mixes and strength of concrete, assisted the task of the project manager who has the task in technical and material planning which includes providing all shop drawings and made the necessary construction calculations, and reviewed construction plans and financial projections to verify accuracy and feasibility of at Ciawi Dam Construction project.",
  },
  {
    type: "experience",
    company: "PT. Bina Infra Antarnusa",
    logoUrl: "/assets/journey/experience/pt-bia.jpeg",
    position: "Traffic Counting Surveyor",
    duration: "Sep 2017 - Oct 2018",
    description:
      " Inspected traffic control devices to verify functionality, placement and safety compliance, gathered traffic data and known the characteristics of traffic, and known the composition of the vehicle.",
  },
  // education
  {
    type: "education",
    institution: "PT. Irodori Global Indonesia",
    logoUrl: "/assets/journey/education/irodori.jpg",
    qualification: "Japanese Language and SSW Preparation",
    duration: "Feb 2022 - Sep 2022",
    description:
      "Prepared intensive study for Japanese language certificate, namely JLPT N4 or JFT A2 language certificate and certification of work skills in fisheries, specializing in Hotate shellfish, namely SSW certificate",
  },
  {
    type: "education",
    institution: "Digital Talent Scholarship - KOMINFO",
    logoUrl: "/assets/journey/education/digital_talent_scholarship.jpeg",
    qualification: "Progate - Full Stack Developer with Ruby",
    duration: "Mar 2022 - Apr 2022",
    description:
      "Learned the basics of 2 programming languages ​​and 1 framework: HTML & CSS, Ruby, and Ruby on Rails. Ruby is widely used by large companies such as Gojek, crunchbase, and airbnb.",
  },
  {
    type: "education",
    institution: "Digital Talent Scholarship - KOMINFO",
    logoUrl: "/assets/journey/education/digital_talent_scholarship.jpeg",
    qualification: "IBM – Machine Learning",
    duration: "May 2021 - Jul 2021",
    description:
      "Learning Data Analysis, Data Visualization, and Machine Learning.",
  },
  {
    type: "education",
    institution: "PT. Dibimbing Digital Indonesia",
    logoUrl: "/assets/journey/education/dibimbing_id.jpeg",
    qualification: "Data Science Bootcamp",
    duration: "Apr 2021 - Aug 2021",
    description:
      "A 3-months Data Science Bootcamp Fullstack program provides the opportunity to learn about data science intensively with experts.",
  },
  {
    type: "education",
    institution: "Universitas Ibn Khaldun Bogor",
    logoUrl: "/assets/journey/education/uika.jpeg",
    qualification: "Bachelor of Engineering - Major in Civil Engineering",
    duration: "Sep 2016 - Aug 2020",
    description:
      "Activities and societies: Himpunan Mahasiswa Teknik Sipil UIKA Bogor, Asisten Kajian Islam UIKA Bogor, Swimming, Futsal, and Badminton.Activities and societies: Himpunan Mahasiswa Teknik Sipil UIKA Bogor, Asisten Kajian Islam UIKA Bogor, Swimming, Futsal, and Badminton. Bachelor’s Final Project : Study of Passenger Car Speed on Noise Caused (Case Study: Nurul Hidayah Mosque, Salabenda Raya Street, Bogor Regency)",
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
              {/* languages */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="flex gap-2">
                  <Image
                    src="/assets/journey/shape.svg"
                    width={16}
                    height={16}
                    alt=""
                  />
                  <div className="text-lg font-semibold text-primary">
                    Language Skills
                  </div>
                </div>
                <div className="border-b border-border"></div>
                <div className="w-4/5 max-w-lg">
                  {languages.map((lang) => (
                    <LanguageSkillBar
                      key={lang.language}
                      language={lang.language}
                      level={lang.level}
                    />
                  ))}
                </div>
              </div>
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
