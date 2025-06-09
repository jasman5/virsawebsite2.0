import { Gallery4 } from "@/app/components/gallery4";
import Link from 'next/link';

const demoData = {
  title: "Events",
  description:
    "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items: [
    {
      id: "gurpurab",
      title: "Gurpurab",
      description: "",
      href: "/events?event=5",
      image:
<<<<<<< HEAD
        "gur7.jpeg",
     


=======
        "Gurupurab25.jpg",
>>>>>>> 1106b71846e9bae01613a028bc5b7facb9f2fd3e
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
<<<<<<< HEAD
        "mela7.jpeg",
=======
        "Mela25.jpg",
>>>>>>> 1106b71846e9bae01613a028bc5b7facb9f2fd3e
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
