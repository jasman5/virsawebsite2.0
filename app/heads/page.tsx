'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import App_Navbar from '../components/navbar';
import { FooterSection } from '../components/footer-section';
import './Heads.css';

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
  linkedinUrl
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
          {/* Cultural pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20 z-10 mix-blend-overlay"></div>
          
          {/* Image */}
          <Image 
            src={imageUrl} 
            alt={name}
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-110 z-0"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-20"></div>
          
          {/* Position badge */}
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
            
            {description && (
              <p className="text-gray-300 mb-4">{description}</p>
            )}
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
  linkedinUrl
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
        {/* Image Container - Smaller height */}
        <div className="relative h-48 overflow-hidden">
          {/* Cultural pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20 z-10 mix-blend-overlay"></div>
          
          {/* Image */}
          <Image 
            src={imageUrl} 
            alt={name}
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-110 z-0"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-20"></div>
        </div>
        
        {/* Content - More compact */}
        <div className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-1">{name}</h3>
            <p className="text-amber-300/80 font-medium text-sm mb-2">{position}</p>
            
            {description && (
              <p className="text-gray-300 text-xs mb-3">{description}</p>
            )}
          </div>
          
          {/* Social links - Smaller */}
          <div className="flex space-x-2 mt-auto pt-2 border-t border-amber-900/20">
            {instagramUrl && (
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 flex items-center justify-center rounded-full bg-amber-900/30 text-amber-400 hover:bg-amber-700/50 transition-colors"
              >
                <FaInstagram size={14} />
              </a>
            )}
            {linkedinUrl && (
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 flex items-center justify-center rounded-full bg-amber-900/30 text-amber-400 hover:bg-amber-700/50 transition-colors"
              >
                <FaLinkedin size={14} />
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

const DepartmentSection: React.FC<DepartmentSectionProps> = ({ title, heads }) => {
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
        <h2 className="text-2xl md:text-3xl font-bold text-amber-500">{title}</h2>
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
      name: "Rajvir Singh",
      position: "General Secretary",
      description: "Leading our cultural initiatives with passion and dedication to preserve and promote Punjabi heritage through innovative events and programs.",
      imageUrl: "https://imagizer.imageshack.com/img923/9174/1kpZQD.jpg",
      instagramUrl: "https://www.instagram.com/rajvir8702?igsh=ZWE2dXBobG95Ymds",
      linkedinUrl: "https://www.linkedin.com/in/rajvir-singh8702/"
    },
    {
      name: "Aastha Verma",
      position: "General Secretary",
      description: "Coordinating events and managing our team operations with a focus on authentic cultural representation and community engagement.",
      imageUrl: "https://imagizer.imageshack.com/img923/9018/j0ZZ7R.jpg",
      instagramUrl: "https://www.instagram.com/aasthaes?igsh=MTUycGp1bG1janVudw==",
      linkedinUrl: "https://www.linkedin.com/in/aastha-verma-404985229/"
    },
    {
      name: "Naman Garg",
      position: "General Secretary",
      description: "Preserving and promoting authentic Punjabi traditions while developing strategic partnerships to expand our cultural impact.",
      imageUrl: "https://imagizer.imageshack.com/img922/5060/796gae.jpg",
      instagramUrl: "https://www.instagram.com/naman_garg09?igsh=MWU4amV3eXU2bTl5ZA==",
      linkedinUrl: "https://www.linkedin.com/in/naman-garg-745501290/"
    }
  ];

  // Department Heads
  const departments: DepartmentSectionProps[] = [
    {
      title: "Joint Secretaries",
      heads: [
        {
          name: "Anureet Kaur",
          position: "Joint Secretary",
          imageUrl: "https://imagizer.imageshack.com/img924/1561/yKutpN.jpg",
          instagramUrl: "https://www.instagram.com/anureeet.cheema?igsh=YXZ5cWNlb2hlcDB0",
          linkedinUrl: "https://www.linkedin.com/in/anureet-cheema-87ab43232/"
        },
        {
          name: "Adamya Sharma",
          position: "Joint Secretary",
          imageUrl: "https://imagizer.imageshack.com/img924/1051/LwVhxK.jpg",
          instagramUrl: "https://instagram.com/sharma_adamya?igshid=MzMyNGUyNmU2YQ==",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Technical Heads",
      heads: [
        {
          name: "Raghav",
          position: "Technical Head",
          imageUrl: "https://imagizer.imageshack.com/img922/8332/0gaaTk.jpg",
          instagramUrl: "https://www.instagram.com/khedar._/",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Avya",
          position: "Technical Head",
          imageUrl: "https://imagizer.imageshack.com/img922/8215/KHrbqS.jpg",
          instagramUrl:"https://www.instagram.com/avyaa_9/",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Content Heads",
      heads: [
        {
          name: "Ira Dahiya",
          position: "Content Head",
          imageUrl: "https://imagizer.imageshack.com/img922/7845/SEbxwF.jpg",
          instagramUrl: "https://instagram.com/iraaaaaaa.22",
          linkedinUrl: "https://www.linkedin.com/in/ira-dahiya-6a7b0825a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          name: "Harnoor Singh",
          position: "Content Head",
          imageUrl: "https://imagizer.imageshack.com/img924/170/7MQfTw.jpg",
          instagramUrl: "https://instagram.com/harnoor.81",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Creativity Heads",
      heads: [
        {
          name: "Archit Garg",
          position: "Content Head",
          imageUrl: "https://imagizer.imageshack.com/img924/2381/dvF6Wk.jpg",
          instagramUrl: "https://instagram.com/archit_garg04",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Harmandeep Singh",
          position: "Content Head",
          imageUrl: "https://imagizer.imageshack.com/img923/6168/yRaNRj.jpg",
          instagramUrl: "https://www.instagram.com/harmandhiman55_/",
          linkedinUrl: "https://www.linkedin.com/in/harmandeep-singh-84a8b5222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        },
        {
          name: "Kashika Chopra",
          position: "Content Head",
          imageUrl: "https://imagizer.imageshack.com/img923/9733/ByEsxM.jpg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://www.linkedin.com/in/kashika-chopra-8449092bb?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
        },
      ]
    },
    {
      title: "Cultural Heads",
      heads: [
        {
          name: "Jashan Mankoo",
          position: "Cultural Head",
          imageUrl: "https://imagizer.imageshack.com/img923/2096/5OtelI.jpg",
          instagramUrl: "https://www.instagram.com/jashan_mankoo_?igsh=MWl1NmVqYWd3enIxcg%3D%3D&amp;utm_source=qr",
          linkedinUrl: "https://linkedin.com/in/jashandeep-singh-mankoo-30b84930a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        },
        {
          name: "Sukhman Singh",
          position: "Cultural Head",
          imageUrl: "",
          instagramUrl: "https://www.instagram.com/sukhmxnnn_/",
          linkedinUrl: "https://www.linkedin.com/in/sukhman-singh-323231253"
        },
        {
          name: "Anureet Kaur",
          position: "Cultural Head",
          imageUrl: "https://imagizer.imageshack.com/img924/1561/yKutpN.jpg",
          instagramUrl: "https://www.instagram.com/anureeet.cheema?igsh=YXZ5cWNlb2hlcDB0",
          linkedinUrl: "https://www.linkedin.com/in/anureet-cheema-87ab43232/"
        },
      ]
    },
    {
      title: "Design Heads",
      heads: [
        {
          name: "Ekamjot Kaur",
          position: "Design Head",
          imageUrl: "https://imagizer.imageshack.com/img924/7483/MIgPSF.png",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://www.linkedin.com/in/ekamjot-kaur-3b41b0258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          name: "Bhumika Tandon",
          position: "Design Head",
          imageUrl: "https://imagizer.imageshack.com/img924/4568/Wa3R5t.jpg",
          instagramUrl: "https://instagram.com/_bhumiii.x?igshid=OGQ5ZDc2ODk2ZA==",
          linkedinUrl: "http://linkedin.com/in/bhumika-tandon-bt21"
        }
      ]
    },
    {
      title: "Media Heads",
      heads: [
        {
          name: "Abhay Bhagla",
          position: "Media Head",
          imageUrl: "https://imagizer.imageshack.com/img924/6912/8Z6fw4.jpg",
          instagramUrl: "https://www.instagram.com/abhaybagla04?igsh=MTFoZG85aHJ2Nmsyeg%3D%3D&utm_source=q",
          linkedinUrl: "https://www.linkedin.com/in/abhaybagla04?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        },
        {
          name: "Mohandeep Singh Raikhi",
          position: "Media Head",
          imageUrl: "https://imagizer.imageshack.com/img923/7258/NJAz7T.jpg",
          instagramUrl: "https://instagram.com/mohan__walia?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Discipline Heads",
      heads: [
        {
          name: "Gurveer Singh Hundal",
          position: "Discipline Head",
          imageUrl: "https://imagizer.imageshack.com/img922/6320/1pbk4Q.jpg",
          instagramUrl: "https://www.instagram.com/_g_hundal_/?utm_source=ig_web_button_share_sheet",
          linkedinUrl: "http://linkedin.com/in/gurveer-singh-hundal-741186268"
        },
        {
          name: "Angaddeep",
          position: "Discipline Head",
          imageUrl: "https://imagizer.imageshack.com/img924/2394/gXGHJC.jpg",
          instagramUrl: "https://www.instagram.com/angaddeep_?igsh=MWFnb2J4cWNqaHM2eA==",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Abhaijeet Singh",
          position: "Discipline Head",
          imageUrl: "https://imagizer.imageshack.com/img923/8100/I1LKGd.jpg",  
          instagramUrl: "https://www.instagram.com/abhaijeetsingh?igsh=MXVxcGEyOGxmanprbg==",
          linkedinUrl: "http://www.linkedin.com/in/abhaijeet-singh-003030287"
        },
      ]
    },
    {
      title: "Documentation Heads",
      heads: [
        {
          name: "Jaideep Singh",
          position: "Content Head",
          imageUrl: "https://imagizer.imageshack.com/img922/6950/XBgXrM.jpg",
          instagramUrl: "https://www.instagram.com/jaideepsingh2309?igsh=MTl1OTkzMnM5MzMyNQ==",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Finance Heads",
      heads: [
        {
          name: "Adamya Sharma",
          position: "Finance Head",
          imageUrl: "https://imagizer.imageshack.com/img924/1051/LwVhxK.jpg",
          instagramUrl: "https://instagram.com/sharma_adamya?igshid=MzMyNGUyNmU2YQ==",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Jasmine Panesar",
          position: "Finance Head",
          imageUrl: "https://imagizer.imageshack.com/img923/7605/umGgsa.jpg",
          instagramUrl: "https://www.instagram.com/jasmine_panesar?igsh=MTIwZWc4bG1tOWlyMQ==",
          linkedinUrl: "https://www.linkedin.com/in/jasmine-panesar8604/"
        }
      ]
    },
    {
      title: "Gurpurab Heads",
      heads: [
        {
          name: "Harteshwar Singh Dhaliwal",
          position: "Gurpurab Head",
          imageUrl: "https://imagizer.imageshack.com/img922/2152/PfD7WU.jpg",
          instagramUrl: "https://www.instagram.com/dhaliwal_____0018?igsh=ejVmN2xucmZuYnF5",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Manmeet Singh",
          position: "Gurpurab Head",
          imageUrl: "https://imagizer.imageshack.com/img924/6757/N1y3Q5.jpg",
          instagramUrl: "https://www.instagram.com/singh_manmeet_official?igsh=c2l4djUzMXYwaXlz",
          linkedinUrl:"https://www.linkedin.com/in/manmeet-singh-56b544263"
        }
      ]
    },
    {
      title: "Hospitality Heads",
      heads: [
        {
          name: "Jashandeep Singh Mann",
          position: "Hospitality Head",
          imageUrl: "https://imagizer.imageshack.com/img923/5688/lcNCQI.jpg ",
          instagramUrl: "https://www.instagram.com/_mann__jashan_?igsh=MTMxMnBhcno1bTQydw%3D%3D&utm_source=qr",
          linkedinUrl: "https://www.linkedin.com/in/jashandeep-singh-mann-922830166?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        },
        {
          name: "Akriti Kapoor",
          position: "Hospitality Head",
          imageUrl: "https://imagizer.imageshack.com/img922/2276/jraDgk.png",
          instagramUrl: "https://www.instagram.com/akritiikapoor/profilecard/?igsh=MTVoM3J0cnlsaWdmbA==",
          linkedinUrl: "https://www.linkedin.com/in/akritikapoor172?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
      ]
    },
    {
      title: "Marketing Heads",
      heads: [
        {
          name: "Chandranshu Bhardwaj",
          position: "Marketing Head",
          imageUrl: "https://imagizer.imageshack.com/img923/9169/3xfVQS.jpg",
          instagramUrl: "https://www.instagram.com/bhardwajchandranshu",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Manraj Singh",
          position: "Marketing Head",
          imageUrl: "https://imagizer.imageshack.com/img924/6112/r9mEZm.jpg",
          instagramUrl:"https://www.instagram.com/manrajsingh.17?igsh=MWM5cnB6ajR5NTdicg==",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Harmanjot Singh",
          position: "Marketing Head",
          imageUrl: "https://imagizer.imageshack.com/img923/805/eswUHM.jpg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Namanmeet Kaur",
          position: "Marketing Head",
          imageUrl: "https://imagizer.imageshack.com/img924/8194/IRsvYA.jpg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
      ]
    },
    {
      title: "Publicity Heads",
      heads: [
        {
          name: "Harmandeep Singh",
          position: "Publicity Head",
          imageUrl:"https://imagizer.imageshack.com/img922/844/WcutDa.jpg",
          instagramUrl: "https://www.instagram.com/harmandhiman55_/",
          linkedinUrl: "https://www.linkedin.com/in/harmandeep-singh-84a8b5222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        },
        {
          name: "Ashwanreet Kaur",
          position: "Publicity Head",
          imageUrl:"https://imagizer.imageshack.com/img923/7067/1LCDzP.jpg",
          instagramUrl: "https://www.instagram.com/ashwan_049?igsh=MWF1ZTlwZXBnbGRiZw==",
          linkedinUrl: ":https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
        }
      ]
    },
    {
      title: "Logistics Heads",
      heads: [
        {
          name: "Ishmit Singh",
          position: "Logistics Head",
          imageUrl: "https://imagizer.imageshack.com/img924/3199/zMMoBr.jpg",
          instagramUrl: "https://www.instagram.com/amiteshwar.51/",
          linkedinUrl: "https://www.linkedin.com/in/ishmit/"
        },
        {
          name: "Agamjot Singh",
          position: "Logistics Head",
          imageUrl: "https://imagizer.imageshack.com/img924/1930/MjOvUe.jpg",
          instagramUrl: "https://www.instagram.com/agamjot.bawejaa?igsh=dXR5YmV6dDhnbTJm",
          linkedinUrl: "https://linkedin.com"
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
            <span className="text-amber-600 font-medium uppercase tracking-wider text-sm accent-text">Our Leadership</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title text-center mb-6 punjabi-accent"
          >
            The Dedicated Team Behind <br/> Virsa Cultural Society
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 body-large text-center max-w-2xl mx-auto mb-12"
          >
            Meet the passionate individuals who work tirelessly to preserve and celebrate our rich Punjabi heritage through events, performances, and cultural initiatives.
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
            <h2 className="text-3xl font-bold text-amber-500">General Secretaries</h2>
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