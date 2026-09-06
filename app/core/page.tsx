"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import App_Navbar from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import "./core.css";

interface TeamMember {
  id: number;
  name: string;
  imageUrl: string;
  bio: string; // placeholder - update bio text later
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
  };
}

const coreTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Agam Sarao",
    imageUrl: "/corepic/Agamveer Singh Kaleka.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/agam_sarao11",
      linkedin:
        "https://www.linkedin.com/in/agamveer-singh-sarao-32542835b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 2,
    name: "Agamjot Singh Dhingra",
    imageUrl: "/corepic/Agamjot Singh Dhingra.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/agam_dhingra_?igsi=MThrYTloODVobWRuYQ%3D%3D&utm_source=qr",
      linkedin:
        "https://www.linkedin.com/in/agamjot-singh-dhingra-3216b7293/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bkb6bEecIRr6ZcliY%2B3iBtQ%3D%3D",
    },
  },
  {
    id: 3,
    name: "Amreen Rooprai",
    imageUrl: "/corepic/Amren.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/333amreen",
      linkedin:
        "https://www.linkedin.com/in/amreen-rooprai?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 4,
    name: "Anmol Grewal",
    imageUrl: "/corepic/Anmol Singh Grewal.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/anmol.grwl?igsi=MWhtZzI2aGdpNjQycA%3D%3D&utm_source=qr",
      linkedin:
        "https://www.linkedin.com/in/anmol-singh-grewal-689128373?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 5,
    name: "Anterpal Singh Chahal",
    imageUrl: "",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 6,
    name: "Avneet Kaur",
    imageUrl: "/corepic/Avneet Kaur.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/avneetsidhu313?igsi=cWp0YXRzc2llZXl6",
      linkedin: "https://www.linkedin.com/in/avneet-kaur-087691425",
    },
  },
  {
    id: 7,
    name: "Bhumika Garg",
    imageUrl: "/corepic/Bhumika Garg.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 8,
    name: "Birpartap Singh Bhullar",
    imageUrl: "/corepic/Bir.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 9,
    name: "Dilnoor Singh",
    imageUrl: "/corepic/dilnoor.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/whoisdilnoor",
      linkedin:
        "https://www.linkedin.com/in/dilnoor-singh-08895b379?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 10,
    name: "Garima Narula",
    imageUrl: "/corepic/Garima Narula.jpg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 11,
    name: "Gulnaaz Kaur Dhillon",
    imageUrl: "/corepic/Gulnaaz Kaur Dhillon.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 12,
    name: "Gunraj Kaur",
    imageUrl: "/corepic/GUNRAJ_KAUR.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/gunraj.k27",
    },
  },
  {
    id: 13,
    name: "Gunraj Singh",
    imageUrl: "/corepic/Gunraj Singh.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/gunraj_07?igsi=MXd2Y29pM3V5bmN4NQ==",
      linkedin:
        "https://www.linkedin.com/in/gunraj-singh-921939287?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 14,
    name: "Gurleen Kaur",
    imageUrl: "/corepic/Gurleen.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 15,
    name: "Hartaj Singh",
    imageUrl: "/corepic/Hartaj.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/hartaj_sullar",
    },
  },
  {
    id: 16,
    name: "Hitajveer Singh Dhindsa",
    imageUrl: "/corepic/Hitajveer Singh Dhindsa.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/dhindsa_hitaj?igsi=NDlmYmRjOWhveHdy",
      linkedin:
        "https://www.linkedin.com/in/hitajveer-singh-dhindsa-74a8b9384?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 17,
    name: "Jaiveer Singh Sidhu",
    imageUrl: "/corepic/jaiveer.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/jaiveersidhus",
    },
  },
  {
    id: 18,
    name: "Jashan Chauhan",
    imageUrl: "/corepic/JJASHAN.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/jasshaannn",
    },
  },
  {
    id: 19,
    name: "Jivitesh Partap Singh",
    imageUrl: "/corepic/Jivetesh.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/jivi.2202/",
      linkedin: "https://www.linkedin.com/in/jivitesh-partap-singh-05360137b",
    },
  },
  {
    id: 20,
    name: "Jobanpreet Singh Dhaliwal",
    imageUrl: "/corepic/Jobanpreet Singh.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 21,
    name: "Karmanjot Singh",
    imageUrl: "/corepic/Karmanjot.jpg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 22,
    name: "Karnaaz Kaur",
    imageUrl: "/corepic/Karnaaz Kaur.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/karnaaz_19?igsi=Ymp0MWVzN2w5ZXV4",
      linkedin:
        "https://www.linkedin.com/in/karnaaz-kaur-04255237a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 23,
    name: "Manmeet Singh Malhotra",
    imageUrl: "/corepic/m.jpg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 24,
    name: "Nishtha Uppal",
    imageUrl: "/corepic/nishta.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/thisisnishthauppal",
      
      linkedin: "https://www.linkedin.com/in/nishtha-uppal-46865737b",
    },
  },
  {
    id: 25,
    name: "Parminderjeet Singh",
    imageUrl: "/corepic/Parminderjeet Singh.jpg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 26,
    name: "Parneet Singh",
    imageUrl: "/corepic/Parneet.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 27,
    name: "Ramanbir Singh",
    imageUrl: "/corepic/Ramanbir.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/itz_rmn_gill?igsi=MXU3ampjZ2lzZnd2eg%3D%3D&utm_source=qrQ",
      linkedin:
        "https://www.linkedin.com/in/ramanbir-singh-318b23393?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 28,
    name: "Ravaljot Kaur Ahluwalia",
    imageUrl: "/corepic/Ravaljot Kaur.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 29,
    name: "Ravneet Sandhu",
    imageUrl: "/corepic/Ravneet Kaur Sandhu.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/Ravneeettt___",
    },
  },
  {
    id: 30,
    name: "Saanvi Aggarwal",
    imageUrl: "/corepic/Saanvi Aggarwal.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/aggarwal_saanvii",
      linkedin:
        "https://www.linkedin.com/in/saanvi-aggarwal-43943a37a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 31,
    name: "Sabiha Bhandohal",
    imageUrl: "/corepic/Sabiha.jpg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 32,
    name: "Sameer",
    imageUrl: "/corepic/sameer.jpeg", // TODO: add photo — placeholder, will show initials until filled in
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/its_sameer1406?igsi=dnkxYTZhZmNtYW16&utm_source=qr",
      linkedin:
        "https://www.linkedin.com/in/sameer-saini-41131737a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 33,
    name: "Samridh Chopra",
    imageUrl: "/corepic/Samridh Chopra.jpg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 34,
    name: "Sehajpal Singh Cheema",
    imageUrl: "/corepic/Sehajpal Singhh.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/sehajcheema.12",
    },
  },
  {
    id: 35,
    name: "Sehajpreet Singh",
    imageUrl: "/corepic/Sehajpreet Singh.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/_sehaj_saini_?igsi=bzhnZTlhejQycThm&utm_source=qr",
      linkedin:
        "https://www.linkedin.com/in/sehajpreet-singh-667a5833a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 36,
    name: "Shubhneet Kaur Sandhu",
    imageUrl: "/corepic/Shubhneet Kaur.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/shubhneet-kaur-ab98092b3?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 37,
    name: "Simargeet Kaur",
    imageUrl: "",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 38,
    name: "Suhani Nagpal",
    imageUrl: "/corepic/Suhani Nagpal.jpg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 39,
    name: "Sukhmanjot Singh Sandhu",
    imageUrl: "/corepic/Sukhmanjot Singh.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/sukhmanjxt",
    },
  },
  {
    id: 40,
    name: "Talveen Kaur",
    imageUrl: "/corepic/Talveen Kaur.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/talveen24",
    },
  },
  {
    id: 41,
    name: "Tanveer Singh",
    imageUrl: "/corepic/TAN.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/tanveer.singhh_?igsi=YmdxanZrbW93cmxl",
      linkedin:
        "https://www.linkedin.com/in/tanveer-singh-06153a362?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
];

