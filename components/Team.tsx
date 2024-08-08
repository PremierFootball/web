// components/Team.tsx
import { diegoImg, rodrigoImg, fedeImg } from "@/public/assets";
import SectionTitle from "./SectionTitle";
import TeamMember from "./TeamMember";
import { StaticImageData } from "next/image";

interface TeamMemberData {
  name: string;
  position: string;
  description?: string;
  image: StaticImageData;
  linkedin: string;
}

const Team = () => {
  const teamMembers: TeamMemberData[] = [
    {
      name: "Rodrigo García",
      position: "Chief Football Officer",
      description:
        "Enfocado en la estrategia deportiva, formación de juveniles y la gestión técnica del equipo.",
      image: rodrigoImg,
      linkedin: "https://www.linkedin.com/in/hector-rodrigo-garcia-00207868/",
    },
    {
      name: "Diego García",
      position: "Chief Operations Officer",
      description:
        "Encargado de la gestión general de la empresa, optimización de procesos y supervisión de operaciones diarias.",
      image: diegoImg,
      linkedin: "https://www.linkedin.com/in/garciatroisi/",
    },
    {
      name: "Federico Canabal",
      position: "Chief Business Development Officer",
      description:
        "Lider de estrategias de crecimiento, generador de alianzas estratégicas y director de expansión hacia nuevos mercados.",
      image: fedeImg,
      linkedin: "https://www.linkedin.com/in/federico-canabal-a21912b9/",
    },
    // Agrega más miembros del equipo aquí
  ];

  return (
    <section id="team" className="max-w-containerSmall mx-auto py-24 lg:py-28">
      <SectionTitle title="Nuestro Equipo" titleNo="04" />
      <div className="flex flex-wrap justify-center gap-12 mt-8">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            image={member.image}
            name={member.name}
            position={member.position}
            description={member.description}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
