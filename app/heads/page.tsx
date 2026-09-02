"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import App_Navbar from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import "./Heads.css";

// General Secretary Card - Larger, more prominent design
interface GenSecCardProps {
  name: string;
  position: string;
  description?: string;
  imageUrl: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}
const GenSecCard: React.FC<GenSecCardProps> = ({
  name,
  description,
  imageUrl,
  instagramUrl,
  linkedinUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="gensec-card relative overflow-hidden rounded-xl shadow-xl bg-gray-900 border border-amber-900/30"
    >
      <div className="flex flex-col h-full">
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          {/* Cultural pattern overlay – BACKGROUND */}
          <div
            className="absolute inset-0 
              bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] 
              opacity-20 
              z-0 
              mix-blend-overlay"
          ></div>

          {/* MAIN IMAGE – ON TOP OF BLUE EFFECT */}
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="relative z-20 object-cover object-center transition-transform duration-700 hover:scale-110"
            />
          ) : (
            <div className="relative z-20 w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-800 to-amber-600">
              <span className="text-6xl font-bold text-white/80 select-none">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
            </div>
          )}

          {/* Gradient overlay – UNDER the image */}
          <div
            className="absolute inset-0 
              bg-gradient-to-t 
              from-gray-900 
              via-gray-900/70 
              to-transparent 
              z-10"
          ></div>

          {/* Position badge – very top */}
          <div className="absolute top-4 right-4 z-30">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-amber-600/90 text-white rounded-full shadow-lg">
              General Secretary
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-2">{name}</h3>
            <div className="w-16 h-1 bg-amber-500 rounded-full mb-4"></div>

            {description && <p className="text-gray-300 mb-4">{description}</p>}
          </div>

          {/* Social links */}
          <div className="flex space-x-4 mt-auto pt-4 border-t border-amber-900/20">
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-900/30 text-amber-400 hover:bg-amber-700/50 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-900/30 text-amber-400 hover:bg-amber-700/50 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Department Head Card - Simpler, more compact design
interface HeadCardProps {
  name: string;
  position: string;
  description?: string;
  imageUrl: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}