// Gets initials from name e.g. "Jasman Kaur" → "JK"
const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const CoreTeam = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="cultural-pattern-bg-light">
      <App_Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-t from-gray-600 via-gray-500/70 to-gray-400/50 z-20 py-20 md:py-28 lg:py-32">
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
              Meet Our Team
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title text-center mb-6 punjabi-accent text-amber-400"
          >
            The Core Team Behind <br /> Virsa Cultural Society
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-grey-500 body-large text-center max-w-2xl mx-auto mb-12"
          >
            Dedicated individuals working together to preserve and celebrate the
            rich heritage of Punjabi culture.
          </motion.p>
          <div className="flex items-center justify-center mb-16">
            <div className="h-px w-12 bg-amber-300"></div>
            <div className="h-1 w-24 mx-2 rounded-full bg-amber-400"></div>
            <div className="h-px w-12 bg-amber-300"></div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {coreTeamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="punjabi-card-hover rounded-xl overflow-hidden bg-white shadow-lg"
              >
                {/* Image or Initials Placeholder */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-amber-800 to-amber-600 flex items-center justify-center group">
                  {member.imageUrl ? (
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-5xl font-bold text-white/80 select-none">
                      {getInitials(member.name)}
                    </span>
                  )}

                  {/* Hover overlay with social links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex space-x-4">
                      {member.socialLinks?.instagram && (
                        <a
                          href={member.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-amber-300 transition-colors"
                        >
                          <FaInstagram size={20} />
                        </a>
                      )}
                      {member.socialLinks?.linkedin && (
                        <a
                          href={member.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-amber-300 transition-colors"
                        >
                          <FaLinkedin size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="card-title text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      

      <footer className="relative bg-gray-50 text-gray-800 transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('/logopng.svg')] bg-center bg-no-repeat opacity-10 pointer-events-none bg-contain"></div>
        <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8 relative">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">ਵਿਰਸਾ <span className="text-amber-600">Society</span></h2>
              <p className="mb-3 text-sm text-gray-600">
                Preserving and celebrating the rich heritage of Punjabi culture.
              </p>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <p className="text-sm italic text-gray-700">"ਸਾਡਾ ਵਿਰਸਾ, ਸਾਡੀ ਪਹਿਚਾਣ"</p>
              </div>
              <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-amber-200/30 blur-2xl" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Quick Links</h3>
              <nav className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                <a href="#" className="text-gray-600 transition-colors hover:text-amber-600">
                  Home
                </a>
                <a href="/events" className="text-gray-600 transition-colors hover:text-amber-600">
                  Events
                </a>
                <a href="/gallery" className="text-gray-600 transition-colors hover:text-amber-600">
                  Gallery
                </a>
                <a href="/core" className="text-gray-600 transition-colors hover:text-amber-600">
                  Core Team
                </a>
                <a href="/heads" className="text-gray-600 transition-colors hover:text-amber-600">
                  Heads
                </a>
              </nav>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Contact Us</h3>
              <address className="space-y-2 text-sm not-italic">
                <div className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-amber-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600">Thapar Institute, Patiala</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-gray-600">+91 86288 02887<br>+91 82849 13118</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <p className="text-gray-600">virsa@thapar.edu</p>
                </div>
              </address>
            </div>
            <div className="relative">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Cultural Highlights</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2 group">
                  <svg className="h-4 w-4 text-amber-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-amber-600 transition-colors">Bhangra & Giddha</h4>
                    <p className="text-xs text-gray-500">Traditional folk dances</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 group">
                  <svg className="h-4 w-4 text-amber-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-amber-600 transition-colors">Punjabi Heritage</h4>
                    <p className="text-xs text-gray-500">Cultural workshops & exhibitions</p>
                  </div>
                </div>
              </div>
              <h3 className="mb-1 mt-3 text-lg font-semibold text-gray-900">Follow Us</h3>
              <div className="flex space-x-2">
                <a href="https://www.facebook.com/VirsaTIET/" target="_blank" rel="noopener noreferrer">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 hover:text-amber-600 transition-colors">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </a>
                <a href="https://www.instagram.com/virsa.thapar/" target="_blank" rel="noopener noreferrer">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 hover:text-amber-600 transition-colors">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
                <a href="http://linkedin.com/company/ssa-virsa/" target="_blank" rel="noopener noreferrer">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 hover:text-amber-600 transition-colors">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-4 text-center md:flex-row">
            <p className="text-xs text-gray-500">
              © 2026 Virsa Society, Thapar Institute. All rights reserved.
            </p>
            <div className="text-xs text-gray-500 italic">
              ਸਾਡੀਆਂ ਜੜ੍ਹਾਂ, ਸਾਡਾ ਮਾਣ | Our roots, our pride
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoreTeam;
