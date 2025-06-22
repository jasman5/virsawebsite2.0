'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import App_Navbar from '../components/navbar';
import { FooterSection } from '../components/footer-section';

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
    name: 'Jasman Kaur',
    imageUrl: 'https://imagizer.imageshack.com/img922/9149/T5Jr7M.jpg',
    socialLinks: {
      instagram: 'https://www.instagram.com/jasmann_05?igsh=MTh3ZXljYm85YTNq',
      linkedin: 'https://www.linkedin.com/in/jasman-kaur-191988278',
    }
  },
  {
    id: 2,
    name: 'Pooja Bisht',
    imageUrl: 'https://imagizer.imageshack.com/img923/206/stVTzI.jpg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://www.linkedin.com/in/pooja-bisht-987662315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
  },
  {
    id: 3,
    name: 'Harshit Kamra',
    imageUrl: 'https://imagizer.imageshack.com/img922/5/8jQIv2.jpg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 4,
    name: 'Trishti',
    imageUrl: 'https://imagizer.imageshack.com/img922/5997/8JKEnv.jpg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 5,
    name: 'Arshia',
    imageUrl: 'https://imagizer.imageshack.com/img924/8975/5r6xTG.jpg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 6,
    name: 'Navjot Kaur',
    imageUrl: '/team3.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 7,
    name: 'Rajinder Singh',
    imageUrl: '/team4.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 8,
    name: 'Amrit Kaur',
    imageUrl: '/team5.PNG',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 9,
    name: 'Rahul',
    imageUrl: '/team6.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 10,
    name: 'Rohit',
    imageUrl: '/team7.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 11,
    name: 'Sahil',
    imageUrl: '/team8.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 12,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 13,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 14,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 15,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 16,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 17,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 18,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 19,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 20,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 21,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 22,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 23,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 24,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 25,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 26,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 27,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 28,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 29,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 30,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 31,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 32,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 33,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 34,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 35,
    name: 'Sai',
    imageUrl: '/team9.jpeg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },


];

const CoreTeam = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <App_Navbar />
      
      {/* Hero Section */}
      
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
            <span className="text-amber-600 font-medium uppercase tracking-wider text-sm accent-text">Meet Our Team</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title text-center mb-6 punjabi-accent"
          >
            The Core Team Behind <br/> Virsa Cultural Society
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 body-large text-center max-w-2xl mx-auto mb-12"
          >
            Dedicated individuals working together to preserve and celebrate the rich heritage of Punjabi culture through various events, performances, and educational initiatives.
          </motion.p>
          
          {/* Decorative Divider */}
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
                <div className="relative h-80 overflow-hidden">
                  <Image 
                    src={member.imageUrl} 
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-800/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      {/* Removed description since it's not defined in TeamMember interface */}
                      <div className="flex space-x-4">
                        {member.socialLinks?.instagram && (
                          <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition-colors">
                            <FaInstagram size={20} />
                          </a>
                        )}
                        {member.socialLinks?.linkedin && (
                          <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition-colors">
                            <FaLinkedin size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="card-title text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium text-sm mb-2"></p>
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
            <h2 className="section-title text-gray-900 mb-6">Join Our Cultural Journey</h2>
            <p className="text-gray-600 body-text mb-8">Interested in becoming part of our team or volunteering for our events? We&apos;re always looking for passionate individuals to help preserve and celebrate Punjabi culture.</p>
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