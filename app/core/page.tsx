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
      linkedin: 'https://www.linkedin.com/in/jasman05',
    }
  },
  {
    id: 2,
    name: 'Harshleen',
    imageUrl: 'https://imagizer.imageshack.com/img924/1177/hBycxa.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/harshleen-kaur-8196042b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/harshleen_kaur08?igsh=NGlpODd2djBub2Qz&utm_source=qr',
    }
  },
  {
    id: 3,
    name: 'Harshit Kamra',
    imageUrl: 'https://imagizer.imageshack.com/img922/5/8jQIv2.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/harshit-kamra-7a2aab284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/harshit._.kamra?igsh=aGZxdW10ZnoycXlz',
    
    }
  },
  {
    id: 4,
    name: 'Trishti',
    imageUrl: 'https://imagizer.imageshack.com/img922/5997/8JKEnv.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/trishti-singla-946703274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/trishti_singla?igsh=MTludmd1M3MxdGl0bA==',
    }
  },
  {
    id: 5,
    name: 'Maheep Singh Dhanju',
    imageUrl: 'https://imagizer.imageshack.com/img924/4157/dL2Ppt.png',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/maheep-singh-dhanju-b5434b28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/mxdhnju?igsh=YzE2cmd2eHUyM3c0&utm_source=qr'
    }
  },
  {
    id: 6,
    name: 'Meharpreet Singh',
    imageUrl: 'https://imagizer.imageshack.com/img924/6632/ewNEBr.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/meharpreet-singh-594109244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/_mehar96?igsh=MWw2NWxvb3c5ajl2cg%3D%3D&utm_source=qr'
    }
  },
  {
    id: 7,
    name: 'Pooja Bisht',
    imageUrl: 'https://imagizer.imageshack.com/img923/206/stVTzI.jpg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://www.linkedin.com/in/pooja-bisht-987662315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
  },
  {
    id: 8,
    name: 'Arshia',
    imageUrl: 'https://imagizer.imageshack.com/img924/8975/5r6xTG.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/arshia-5a56aa295',
      instagram: 'https://www.instagram.com/arshia._08?igsh=ZjllbTBua2QzcGo3',
    }
  },
  {
    id: 9,
    name: 'Pahuldeep Singh Bajwa',
    imageUrl: 'https://imagizer.imageshack.com/img922/4932/7bQhVz.jpg',
    socialLinks: {
      linkedin: 'http://linkedin.com/in/pahul-bajwa-313524304',
      instagram: 'https://www.instagram.com/pahuldeepbajwa?igsh=Z25xcjJubjVrd3Zs',
    }
  },
  {
    id: 10,
    name: 'Udaypartap Singh Brar',
    imageUrl: 'https://imagizer.imageshack.com/img923/7152/vJ7dto.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/udaypartap-singh-586559304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/udaypartap.singh.brar?igsh=enB0OG45cWRvNWFl',
    }
  },
  {
    id: 11,
    name: 'Manleen Kaur',
    imageUrl: 'https://imagizer.imageshack.com/img922/3254/ZgFCos.jpg',
    socialLinks: {
      linkedin: 'http://linkedin.com/in/manleen-kaur-3a9b3029a',
      instagram: 'https://www.instagram.com/manleenbajwa?igsh=aGV1ZjVuMmxlMngx',
    }
  },
  {
    id: 12,
    name: 'Sahibnoor Kaur',
    imageUrl: 'https://imagizer.imageshack.com/img923/1623/BBKn4S.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/sahibnoor-kaur-388943327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/sahibnoor._kaur?igsh=aWkxZ3JuNjc4ODdr',
    }
  },
  {
    id: 13,
    name: 'Jahanvi Singhal',
    imageUrl: 'https://imagizer.imageshack.com/img923/3721/MzmOxU.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/jahanvi-singhal-33981b29a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/jahanvisinghal_15?igsh=MXh2dTRuM3RkNndlbQ==',
    }
  },
  {
    id: 14,
    name: 'Japneet',
    imageUrl: 'https://imagizer.imageshack.com/img923/5948/BXDojA.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/japneet-kaur-8a89a825a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/japneetsoni_?igsh=YWhmdzBhajBha3o5&utm_source=qr',
    }
  },

  {
    id:15,
    name: 'Pratham Garg',
    imageUrl: 'https://imagizer.imageshack.com/img924/8923/PHMecH.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/pratham-garg-4ab560288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/prathamm.garggg?igsh=MWRrOXNwYjM5bGkzNw%3D%3D&utm_source=qr',
    }
  },
  {
    id: 16,
    name: 'Dapinder Singh',
    imageUrl: 'https://imagizer.imageshack.com/img923/6814/4zjPzl.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://www.instagram.com/dapindersinghbadesha?igsh=MWMwZnhzb2dsdnZxbg%3D%3D&utm_source=qr',
    }
  },
  {
    id: 17,
    name: 'Dhanveer Singh',
    imageUrl: 'https://imagizer.imageshack.com/img924/3048/L5pa29.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/dhanveer-singh-53b058293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/dhanveersingh1481?igsh=NGVhN2U2NjQ0Yg==',
    }
  },
  {
    id: 18,
    name: 'Harnoor Kaur',
    imageUrl: 'https://imagizer.imageshack.com/img923/5418/Vh6ua3.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/harnoor-kaur-756b53314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/kaurx.harnoor?igsh=MTd6aGl6cGg4Zmd5dA==',
    }
  },
  {
    id: 19,
    name: 'Jugadh Singh',
    imageUrl: 'https://imagizer.imageshack.com/img923/3941/2aR4Gb.jpg',
    socialLinks: {
      instagram: 'https://www.instagram.com/jugadh_singh?igsh=OXphZGttdW9wanRy',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 20,
    name: 'Gurkirat Singh',
    imageUrl: 'https://imagizer.imageshack.com/img923/4139/gtk7De.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/gurkirat-singh-60639a2a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/sxndhugurkirat?igsh=MWNrcGt1YWxhNjdmMw==',
    }
  },
  {
    id: 21,
    name: 'Nityam',
    imageUrl: 'https://imagizer.imageshack.com/img924/1775/LOldyJ.jpg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://www.linkedin.com/in/nityam-%E2%80%8E-%E2%80%8E-1b01ab267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    }
   
  },
  {
    id: 22,
    name: 'Hridyum Bindal',
    imageUrl: 'https://imagizer.imageshack.com/img924/8225/2V6CBB.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/hridyum-bindal-772383312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/hridyum_?igsh=c2psYXFoZDI1dzZi',
    }
  },
  {
    id: 23,
    name: 'Ishanpreet Singh',
    imageUrl: 'https://imagizer.imageshack.com/img924/6384/ojS7I4.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/ishanpreet-singh-4ab0aa26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/ishaanpreet?igsh=MTZybng0b2I5cDloMA%3D%3D&utm_source=qr',
    }
  },
  {
    id: 24,
    name: 'Balkirat Singh',
    imageUrl: 'https://imagizer.imageshack.com/img922/7052/KrJdru.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      instagram:''
    }
  },
  {
    id: 25,
    name: 'Shehbaz Singh Sidhu',
    imageUrl: 'https://imagizer.imageshack.com/img922/4065/a5RWhe.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/shehbaz-ssidhu/',
      instagram: 'https://www.instagram.com/sidhushehbaz?igsh=ZXFhemY2dzdpaG5p&utm_source=qr',
    }
  },
  {
    id: 26,
    name: 'Harnoor Kaur',
    imageUrl: 'https://imagizer.imageshack.com/img924/1218/ArWtei.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/harnoor-kaur-36a0a9272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/harnoor7024?igsh=bG9uc3d3MnBzc2Zn&utm_source=qr',
    }
  },
  {
    id: 27,
    name: 'Amitoj Singh',
    imageUrl: 'https://imagizer.imageshack.com/img922/9017/NSlPm5.png',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/amitoj-singh-65424b287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/amitojammy04?igsh=MWJjcm9lZGl1eGN0aA%3D%3D&utm_source=qr',
    }
  },
  {
    id: 28,
    name: 'Jasmine Kaur',
    imageUrl: 'https://imagizer.imageshack.com/img922/8199/JxqZpN.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/jasmine-kaur-765051297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/jasmine_28kaur?igsh=eTZqeXh0dmF0NGl5&utm_source=qr',
    }
  },
  {
    id: 29,
    name: 'Manjot Singh Gill',
    imageUrl: 'https://imagizer.imageshack.com/img922/3294/VrYSLi.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/manjot-singh-gill-54b08b29a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/manjot.gill62?igsh=ZGR2NXB5Zm55YTd4',
    }
  },
  {
    id: 30,
    name: 'Khushveen Sadiora',
    imageUrl: 'https://imagizer.imageshack.com/img922/1597/KP6vWz.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/khushveen-sadiora-399905320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/sadiora_khushveen?igsh=MWloaWl2ZHBpeGF6ag==',
    },
  },
  {
    id: 31,
    name: 'Prabhjot Singh',
    imageUrl: 'https://imagizer.imageshack.com/img924/7029/8lo5Tt.jpg',
    socialLinks: {
      linkedin: 'http://www.linkedin.com/in/prabhjotsingh84',
      instagram: 'https://www.instagram.com/prabh84_/',
    }
 
  },
  {
    id: 32,
    name: 'Jasmeen',
    imageUrl: 'https://imagizer.imageshack.com/img922/4266/bH6cXr.jpg',
    socialLinks: {
      instagram: 'https://www.instagram.com/_jasmeen_25?igsh=MXh3YjZvd2lkMGVyeg%3D%3D&utm_source=qr',
    }
  },
  {
    id: 33,
    name: 'Tulsi Relia',
    imageUrl: 'https://imagizer.imageshack.com/img922/7030/FP6bXh.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/tulsi-relia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/tulsi_relia?igsh=Y3lrMGh0bWtmeTdi',
    }
  },
  {
    id: 34,
    name: 'Divyanshu Gupta',
    imageUrl: 'https://imagizer.imageshack.com/img924/2930/HJ860K.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/divyanshu-gupta-649773279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/divyanshu.1302?igsh=azdxdnM4b3V4N2ky&utm_source=qr',
    }
  },
  {
    id: 35,
    name: 'Dhruv Bansal',
    imageUrl: 'https://imagizer.imageshack.com/img922/5937/IFVPW0.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/dhruv-bansal-837587269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/ik.dhruva5212?igsh=MXVzcGVoNGEwMDhjaw==',
    
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