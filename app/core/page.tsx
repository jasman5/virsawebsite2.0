"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import App_Navbar from "../components/navbar";
import { FooterSection } from "../components/footer-section";

interface TeamMember {
  id: number;
  name: string;
  imageUrl: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
  };
}

const coreTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Aakriti",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/_aakritiiii_2",
      linkedin: "https://www.linkedin.com/in/aakriti-bansal-97b73534b",
    },
  },
  {
    id: 2,
    name: "Abhinav Bindra",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/abhi_bindra",
      linkedin: "https://www.linkedin.com/in/abhinav-bindra-55a5163b4",
    },
  },
  {
    id: 3,
    name: "Agam Singh Kooner",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/agam_kooner18",
      linkedin: "https://www.linkedin.com/in/agam-singh-kooner-277459330",
    },
  },
  {
    id: 4,
    name: "Akshit Mahajan",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/akshhit.mahajann",
      linkedin: "https://www.linkedin.com/in/akshit-mahajan-87361335b",
    },
  },
  {
    id: 5,
    name: "Angadjot Singh",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/aryan_pal11",
      linkedin: "https://www.linkedin.com/in/aryan-pal-5728a8337",
    },
  },
  {
    id: 6,
    name: "Armaandeep Singh",
    imageUrl: "",
    socialLinks: { instagram: "https://www.instagram.com/dhillonarmaan__" },
  },
  {
    id: 7,
    name: "Ashmeen Kaur",
    imageUrl: "",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ashmeen-kaur-49295436a",
    },
  },
  {
    id: 8,
    name: "Bhumi Arora",
    imageUrl: "",
    socialLinks: { instagram: "https://www.instagram.com/invites/contact/" },
  },
  {
    id: 9,
    name: "Bismanjot Singh",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/bismanjot07",
      linkedin: "https://www.linkedin.com/in/bismanjot-singh-125757319",
    },
  },
  {
    id: 10,
    name: "Eaimanjot Singh",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/_.eaiman._",
      linkedin: "https://www.linkedin.com/in/eaimanjot-singh",
    },
  },
  {
    id: 11,
    name: "Furmaan",
    imageUrl: "",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/furmaan-kaur-531a7b367",
    },
  },
  {
    id: 12,
    name: "Guntas",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/guntas._",
      linkedin: "https://www.linkedin.com/in/guntas-kaur-874826266",
    },
  },
  {
    id: 13,
    name: "Gurjeevan Singh",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/gurjeevan_toor",
      linkedin: "https://www.linkedin.com/in/gurjeevan-singh-toor-a93165325",
    },
  },
  {
    id: 14,
    name: "Gurleen",
    imageUrl: "",
    socialLinks: { instagram: "https://www.instagram.com/ishq.abaad" },
  },
  {
    id: 15,
    name: "Gurman Singh",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/gurman_79/",
      linkedin: "https://www.linkedin.com/in/gurman-singh-56813a321",
    },
  },
  {
    id: 16,
    name: "Harden Singh",
    imageUrl: "",
    socialLinks: { instagram: "https://www.instagram.com/harden_singh_" },
  },
  {
    id: 17,
    name: "Hargunpreet Singh Sujlana",
    imageUrl: "",
    // imageUrl: "/corepic/hargun.jpeg",
    socialLinks: {
      instagram: "https://www.instagram.com/hargunpreet._",
      linkedin:
        "https://www.linkedin.com/in/hargunpreet-singh-sujlana-5b4793305",
    },
  },
  {
    id: 18,
    name: "Harshpreet Singh",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/hxrshpreetsingh",
      linkedin: "https://www.linkedin.com/in/harshpreet-singh-482326325",
    },
  },
  { id: 19, name: "Harsirat", imageUrl: "", socialLinks: {} },
  {
    id: 20,
    name: "Jagbir Singh",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/jagbir.singh0512",
      linkedin: "https://www.linkedin.com/in/jagbir--singh",
    },
  },
  {
    id: 21,
    name: "Japji Kaur Bains",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/japji.bains22",
      linkedin: "https://www.linkedin.com/in/japji-kaur-bains-a25bb1336",
    },
  },
  {
    id: 22,
    name: "Japneet",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/japneetk_.28",
      linkedin: "https://www.linkedin.com/in/japneet-kaur-11b90536a",
    },
  },
  {
    id: 23,
    name: "Krish Sally",
    imageUrl: "",
    socialLinks: { instagram: "https://www.instagram.com/krish__sally" },
  },
  { id: 24, name: "Parneet", imageUrl: "", socialLinks: {} },
  { id: 25, name: "Nandini", imageUrl: "", socialLinks: {} },
  {
    id: 26,
    name: "Prabhsimran Singh",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/simran.szn/",
      linkedin: "https://www.linkedin.com/in/prabhsimran-singh-945312344/",
    },
  },
  { id: 27, name: "Preetinder", imageUrl: "", socialLinks: {} },
  {
    id: 28,
    name: "Rabaaz Singh Sidhu",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/rabaazsidhu",
      linkedin: "https://www.linkedin.com/in/rabaaz-singh-14a827394",
    },
  },
  {
    id: 29,
    name: "Roopneet Cheema",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/cheema._.8",
      linkedin: "https://www.linkedin.com/in/roopneet-cheema-614ba9302",
    },
  },
  {
    id: 30,
    name: "Sehajpreet Singh Saran",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/sehaj_.saran",
      linkedin: "https://www.linkedin.com/in/sehajpreet-singh-saran-505964386",
    },
  },
  {
    id: 31,
    name: "Sharanpreet Kaur",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/kaur_.preet2710/",
      linkedin: "https://www.linkedin.com/in/sharan-kaur-8bab6a372/",
    },
  },
  {
    id: 32,
    name: "Tanish Garg",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/tanish_garg1",
      linkedin: "https://www.linkedin.com/in/tanish-garg-710481390",
    },
  },
  {
    id: 33,
    name: "Yashika",
    imageUrl: "",
    socialLinks: {
      instagram: "https://www.instagram.com/_yashika_sherawat_",
      linkedin: "https://www.linkedin.com/in/yashika-722899321",
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
    <>
      <App_Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-20 py-20 md:py-28 lg:py-32">
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
            className="hero-title text-center mb-6 punjabi-accent"
          >
            The Core Team Behind <br /> Virsa Cultural Society
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 body-large text-center max-w-2xl mx-auto mb-12"
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
      <section className="py-16 bg-white">
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

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="section-title text-gray-900 mb-6">
              Join Our Cultural Journey
            </h2>
            <p className="text-gray-600 body-text mb-8">
              Interested in becoming part of our team or volunteering for our
              events? We&apos;re always looking for passionate individuals to
              help preserve and celebrate Punjabi culture.
            </p>
            <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 button-text">
              Get Involved
            </button>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default CoreTeam;
