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
      name: "Amrita Kaur",
      position: "General Secretary",
      description: "Leading our cultural initiatives with passion and dedication to preserve and promote Punjabi heritage through innovative events and programs.",
      imageUrl: "https://imagizer.imageshack.com/img923/9174/1kpZQD.jpg",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "Gurpreet Singh",
      position: "General Secretary",
      description: "Coordinating events and managing our team operations with a focus on authentic cultural representation and community engagement.",
      imageUrl: "https://imagizer.imageshack.com/img923/9018/j0ZZ7R.jpg",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "Harjot Singh",
      position: "General Secretary",
      description: "Preserving and promoting authentic Punjabi traditions while developing strategic partnerships to expand our cultural impact.",
      imageUrl: "https://imagizer.imageshack.com/img922/5060/796gae.jpg",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com"
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
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Manpreet Singh",
          position: "Joint Secretary",
          imageUrl: "/team.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Technical Heads",
      heads: [
        {
          name: "Rajinder Singh",
          position: "Technical Head",
          imageUrl: "/team4.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Simran Kaur",
          position: "Technical Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Content Heads",
      heads: [
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Gurjot Singh",
          position: "Content Head",
          imageUrl: "/team.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Creativity Heads",
      heads: [
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Gurjot Singh",
          position: "Content Head",
          imageUrl: "/team.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
      ]
    },
    {
      title: "Cultural Heads",
      heads: [
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Gurjot Singh",
          position: "Content Head",
          imageUrl: "/team.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
      ]
    },
    {
      title: "Design Heads",
      heads: [
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Gurjot Singh",
          position: "Content Head",
          imageUrl: "/team.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Media Heads",
      heads: [
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Gurjot Singh",
          position: "Content Head",
          imageUrl: "/team.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Discipline Heads",
      heads: [
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Gurjot Singh",
          position: "Content Head",
          imageUrl: "/team.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
      ]
    },
    {
      title: "Documentation Heads",
      heads: [
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Finance Heads",
      heads: [
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Gurjot Singh",
          position: "Content Head",
          imageUrl: "/team.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Gurpurab Heads",
      heads: [
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Gurjot Singh",
          position: "Content Head",
          imageUrl: "/team.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Hospitality Heads",
      heads: [
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Gurjot Singh",
          position: "Content Head",
          imageUrl: "/team.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Marketing Heads",
      heads: [
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Gurjot Singh",
          position: "Content Head",
          imageUrl: "/team.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
      ]
    },
    {
      title: "Publicity Heads",
      heads: [
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Gurjot Singh",
          position: "Content Head",
          imageUrl: "/team.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      title: "Logistics Heads",
      heads: [
        {
          name: "Navjot Kaur",
          position: "Content Head",
          imageUrl: "/team3.jpeg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          name: "Gurjot Singh",
          position: "Content Head",
          imageUrl: "/team.jpeg",
          instagramUrl: "https://instagram.com",
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