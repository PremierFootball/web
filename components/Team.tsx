// components/Team.tsx
import { diegoImg, rodrigoImg, fedeImg, iveteImg } from "@/public/assets";
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
        "Lider de alianzas estratégicas, crecimiento y expansión hacia nuevos mercados. Director de Marketing.",
      image: fedeImg,
      linkedin: "https://www.linkedin.com/in/federico-canabal-a21912b9/",
    },
    {
      name: "Ivete Scarpari",
      position: "Head of Mental Performance",
      description:
        "Responsable de diseñar, implementar y supervisar programas de entrenamiento y salud mental para el equipo",
      image: iveteImg,
      linkedin: "https://www.linkedin.com/in/ivete-scarpari-garcia-3ab72222/",
    },
    // Agrega más miembros del equipo aquí
  ];

  return (
    <section id="team" className="max-w-containerSmall mx-auto py-24 lg:py-28">
      <SectionTitle title="Nuestro Equipo" titleNo="04" />
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 flex justify-center min-w-[300px]"
          >
            <TeamMember
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.description}
              linkedin={member.linkedin}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
