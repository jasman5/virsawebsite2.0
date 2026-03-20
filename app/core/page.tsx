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
    name: 'Aakriti',
    imageUrl: 'https://drive.google.com/uc?id=1MSquLDFp8tMfFgUXQUZJXtz7WXwyXXxo',
    socialLinks: {
      instagram: 'https://www.instagram.com/_aakritiiii_2',
      linkedin: 'https://www.linkedin.com/in/aakriti-bansal-97b73534b',
    },
  },
  {
    id: 2,
    name: 'Abhinav Bindra',
    imageUrl: 'https://drive.google.com/uc?id=1vBT6psYv2hS3sWyhgoOmEEhWu17Wy5rO',
    socialLinks: {
      instagram: 'https://www.instagram.com/abhi_bindra',
    },
  },
  {
    id: 3,
    name: 'Agam Singh Kooner',
    imageUrl: 'https://photos.app.goo.gl/miZDLaKzrkjpWYa17',
    socialLinks: {
      instagram: 'https://www.instagram.com/agam_kooner18',
    },
  },
  {
    id: 4,
    name: 'Akshit Mahajan',
    imageUrl: 'https://drive.google.com/uc?id=1a45bTkRuV9VTtwcKka48Muhn5H4C2OK0',
    socialLinks: {
      instagram: 'https://www.instagram.com/akshhit.mahajann',
      linkedin: 'https://www.linkedin.com/in/akshit-mahajan-87361335b',
    },
  },
  {
    id: 5,
    name: 'Armaandeep Singh',
    imageUrl: 'https://drive.google.com/uc?id=1mqBOmZXxB0D6LTBr6A3R8BhZEDgaMOwz',
    socialLinks: {
      instagram: 'https://www.instagram.com/dhillonarmaan__',
    },
  },
  {
    id: 6,
    name: 'Aryan Pal',
    imageUrl: 'https://drive.google.com/uc?id=17w4cK-zaynfSoDpJ9_Ac5DFU44dt8WIr',
    socialLinks: {
      instagram: 'https://www.instagram.com/aryan_pal11',
      linkedin: 'https://www.linkedin.com/in/aryan-pal-5728a8337',
    },
  },
  {
    id: 7,
    name: 'Ashmeen Kaur',
    imageUrl: 'https://drive.google.com/uc?id=1R7ROurqMnS7_hDRJaL39te_EUF8Br6HB',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/ashmeen-kaur-49295436a',
    },
  },
  {
    id: 8,
    name: 'Bhumi Arora',
    imageUrl: 'https://drive.google.com/uc?id=1Skg45q7ukvE6svSskrD5oNic4PE5ctyC',
    socialLinks: {
      instagram: 'https://www.instagram.com/invites/contact/',
    },
  },
  {
    id: 9,
    name: 'Bismanjot Singh',
    imageUrl: 'https://drive.google.com/uc?id=1IATh6yT5MI5_udyTUn53AaV26Tna0zrj',
    socialLinks: {
      instagram: 'https://www.instagram.com/bismanjot07',
      linkedin: 'https://www.linkedin.com/in/bismanjot-singh-125757319',
    },
  },
  {
    id: 10,
    name: 'Eaimanjot Singh',
    imageUrl: 'https://drive.google.com/uc?id=1ex3ugedd7_4KkCxtbofiGjjq2UAt1BE-',
    socialLinks: {
      instagram: 'https://www.instagram.com/_.eaiman._',
      linkedin: 'https://www.linkedin.com/in/eaimanjot-singh-71608531b',
    },
  },
  {
    id: 11,
    name: 'Furmaan',
    imageUrl: 'https://drive.google.com/uc?id=13kLh_HDDrV2tK1MI6KBBQCxN0evAO-ej',
    socialLinks: {
      instagram: 'https://www.instagram.com/furmaan.kaur/',
      linkedin: 'https://www.linkedin.com/in/furmaan-kaur-531a7b367/',
    },
  },
  {
    id: 12,
    name: 'Guntas',
    imageUrl: 'https://drive.google.com/uc?id=1XF_3EJ980wHI7kEw0EoYLsvH4rnxTrRc',
    socialLinks: {
      instagram: 'https://www.instagram.com/guntas._',
      linkedin: 'https://www.linkedin.com/in/guntas-kaur-874826266',
    },
  },
  {
    id: 13,
    name: 'Gurjeevan Singh',
    imageUrl: 'https://drive.google.com/uc?id=1n5KhWeVCwtCb15fWe-jvzPaK7RDI0Svf',
    socialLinks: {
      instagram: 'https://www.instagram.com/gurjeevan_toor',
      linkedin: 'https://www.linkedin.com/in/gurjeevan-singh-toor-a93165325',
    },
  },
  {
    id: 14,
    name: 'Gurleen',
    imageUrl: 'https://drive.google.com/uc?id=1oGFT2G9QJYjEUuUQl6PNTzSWmKrTjGzY',
  },
  {
    id: 15,
    name: 'Gurman Singh',
    imageUrl: 'https://drive.google.com/uc?id=1dPXEdaQzbfYcaxAi7AU4o0BulrRssSyb',
    socialLinks: {
      instagram: 'https://www.instagram.com/gurman_79/',
      linkedin: 'https://www.linkedin.com/in/gurman-singh-56813a321',
    },
  },
  {
    id: 16,
    name: 'Harden Singh',
    imageUrl: 'https://drive.google.com/uc?id=1OOtlrB8JGBSMcgdm7CuvNAYC7lBQyiR8',
    socialLinks: {
      instagram: 'https://www.instagram.com/harden_singh_',
    },
  },
  {
    id: 17,
    name: 'Hargunpreet Singh Sujlana',
    imageUrl: 'https://drive.google.com/uc?id=1p68uPG7MympvuKwje6EaRUu2Xh8S5lhd',
    socialLinks: {
      instagram: 'https://www.instagram.com/hargunpreet._',
      linkedin: 'https://www.linkedin.com/in/hargunpreet-singh-sujlana-5b4793305',
    },
  },
  {
    id: 18,
    name: 'Harshpreet Singh',
    imageUrl: 'https://drive.google.com/uc?id=1bMHNTzTvA6uURnkqcY1CZ8uXkg8Beb2H',
    socialLinks: {
      instagram: 'https://www.instagram.com/hxrshpreetsingh',
      linkedin: 'https://www.linkedin.com/in/harshpreet-singh-a37a66382',
    },
  },
  {
    id: 19,
    name: 'Jagbir Singh',
    imageUrl: 'https://drive.google.com/uc?id=1pKIN7QJYfA0XiGXyr6R-ADc6eWOA9pJf',
    socialLinks: {
      instagram: 'https://www.instagram.com/jagbir.singh0512',
      linkedin: 'https://www.linkedin.com/in/jagbir--singh',
    },
  },
  {
    id: 20,
    name: 'Japji Kaur Bains',
    imageUrl: 'https://drive.google.com/uc?id=1ZdwAhmk4WLzxmHhdLqadvCZMOD77w1Sx',
    socialLinks: {
      instagram: 'https://www.instagram.com/japji.bains22',
      linkedin: 'https://www.linkedin.com/in/japji-kaur-bains-a25bb1336',
    },
  },
  {
    id: 21,
    name: 'Japneet',
    imageUrl: 'https://drive.google.com/uc?id=16XtV7jtmhXugwW_hdcUL4GkP16GrdQRc',
    socialLinks: {
      instagram: 'https://www.instagram.com/japneetk_.28',
      linkedin: 'https://www.linkedin.com/in/japneet-kaur-11b90536a',
    },
  },
  {
    id: 22,
    name: 'Krish Sally',
    imageUrl: 'https://drive.google.com/uc?id=1SEY7_HAilX8BU8So2yB_ilhVKXJuXisD',
    socialLinks: {
      instagram: 'https://www.instagram.com/krish__sally',
    },
  },
  {
    id: 23,
    name: 'Pihu Aneja',
    imageUrl: 'https://drive.google.com/uc?id=1LF_UXNN-Cilu_rYRL60OGn-Y_EihBNxE',
    socialLinks: {
      instagram: 'https://www.instagram.com/pihuuaneja/',
      linkedin: 'https://www.linkedin.com/in/pihu-aneja-9b204a315/',
    },
  },
  {
    id: 24,
    name: 'Prabhsimran Singh',
    imageUrl: 'https://drive.google.com/uc?id=1NTOh4GgeerPen4LMeF0lHiGRCfRng6KN',
    socialLinks: {
      instagram: 'https://www.instagram.com/simran.szn/',
      linkedin: 'https://www.linkedin.com/in/prabhsimran-singh-945312344/',
    },
  },
  {
    id: 25,
    name: 'Rabaaz Singh Sidhu',
    imageUrl: 'https://photos.app.goo.gl/FFemTVYhBQDJ1zfZ9',
    socialLinks: {
      instagram: 'https://www.instagram.com/rabaazsidhu',
      linkedin: 'https://www.linkedin.com/in/rabaaz-singh-14a827394',
    },
  },
  {
    id: 26,
    name: 'Roopneet Cheema',
    imageUrl: 'https://drive.google.com/uc?id=1XBwgl0gUaFN6broNWffUjyJ7BpKC3lOM',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/roopneet-cheema-614ba9302',
    },
  },
  {
    id: 27,
    name: 'Sach Kanwar Singh Nijjar',
    imageUrl: 'https://photos.app.goo.gl/eCKJvhHdK53ZuTE98',
    socialLinks: {
      instagram: 'https://www.instagram.com/skanwar.nijjar',
      linkedin: 'https://www.linkedin.com/in/sach-kanwar-singh-nijjar-492a4b355',
    },
  },
  {
    id: 28,
    name: 'Sehajpreet Singh Saran',
    imageUrl: 'https://drive.google.com/uc?id=1m6xrP0cHsThYw8oYYrMTZYyzWXjIFfZz',
    socialLinks: {
      instagram: 'https://www.instagram.com/sehaj_.saran',
      linkedin: 'https://www.linkedin.com/in/sehajpreet-singh-saran-505964386',
    },
  },
  {
    id: 29,
    name: 'Sharanpreet Kaur',
    imageUrl: 'https://drive.google.com/uc?id=1wroN9sU-lkSX9HMkpX4xdbj8SiXx4AX7',
    socialLinks: {
      instagram: 'https://www.instagram.com/kaur_.preet2710/',
      linkedin: 'https://www.linkedin.com/in/sharan-kaur-8bab6a372/',
    },
  },
  {
    id: 30,
    name: 'Tanish Garg',
    imageUrl: 'https://drive.google.com/uc?id=1EapYHrj7q7GWz2I8Tz-Z6ACqlX-_F4vC',
    socialLinks: {
      instagram: 'https://www.instagram.com/tanish_garg1',
      linkedin: 'https://www.linkedin.com/in/tanish-garg-710481390',
    },
  },
  {
    id: 31,
    name: 'Yashika',
    imageUrl: 'https://drive.google.com/uc?id=1I4pRPTyIzOo2Fme98tpOjbUZ4brVTjrs',
    socialLinks: {
      instagram: 'https://www.instagram.com/_yashika_sherawat_',
      linkedin: 'https://www.linkedin.com/in/yashika-722899321',
    },
  },
  // {
  //   id: 34,
  //   name: 'Divyanshu Gupta',
  //   imageUrl: 'https://imagizer.imageshack.com/img924/2930/HJ860K.jpg',
  //   socialLinks: {
  //     linkedin: 'https://www.linkedin.com/in/divyanshu-gupta-649773279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  //     instagram: 'https://www.instagram.com/divyanshu.1302?igsh=azdxdnM4b3V4N2ky&utm_source=qr',
  //   }
  // },
  // {
  //   id: 35,
  //   name: 'Dhruv Bansal',
  //   imageUrl: 'https://imagizer.imageshack.com/img922/5937/IFVPW0.jpg',
  //   socialLinks: {
  //     linkedin: 'https://www.linkedin.com/in/dhruv-bansal-837587269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  //     instagram: 'https://www.instagram.com/ik.dhruva5212?igsh=MXVzcGVoNGEwMDhjaw==',
    
  //   }
  // },


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