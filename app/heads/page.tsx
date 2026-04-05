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
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="relative z-20 object-cover object-center transition-transform duration-700 hover:scale-110"
          />

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
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="relative z-20 object-cover object-center transition-transform duration-700 hover:scale-110"
          />

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
      name: "Harmandeep Singh",
      position: "General Secretary",
      description:
        "Leading our cultural initiatives with passion and dedication to preserve and promote Punjabi heritage through innovative events and programs.",
      imageUrl: "/headspic/harmandeep.jpg",
      instagramUrl: "https://www.instagram.com/harmandhiman55_",
      linkedinUrl:
        "https://www.linkedin.com/in/harmandeep-singh-84a8b5222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      name: "Anureet Kaur",
      position: "General Secretary",
      description:
        "Coordinating events and managing our team operations with a focus on authentic cultural representation and community engagement.",
      imageUrl: "/headspic/anureet.jpeg",
      instagramUrl:
        "https://www.instagram.com/anureeet.cheema?igsh=YXZ5cWNlb2hlcDB0",
      linkedinUrl: "https://www.linkedin.com/in/anureet-cheema-87ab43232/",
    },
    {
      name: "Sukhman",
      position: "General Secretary",
      description:
        "Preserving and promoting authentic Punjabi traditions while developing strategic partnerships to expand our cultural impact.",
      imageUrl: "/headspic/sukhman.jpg",
      instagramUrl:
        "https://www.instagram.com/sukhmxnnn_?igsh=eDJmYzM4cXFpcWFq",
      linkedinUrl: "https://www.linkedin.com/in/sukhman-singh-323231253",
    },
  ];

  // Department Heads
  const departments: DepartmentSectionProps[] = [
    {
      title: "Convenors",
      heads: [
        {
          name: "Uday Brar",
          position: "Convenor",
          imageUrl: "https://imagizer.imageshack.com/img923/7152/vJ7dto.jpg",
          instagramUrl:
            "https://www.linkedin.com/in/udaypartap-singh-586559304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          linkedinUrl:
            "https://www.instagram.com/udaypartap.singh.brar?igsh=enB0OG45cWRvNWFl",
        },
        {
          name: "Jasmine Kaur",
          position: "Convevor",
          imageUrl: "https://imagizer.imageshack.com/img922/8199/JxqZpN.jpg",
          instagramUrl:
            "https://www.instagram.com/jasmine_28kaur?igsh=eTZqeXh0dmF0NGl5&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/jasmine-kaur-765051297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
      ],
    },
    {
      title: "Content Heads",
      heads: [
        {
          name: "Japneet",
          position: "Content Head",
          imageUrl: "/headspic/japneethead.JPG",
          instagramUrl:
            "https://www.instagram.com/japneetsoni_?igsh=YWhmdzBhajBha3o5&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/japneet-kaur-8a89a825a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "Amitoj Singh",
          position: "Content Head",
          imageUrl: "https://imagizer.imageshack.com/img922/9017/NSlPm5.png",
          instagramUrl:
            "https://www.instagram.com/amitojammy04?igsh=MWJjcm9lZGl1eGN0aA%3D%3D&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/amitoj-singh-65424b287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
      ],
    },
    {
      title: "Creativity Heads",
      heads: [
        {
          name: "Uday",
          position: "Creativity Head",
          imageUrl: "https://imagizer.imageshack.com/img923/7152/vJ7dto.jpg",
          instagramUrl:
            "https://www.instagram.com/udaypartap.singh.brar?igsh=enB0OG45cWRvNWFl",
          linkedinUrl:
            "https://www.linkedin.com/in/udaypartap-singh-586559304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Sahibnoor Kaur",
          position: "Creativity Head",
          imageUrl: "/headspic/sahibnoor.jpg",
          instagramUrl:
            "https://www.instagram.com/sahibnoor_.kahlon?igsh=aWkxZ3JuNjc4ODdr",
          linkedinUrl:
            "https://www.linkedin.com/in/sahibnoor-kaur-388943327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Mankeerat Singh",
          position: "Creativity Head",
          imageUrl: "/headspic/mankeerat.jpeg",
          instagramUrl:
            "https://www.instagram.com/mankeerat_1007?igsh=bHZtYWsxdTRwajBs&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/mankeerat-singh-850915268?trk=contact-info",
        },
        {
          name: "Palak Garg",
          position: "Creativity Head",
          imageUrl: "/headspic/palak.jpeg",
          instagramUrl:
            "https://www.instagram.com/_.palakkx._?igsh=MXdwemJuMG11M2czbQ==",
          linkedinUrl:
            "https://www.linkedin.com/in/palak-garg-bb149b28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
      ],
    },
    {
      title: "Cultural Heads",
      heads: [
        {
          name: "Dapinder",
          position: "Cultural Head",
          imageUrl: "https://imagizer.imageshack.com/img923/6814/4zjPzl.jpg",
          instagramUrl:
            "https://www.instagram.com/dapindersinghbadesha?igsh=MWMwZnhzb2dsdnZxbg%3D%3D&utm_source=qr",
          linkedinUrl: "https://linkedin.com",
        },
        {
          name: "Harnoor Kaur",
          position: "Cultural Head",
          imageUrl: "/headspic/harnoor.jpg",
          instagramUrl:
            "https://www.instagram.com/harnoor7024?igsh=bG9uc3d3MnBzc2Zn&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/harnoorkaur2004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "Maheep",
          position: "Cultural Head",
          imageUrl: "/headspic/maheep.jpg",
          instagramUrl:
            "https://www.instagram.com/_mxdhnju_?igsh=YzE2cmd2eHUyM3c0&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/maheep-singh-dhanju-b5434b28b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        },

        {
          name: "Arsh",
          position: "Cultural Head",
          imageUrl: "/headspic/arshdeep.jpg",
          instagramUrl:
            "https://www.instagram.com/anureeet.cheema?igsh=YXZ5cWNlb2hlcDB0",
          linkedinUrl: "https://www.linkedin.com/in/anureet-cheema-87ab43232/",
        },
      ],
    },
    {
      title: "Design Heads",
      heads: [
        {
          name: "Prakhar",
          position: "Design Head",
          imageUrl: "/headspic/prakhar.jpg",
          instagramUrl: "https://www.instagram.com/prakhar_0320/",
          linkedinUrl: "https://www.linkedin.com/in/prakhar-saxena-554405295/",
        },
        {
          name: "Jahanvi",
          position: "Design Head",
          imageUrl: "/headspic/jahanvi.jpg",
          instagramUrl:
            "https://www.instagram.com/jahanvisinghal_15?igsh=MXh2dTRuM3RkNndlbQ==",
          linkedinUrl:
            "https://www.linkedin.com/in/jahanvi-singhal-33981b29a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "Balkirat",
          position: "Design Head",
          imageUrl: "https://imagizer.imageshack.com/img922/7052/KrJdru.jpg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "http://linkedin.com",
        },
      ],
    },

    {
      title: "Discipline Heads",
      heads: [
        {
          name: "Pahul",
          position: "Discipline Head",
          imageUrl: "/headspic/pahul.jpeg",
          instagramUrl:
            "https://www.instagram.com/pahuldeepbajwa?igsh=NjR6bGY1bzVlNmY1&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/pahul-bajwa-313524304?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        },
        {
          name: "Hridyum",
          position: "Discipline Head",
          imageUrl: "https://imagizer.imageshack.com/img924/2394/gXGHJC.jpg",
          instagramUrl:
            "https://www.instagram.com/hridyum_?igsh=c2psYXFoZDI1dzZi",
          linkedinUrl:
            "https://www.linkedin.com/in/hridyum-bindal-772383312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Manjot",
          position: "Discipline Head",
          imageUrl: "https://imagizer.imageshack.com/img923/8100/I1LKGd.jpg",
          instagramUrl:
            "https://www.instagram.com/abhaijeetsingh?igsh=MXVxcGEyOGxmanprbg==",
          linkedinUrl: "http://www.linkedin.com/in/abhaijeet-singh-003030287",
        },
      ],
    },

    {
      title: "Documentation and Finance Heads",
      heads: [
        {
          name: "Meharpreet Singh",
          position: "Documentation and Finance Head",
          imageUrl: "/headspic/mehar.jpeg",
          instagramUrl:
            "https://www.instagram.com/_mehar96?igsh=NzV3OGU3OXlxN3Bu",
          linkedinUrl:
            "https://www.linkedin.com/in/meharpreet-singh-594109244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "Jasmine Kaur",
          position: "Documentation and Finance Head",
          imageUrl: "https://imagizer.imageshack.com/img922/8199/JxqZpN.jpg",
          instagramUrl:
            "https://www.instagram.com/jasmine_28kaur?igsh=eTZqeXh0dmF0NGl5&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/jasmine-kaur-765051297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
      ],
    },
    {
      title: "Gurpurab Heads",
      heads: [
        {
          name: "Dhanveer",
          position: "Gurpurab Head",
          imageUrl: "/headspic/dhanveer.jpg",
          instagramUrl:
            "https://www.instagram.com/dhaliwal_____0018?igsh=ejVmN2xucmZuYnF5",
          linkedinUrl: "https://linkedin.com",
        },
        {
          name: "Harnoor Kaur",
          position: "Gurpurab Head",
          imageUrl: "/headspic/harnoor.jpg",
          instagramUrl:
            "https://www.instagram.com/harnoor7024?igsh=bG9uc3d3MnBzc2Zn&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/harnoorkaur2004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "Harnoor Singh Khalsa",
          position: "Gurpurab Head",
          imageUrl: "/headspic/harnoorkhalsa.jpeg",
          instagramUrl:
            "https://www.instagram.com/singh_manmeet_official?igsh=c2l4djUzMXYwaXlz",
          linkedinUrl: "https://www.linkedin.com/in/manmeet-singh-56b544263",
        },
      ],
    },
    {
      title: "Hospitality Heads",
      heads: [
        {
          name: "Arshia",
          position: "Hospitality Head",
          imageUrl: "https://imagizer.imageshack.com/img924/8975/5r6xTG.jpg",
          instagramUrl:
            "https://www.instagram.com/arshia._08?igsh=ZjllbTBua2QzcGo3",
          linkedinUrl:
            "https://www.linkedin.com/in/arshia-5a56aa295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Gurkirat",
          position: "Hospitality Head",
          imageUrl: "https://imagizer.imageshack.com/img923/4139/gtk7De.jpg",
          instagramUrl:
            "https://www.instagram.com/sxndhugurkirat?igsh=MWNrcGt1YWxhNjdmMw==",
          linkedinUrl:
            "https://www.linkedin.com/in/gurkirat-singh-60639a2a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Harnoor Kaur",
          position: "Hospitality Head",
          imageUrl: "/headspic/harnoork.jpeg",
          instagramUrl:
            "https://www.instagram.com/harnoor7024?igsh=bG9uc3d3MnBzc2Zn&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/harnoorkaur2004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
      ],
    },
    {
      title: "Logistics Heads",
      heads: [
        {
          name: "Ishaanpreet Singh",
          position: "Logistics Head",
          imageUrl: "/headspic/ishaanpreet.jpg",
          instagramUrl:
            "https://www.instagram.com/_ishaanpreet_?igsh=MTZybng0b2I5cDloMA%3D%3D&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/ishanpreet-singh-4ab0aa26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "Tarandeep Singh",
          position: "Logistics Head",
          imageUrl: "/headspic/taranpreet.jpg",
          instagramUrl: "https://www.instagram.com/_deepkapoor/",
          linkedinUrl: "https://www.linkedin.com/in/tarandeep-singh-ab4067288/",
        },
      ],
    },
    {
      title: "Marketing Heads",
      heads: [
        {
          name: "Dilpreet",
          position: "Marketing Head",
          imageUrl: "/headspic/dilpreet.jpeg",
          instagramUrl:
            "https://www.instagram.com/dilpreetrattol_?igsh=MWdwdmJpNW12MHNiYg%3D%3D&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/dilpreetrattol?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "Vinay",
          position: "Marketing Head",
          imageUrl: "/headspic/vinayy.jpeg",
          instagramUrl:
            "https://www.instagram.com/vinaybrar_?igsh=MTVsZjA4OGswcGtlcQ==",
          linkedinUrl:
            "https://www.linkedin.com/in/vinaypartap-singh-brar-4717b1275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Jugadh Singh",
          position: "Marketing Head",
          imageUrl: "/headspic/jugadh.jpeg",
          instagramUrl: "https://www.instagram.com/jugadh_.singh/",
          linkedinUrl: "https://www.linkedin.com/in/jugadh-singh-a26236357/",
        },
        {
          name: "Aditya",
          position: "Marketing Head",
          imageUrl: "/headspic/aditya.jpg",
          instagramUrl:
            "https://www.instagram.com/adityaa.2.7?igsh=MWI5aHZpY3BwZmVoMg%3D%3D&utm_source=qr",
          linkedinUrl:
            "https://www.linkedin.com/in/aditya-sharma-658a69292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
      ],
    },
    {
      title: "Media Heads",
      heads: [
        {
          name: "Shehbaaz",
          position: "Media Head",
          imageUrl: "https://imagizer.imageshack.com/img922/4065/a5RWhe.jpg",
          instagramUrl:
            "https://www.instagram.com/sidhushehbaz?igsh=ZXFhemY2dzdpaG5p&utm_source=qr",
          linkedinUrl: "https://www.linkedin.com/in/shehbaz-ssidhu/",
        },
        {
          name: "Nityam",
          position: "Media Head",
          imageUrl: "https://imagizer.imageshack.com/img924/1775/LOldyJ.jpg",
          instagramUrl: "https://instagram.com",
          linkedinUrl:
            "https://www.linkedin.com/in/nityam-%E2%80%8E-%E2%80%8E-1b01ab267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
      ],
    },
    {
      title: "Publicity Heads",
      heads: [
        {
          name: "Meharpreet Singh",
          position: "Publicity Head",
          imageUrl: "/headspic/mehar.jpeg",
          instagramUrl:
            "https://www.instagram.com/_mehar96?igsh=NzV3OGU3OXlxN3Bu",
          linkedinUrl:
            "https://www.linkedin.com/in/meharpreet-singh-594109244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "Jasman Kaur",
          position: "Publicity Head",
          imageUrl: "/headspic/jasman.jpeg",
          instagramUrl: "https://www.instagram.com/jasmann_05",
          linkedinUrl: "http://www.linkedin.com/in/jasman05",
        },
      ],
    },
    {
      title: "Technical Heads",
      heads: [
        {
          name: "Jasman Kaur",
          position: "Technical Head",
          imageUrl: "/headspic/jasman.jpeg",
          instagramUrl: "https://www.instagram.com/jasmann_05",
          linkedinUrl: "http://www.linkedin.com/in/jasman05"
        },
        {
          name: "Aditya",
          position: "Technical Head ",
          imageUrl: "/headspic/aditya.jpg",
          instagramUrl:"https://www.instagram.com/adityaa.2.7?igsh=MWI5aHZpY3BwZmVoMg%3D%3D&utm_source=qr",
          linkedinUrl: "https://www.linkedin.com/in/aditya-sharma-658a69292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        }
      ]
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
