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
        "Gurupurab25.jpg",
    },
    {
      id: "sham-e-virasat",
      title: "Sham-e-Virasat",
      description: "",
      href: "/events?event=1",
      image:
        "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
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
        "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "turban-tying",
      title: "Turbam Tying",
      description: "",
      href: "/events?event=4",
      image:
        "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ],
};

function Gallery4Demo() {
  return <Gallery4 {...demoData} />;
}

export { Gallery4Demo };
