"use client";

import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

import { Button } from "@/app/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data = [
  {
    id: "shadcn-ui",
    title: "shadcn/ui: Building a Modern Component Library",
    description:
      "Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
    href: "https://ui.shadcn.com",
    image:
      "gur5.jpeg",
  },
  // Other sample data items
];

const Gallery4 = ({
  title = "Events",
  description = "Discover our vibrant cultural celebrations that showcase the rich heritage of Punjab.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-12 md:py-16 overflow-hidden bg-gradient-to-b rounded-medium from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-amber-900/10 to-transparent -z-10"></div>
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-amber-800/10 blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-amber-700/10 blur-3xl -z-10"></div>
        
        {/* Section Header */}
        <div className="mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-amber-500 font-medium uppercase tracking-wider text-sm accent-text">Celebrating Our Culture</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-title text-amber-400 mb-4 punjabi-accent"
          >
            {title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-amber-100/80 body-text max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        {/* Navigation Controls - Desktop */}
        <div className="hidden md:flex justify-center gap-4 mb-6">
          <Button
            size="lg"
            variant="outline"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="rounded-full w-12 h-12 p-0 border-amber-700 text-amber-500 hover:bg-amber-900/50 hover:text-amber-400 disabled:opacity-50 transition-all duration-300"
          >
            <ArrowLeft className="size-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="rounded-full w-12 h-12 p-0 border-amber-700 text-amber-500 hover:bg-amber-900/50 hover:text-amber-400 disabled:opacity-50 transition-all duration-300"
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full mt-6">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: true,
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="w-full"
        >
          <CarouselContent className="ml-4 md:ml-8 lg:ml-12">
            {items.map((item, index) => (
              <CarouselItem
                key={item.id}
                className="pl-4 md:pl-6 lg:pl-8 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/4"
              >
                <Link 
                  href={item.href} 
                  className="block"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="relative overflow-hidden rounded-2xl punjabi-card-hover bg-gray-900 shadow-lg aspect-[4/5]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/70 to-transparent z-10"></div>
                    
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={`/${item.image}`}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Cultural pattern overlay */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30 mix-blend-overlay"></div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20 transition-all duration-300">
                      <h3 className="card-title text-amber-400 mb-2 drop-shadow-md">{item.title}</h3>
                      
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: hoveredItem === item.id ? 'auto' : 0,
                          opacity: hoveredItem === item.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-amber-100/80 text-sm mb-4">{item.description}</p>
                        <div className="flex items-center text-amber-500 text-sm font-medium">
                          Explore Event <ExternalLink className="ml-2 size-4" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-6 bg-amber-500" : "w-2 bg-amber-700/50"}`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Mobile Navigation Controls */}
        <div className="flex justify-center gap-4 mt-4 md:hidden">
          <Button
            size="sm"
            variant="outline"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="rounded-full w-10 h-10 p-0 border-amber-700 text-amber-500"
          >
            <ArrowLeft className="size-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="rounded-full w-10 h-10 p-0 border-amber-700 text-amber-500"
          >
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
