// components/TeamMember.tsx
import Image, { StaticImageData } from "next/image";
import { SlSocialLinkedin } from "react-icons/sl"; // Puedes usar el ícono tradicional aquí

interface TeamMemberProps {
  image: StaticImageData;
  name: string;
  position: string;
  description?: string;
  linkedin: string; // Campo obligatorio para LinkedIn
}

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  position,
  description,
  linkedin,
}) => {
  return (
    <div className="flex flex-col border-2 border-textGreen rounded-lg w-72 overflow-hidden">
      <div className="w-full h-60 relative">
        <Image
          className="object-cover w-full h-full"
          src={image}
          alt={`${name}'s photo`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-center text-center p-4">
        <div className="flex items-center mb-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-600 hover:text-blue-800"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <div className="flex items-center justify-center w-8 h-8 bg-blue-800 rounded-md mx-auto">
              <SlSocialLinkedin size={16} className="text-gray-200" />
            </div>
          </a>
        </div>
        <p className="text-sm text-textGreen mb-2">{position}</p>
        {description && (
          <p className="text-sm text-gray-200 mb-4">{description}</p>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
