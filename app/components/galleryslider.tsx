import { Gallery4 } from "@/app/components/gallery4";
import Link from 'next/link';

const demoData = {
  title: "Events",
  description:
    "At Virsa, we celebrate the vibrant spirit of Punjabi culture through a range of dynamic events. From our grand annual cultural fest that brings together music, dance, and traditional art, to thematic showcases like folk dance competitions, Baisakhi celebrations, and heritage exhibitions, interactive workshops, and collaborative fests with other societies, offering students a platform to express, perform, and preserve our rich cultural legacy.",
  items: [
    {
      id: "gurpurab",
      title: "Gurpurab",
      description: "",
      href: "/events?event=5",
      image:  
        "Gurupurab25.jpg",
    },
    {
      id: "sham-e-virasat",
      title: "Sham-e-Virasat",
      description: "",
      href: "/events?event=1",
      image:
        "mela5.jpeg",
    },
    {
      id: "virsa-mela",
      title: "Virsa Mela",
      description: "",
      href: "/events?event=2",
      image:
        "Mela25.jpg",
    },
    {
      id: "chabeel",
      title: "Chabeel",
      description: "",
      href: "/events?event=3",
      image:
        "chabeel4.jpg",
    },
    {
      id: "turban-tying",
      title: "Rubaru",
      description: "a talk event ",
      href: "/events?event=4",
      image:
        "rubaru4.JPeG",
    },
  ],
};

function Gallery4Demo() {
  return <Gallery4 {...demoData} />;
}

export { Gallery4Demo };
