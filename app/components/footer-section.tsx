"use client"

import * as React from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
// import { Label } from "@/app/components/ui/label"
// import { Switch } from "@/app/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/tooltip"
import { BookOpen, Facebook, Flame, Instagram, Linkedin, MapPin, Moon, Music, Phone, Send, Sun, Twitter } from "lucide-react"

const FooterSection: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(true)

  React.useEffect(() => {             
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative bg-background text-foreground transition-colors duration-300">
      <div className="absolute inset-0 bg-[url('/logopng.svg')] bg-center bg-no-repeat opacity-5 dark:opacity-[0.03] pointer-events-none bg-contain"></div>
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8 relative">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-2 text-2xl font-bold tracking-tight">ਵਿਰਸਾ <span className="text-primary">Society</span></h2>
            <p className="mb-3 text-sm text-muted-foreground">
              Preserving and celebrating the rich heritage of Punjabi culture.
            </p>
            <div className="flex items-center gap-2">
              <Music className="h-4 w-4 text-primary" />
              <p className="text-sm italic">"ਸਾਡਾ ਵਿਰਸਾ, ਸਾਡੀ ਪਹਿਚਾਣ"</p>
            </div>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <a href="#" className="transition-colors hover:text-primary">
                Home
              </a>
              <a href="/events" className="transition-colors hover:text-primary">
                Events
              </a>
              <a href="/gallery" className="transition-colors hover:text-primary">
                Gallery
              </a>
              <a href="/core" className="transition-colors hover:text-primary">
                Core Team
              </a>
              <a href="/heads" className="transition-colors hover:text-primary">
                Heads
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <p>Thapar Institute, Patiala</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-2">
                <Send className="h-4 w-4 text-primary" />
                <p>virsa@thapar.edu</p>
              </div>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-2 text-lg font-semibold">Cultural Highlights</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2 group">
                <Flame className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium group-hover:text-primary transition-colors">Bhangra & Giddha</h4>
                  <p className="text-xs text-muted-foreground">Traditional folk dances</p>
                </div>
              </div>
              <div className="flex items-start gap-2 group">
                <BookOpen className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium group-hover:text-primary transition-colors">Punjabi Heritage</h4>
                  <p className="text-xs text-muted-foreground">Cultural workshops & exhibitions</p>
                </div>
              </div>
            </div>
            <h3 className="mb-1 mt-3 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://facebook.com/virsasociety" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:text-primary">
                        <Facebook className="h-3.5 w-3.5" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.instagram.com/virsa.thapar/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:text-primary">
                        <Instagram className="h-3.5 w-3.5" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://twitter.com/virsasociety" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:text-primary">
                        <Twitter className="h-3.5 w-3.5" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://linkedin.com/company/virsa-society" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:text-primary">
                        <Linkedin className="h-3.5 w-3.5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t pt-4 text-center md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2025 Virsa Society, Thapar Institute. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground italic">
            ਸਾਡੀਆਂ ਜੜ੍ਹਾਂ, ਸਾਡਾ ਮਾਣ | Our roots, our pride
          </div>
        </div>
      </div>
    </footer>
  )
}

export { FooterSection }