const HeadCard: React.FC<HeadCardProps> = ({
  name,
  position,
  description,
  imageUrl,
  instagramUrl,
  linkedinUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="head-card relative overflow-hidden rounded-lg shadow-md bg-gray-900/80 border border-amber-900/10"
    >
      <div className="flex flex-col h-full">
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          {/* Cultural pattern overlay – BACKGROUND */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20 z-0 mix-blend-overlay"></div>

          {/* MAIN IMAGE – ON TOP OF BLUE BOX */}
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="relative z-20 object-cover object-center transition-transform duration-700 hover:scale-110"
            />
          ) : (
            <div className="relative z-20 w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-800 to-amber-600">
              <span className="text-6xl font-bold text-white/80 select-none">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
            </div>
          )}

          {/* Gradient / blue effect – UNDER the image now */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10"></div>

          {/* Position badge – above everything */}
          <div className="absolute top-4 right-4 z-30">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-amber-600/90 text-white rounded-full shadow-lg">
              {position}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-2">{name}</h3>
            <div className="w-16 h-1 bg-amber-500 rounded-full mb-4"></div>

            {description && <p className="text-gray-300 mb-4">{description}</p>}
          </div>

          {/* Social links */}
          <div className="flex space-x-4 mt-auto pt-4 border-t border-amber-900/20">
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-900/30 text-amber-400 hover:bg-amber-700/50 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-900/30 text-amber-400 hover:bg-amber-700/50 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface DepartmentSectionProps {
  title: string;
  heads: HeadCardProps[];
}

const DepartmentSection: React.FC<DepartmentSectionProps> = ({
  title,
  heads,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="flex items-center mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full mr-4"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-amber-500">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
        {heads.map((head, index) => (
          <HeadCard key={index} {...head} />
        ))}
      </div>
    </motion.div>
  );
};

const Heads = () => {
  // General Secretaries
  const genSecs: GenSecCardProps[] = [
    {
      name: "Udaypratap Singh",
      position: "General Secretary",
      description:
        "The one keeping things moving behind the scenes. Leading with purpose, bringing people together, and making Virsa happen.",
      imageUrl: "/headspic/UDAYPARTAP SINGH.JPG",
      instagramUrl:
        "https://www.instagram.com/udaypartapsingh.brar?igsi=enB0OG45cWRvNWFl",
    },
    {
      name: "Jasmine Kaur",
      position: "General Secretary",
      imageUrl: "",
    },
    {
      name: "Meharpreet Singh",
      position: "General Secretary",
      imageUrl: "",
    },
  ];

  // Department Heads - Sorted alphabetically by first name within each department
  const departments: DepartmentSectionProps[] = [
    {
      title: "Convenors",
      heads: [
        {
          name: "Agam Kooner",
          position: "Convener",
          description:
            "Proudly part of Virsa, bringing ideas, keeping our culture alive, and creating experiences that bring us together.",
          imageUrl: "/headspic/Agam Singh.jpeg",
          instagramUrl: "https://www.instagram.com/agam_kooner18",
        },
        {
          name: "Roopneet Cheema",
          position: "Convener",
          description:
            "A creative, driven, and approachable person who brings great energy to everything they do, is always curious to explore new ideas, and genuinely enjoys learning, collaborating, and taking on new challenges.",
          imageUrl: "/headspic/Roopneet Cheema.jpg",
          instagramUrl: "https://www.instagram.com/cheema._.8",
          linkedinUrl:
            "https://www.linkedin.com/in/roopneet-cheema-614ba9302?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        },
      ],
    },
    {
      title: "Event Coordinator",
      heads: [
        {
          name: "Sehaj Saran",
          position: "Event Coordinator",
          description: "Let's get it done.",
          imageUrl: "/headspic/Sehajpreet Singh Saran.jpg",
          instagramUrl:
            "https://www.instagram.com/sehaj_.saran?igsi=MWhqOG5kYTdlZHZ0ag==",
          linkedinUrl:
            "https://www.linkedin.com/in/sehajpreet-singh-saran-505964386",
        },
      ],
    },
    {
      title: "Content Heads",
      heads: [
        {
          name: "Agam Kooner",
          position: "Content Head",
          description:
            "Proudly part of Virsa, bringing ideas, keeping our culture alive, and creating experiences that bring us together.",
          imageUrl: "/headspic/Agam Singh.jpeg",
          instagramUrl: "https://www.instagram.com/agam_kooner18",
        },
        {
          name: "Yashika Sherawat",
          position: "Content Head",
          description:
            "I'm Yashika Sherawat, a creative and enthusiastic student who enjoys content creation, marketing, and working with people. I like taking initiative, exploring new ideas, and contributing to events and teams.",
          imageUrl: "/headspic/Yashika.jpg",
          instagramUrl: "https://www.instagram.com/_yashika_sherawat_",
          linkedinUrl:
            "https://www.linkedin.com/in/yashika-722899321?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        },
      ],
    },
    {
      title: "Creativity Heads",
      heads: [
        {
          name: "Bhavdeep Singh",
          position: "Creativity Head",
          imageUrl: "",
        },
        {
          name: "Furmaan Kaur",
          position: "Creativity Head",
          imageUrl: "/headspic/furmaan kaur.jpg",
        },
        {
          name: "Gurman Singh",
          position: "Creativity Head",
          imageUrl: "",
        },
        {
          name: "Manav",
          position: "Creativity Head",
          imageUrl: "",
        },
      ],
    },
    {
      title: "Cultural Heads",
      heads: [
        {
          name: "Akshit Mahajan",
          position: "Cultural Head",
          description: "An individual who leads with the belief that when my people rise, I rise with them. A firm believer in God's plan carrying an unwavering hunger for success and find my greatest fulfillment in turning my team's potential into something extraordinary and beneath it what all lies is never settling, always striving to push myself and my team beyond what we thought was possible.",
          imageUrl: "/headspic/Akshit Mahajan.jpg",
          instagramUrl:
            "https://www.instagram.com/akshhit_mahajann?igsh=N2NvM3Q4ZDVra3Ny&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/akshit-mahajan-87361335b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        },
        {
          name: "Bismanjot Singh",
          position: "Cultural Head",
          imageUrl: "/headspic/Bismanjot Singh.jpg",
        },
        {
          name: "Harsirat Kaur",
          position: "Cultural Head",
          imageUrl: "",
        },
        {
          name: "Sharanpreet Kaur",
          position: "Cultural Head",
          description:
            "I serve as the Cultural Head of Virsa, where I lead the planning and execution of cultural events, festivals, and performances that celebrate Punjabi heritage and tradition. Passionate about keeping our roots alive, I work with fellow members to create programs that honor our past while inspiring the present generation.",
          imageUrl: "/headspic/Sharan Preet Kaur.jpg",
        },
      ],
    },
    {
      title: "Design Heads",
      heads: [
        {
          name: "Roopneet Cheema",
          position: "Design Head",
          description:
            "A creative, driven, and approachable person who brings great energy to everything they do, is always curious to explore new ideas, and genuinely enjoys learning, collaborating, and taking on new challenges.",
          imageUrl: "/headspic/Roopneet Cheema.jpg",
          instagramUrl: "https://www.instagram.com/cheema._.8",
          linkedinUrl:
            "https://www.linkedin.com/in/roopneet-cheema-614ba9302?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        },
        {
          name: "Sajneet Kaur Grewal",
          position: "Design Head",
          imageUrl: "",
        },
      ],
    },
    {
      title: "Discipline Heads",
      heads: [
        {
          name: "Abhinav Bindra",
          position: "Discipline Head",
          description: "Calm mind, chaotic humour.",
          imageUrl: "/headspic/Abhinav Bindra.jpg",
          instagramUrl: "https://www.instagram.com/abhi_bindra",
          linkedinUrl: "https://www.linkedin.com/in/abhinav-bindra-55a5163b4",
        },
        {
          name: "Harden Singh",
          position: "Discipline Head",
          description:
            "I'm Harden Singh, student of Chemical Engineering (3rd year), Head of Gurupurab and Discipline.",
          imageUrl: "/headspic/Harden Singh.jpg",
          instagramUrl: "https://www.instagram.com/Harden_singh_",
          linkedinUrl: "https://www.linkedin.com/in/harden-singh-778a98396",
        },
        {
          name: "Japji Kaur",
          position: "Discipline Head",
          description: "Somewhere between a daydream and a destination.",
          imageUrl: "/headspic/Japji Kaur Bains.jpg",
          instagramUrl: "https://www.instagram.com/japji.bains22?igsh=eWVxeG1mcHJubGhj",
          linkedinUrl:
            "https://www.linkedin.com/in/japji-kaur-bains-a25bb1336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Rabaaz Singh",
          position: "Discipline Head",
          imageUrl: "/headspic/Rabaaz Singh.jpeg",
        },
      ],
    },
    {
      title: "Documentation Head",
      heads: [
        {
          name: "Eaimanjot Singh",
          position: "Documentation Head",
          imageUrl: "/headspic/Eaimanjot Singh.jpeg",
        },
      ],
    },
    {
      title: "Finance Head",
      heads: [
        {
          name: "Sehaj Saran",
          position: "Finance Head",
          description: "Let's get it done.",
          imageUrl: "/headspic/Sehajpreet Singh Saran.jpg",
          instagramUrl:
            "https://www.instagram.com/sehaj_.saran?igsi=MWhqOG5kYTdlZHZ0ag==",
          linkedinUrl:
            "https://www.linkedin.com/in/sehajpreet-singh-saran-505964386",
        },
      ],
    },
    {
      title: "Gurpurab Heads",
      heads: [
        {
          name: "Angadjot Singh",
          position: "Gurpurab Head",
          imageUrl: "",
        },
        {
          name: "Ashmeen Kaur",
          position: "Gurpurab Head",
          description:
            "I am Ashmeen Kaur, the Gurpurab Head at VIRSA. I value guidance, shared learning, and thoughtful conversations. I'm always happy to offer support where my experience may be useful, including discussions about spirituality and personal growth.",
          imageUrl: "/headspic/Ashmeen Kaur.jpg",
        },
        {
          name: "Harden Singh",
          position: "Gurpurab Head",
          description:
            "I'm Harden Singh, student of Chemical Engineering (3rd year), Head of Gurupurab and Discipline.",
          imageUrl: "/headspic/Harden Singh.jpg",
          instagramUrl: "https://www.instagram.com/Harden_singh_",
          linkedinUrl: "https://www.linkedin.com/in/harden-singh-778a98396",
        },
      ],
    },
    {
      title: "Hospitality Heads",
      heads: [
        {
          name: "Diya Mahajan",
          position: "Hospitality Head",
          description:
            "Hi, I'm Diya Mahajan, enjoys interacting with people, managing responsibilities, and creating a welcoming experience at events. With strong communication and teamwork skills, I'm excited to contribute to the society as a Publicity & Hospitality Head.",
          imageUrl: "/headspic/Diya Mahajan.jpg",
        },
        {
          name: "Nandini",
          position: "Hospitality Head",
          description: "Nandini this sidee!!",
          imageUrl: "/headspic/Nandini Shekhar.jpg",
        },
      ],
    },
    {
      title: "Logistics Heads",
      heads: [
        {
          name: "Akshit Mahajan",
          position: "Logistics Head",
          description: "A Man Of God Is Unstoppable.",
          imageUrl: "/headspic/Akshit Mahajan.jpg",
          instagramUrl:
            "https://www.instagram.com/akshhit_mahajann?igsh=N2NvM3Q4ZDVra3Ny&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/akshit-mahajan-87361335b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        },
        {
          name: "Taran",
          position: "Logistics Head",
          imageUrl: "",
        },
      ],
    },
    {
      title: "Marketing Heads",
      heads: [
        {
          name: "Bhavdeep Singh",
          position: "Marketing Head",
          imageUrl: "",
        },
        {
          name: "Hargunpreet Singh",
          position: "Marketing Head",
          description:
            "Ambitious enough to chase big things, curious enough to keep learning, and chill enough to enjoy the journey.",
          imageUrl: "/headspic/Hargunpreet S Sujlana.jpg",
          instagramUrl:
            "https://www.instagram.com/hargunpreet._?igsh=MTF3cGU2dHgzYmJyaw%3D%3D&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/hargunpreet-singh-sujlana-5b4793305?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        },
        {
          name: "Yashika Sherawat",
          position: "Marketing Head",
          description:
            "I'm Yashika Sherawat, a creative and enthusiastic student who enjoys content creation, marketing, and working with people. I like taking initiative, exploring new ideas, and contributing to events and teams.",
          imageUrl: "/headspic/Yashika.jpg",
          instagramUrl: "https://www.instagram.com/_yashika_sherawat_",
          linkedinUrl:
            "https://www.linkedin.com/in/yashika-722899321?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        },
      ],
    },
    {
      title: "Media Heads",
      heads: [
        {
          name: "Gurman Singh",
          position: "Media Head",
          imageUrl: "",
        },
        {
          name: "Gurmanjot Singh",
          position: "Media Head",
          imageUrl: "",
        },
      ],
    },
    {
      title: "Publicity Heads",
      heads: [
        {
          name: "Diya Mahajan",
          position: "Publicity Head",
          description:
            "Hi, I'm Diya Mahajan, enjoys interacting with people, managing responsibilities, and creating a welcoming experience at events. With strong communication and teamwork skills, I'm excited to contribute to the society as a Publicity & Hospitality Head.",
          imageUrl: "/headspic/Diya Mahajan.jpg",
        },
        {
          name: "Hargunpreet Singh",
          position: "Publicity Head",
          description:
            "Ambitious enough to chase big things, curious enough to keep learning, and chill enough to enjoy the journey.",
          imageUrl: "/headspic/Hargunpreet S Sujlana.jpg",
          instagramUrl:
            "https://www.instagram.com/hargunpreet._?igsh=MTF3cGU2dHgzYmJyaw%3D%3D&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/hargunpreet-singh-sujlana-5b4793305?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        },
      ],
    },
    {
      title: "Technical Head",
      heads: [
        {
          name: "Paramveer Singh",
          position: "Technical Head",
          description: "Building digital experiences that connect our community and preserve our heritage through technology.",
          imageUrl: "/headspic/Paramveer Singh.jpeg.PNG",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black cultural-pattern-bg">
      <App_Navbar />

      {/* Decorative elements */}
      <div className="decorative-circle decorative-circle-1"></div>
      <div className="decorative-circle decorative-circle-2"></div>

      {/* Hero Section - Similar to Core page */}
      <section className="relative overflow-hidden bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-20 py-20 md:py-28 lg:py-32">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-amber-100/30 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-orange-100/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-red-100/20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-6"
          >
            <span className="text-amber-600 font-medium uppercase tracking-wider text-sm accent-text">
              Our Leadership
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title text-center mb-6 punjabi-accent"
          >
            The Dedicated Team Behind <br /> Virsa Cultural Society
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 body-large text-center max-w-2xl mx-auto mb-12"
          >
            Meet the passionate individuals who work tirelessly to preserve and
            celebrate our rich Punjabi heritage through events, performances,
            and cultural initiatives.
          </motion.p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-16">
            <div className="h-px w-12 bg-amber-300"></div>
            <div className="h-1 w-24 mx-2 rounded-full bg-amber-400"></div>
            <div className="h-px w-12 bg-amber-300"></div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-20">
        {/* General Secretaries Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-10">
            <div className="w-1 h-12 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-amber-500">
              General Secretaries
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {genSecs.map((genSec, index) => (
              <GenSecCard key={index} {...genSec} />
            ))}
          </div>
        </motion.div>

        {/* Section divider */}
        <div className="section-divider"></div>

        {/* Department Sections */}
        {departments.map((department, index) => (
          <DepartmentSection key={index} {...department} />
        ))}
      </div>

      <FooterSection />
    </div>
  );
};

export default Heads;
