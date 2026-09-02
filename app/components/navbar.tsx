"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Tooltip,
} from "@nextui-org/react";
import Image from 'next/image';
import { motion } from "framer-motion";

export const AcmeLogo = () => {
  return (
    <Image
      src="/logo.png"  // from public folder
      alt="Virsa Logo"
      width={130}
      height={130}
      priority 
      unoptimized // if this is above the fold
      className="object-contain"
    />
  );
};

export default function App_Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", path: "/", punjabi: "ਘਰ" },
    { name: "Gallery", path: "/gallery", punjabi: "ਗੈਲਰੀ" },
    { name: "Events", path: "/events", punjabi: "ਪ੍ਰੋਗਰਾਮ" },
    { name: "Core", path: "/core", punjabi: "ਕੋਰ" },
    { name: "Heads", path: "/heads", punjabi: "ਮੁਖੀ" },
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      maxWidth="full" 
      className="bg-black shadow-md py-1"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <AcmeLogo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Tooltip content={item.punjabi} placement="bottom">
              <Link 
                className="text-xl font-medium relative group" 
                color="foreground" 
                href={item.path}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
              </Link>
            </Tooltip>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="bg-black pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full text-xl flex items-center justify-between py-2"
              color="foreground"
              href={item.path}
              size="lg"
            >
              <span>{item.name}</span>
              <span className="text-orange-600 text-sm">{item.punjabi}</span>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      
    </Navbar>
  );
}
