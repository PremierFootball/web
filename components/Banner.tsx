import { motion } from "framer-motion";
import JoinClubButton from "@/components/JoinClubButton";

const Banner = () => {
  return (
    <section id="home" className="relative bg-banner-background">
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Overlay oscuro */}
      <div className="relative max-w-contentContainer mx-auto py-20 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
        <JoinClubButton />
        <motion.h1
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
        >
          Premier Football Growth
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-base md:max-w-[650px] text-textDark font-medium bg-black bg-opacity-50 rounded p-2"
        >
          En <span className="text-textGreen">Premier Football Growth </span>{" "}
          nos dedicamos a impulsar el crecimiento y desarrollo tanto de
          instituciones deportivas como de jugadores. Nuestro objetivo es
          identificar, invertir y nutrir talento futbolístico, llevándolo a
          alcanzar su máximo potencial y posicionándolo en el más alto nivel del
          fútbol mundial.
        </motion.p>
      </div>
    </section>
  );
};

export default Banner;
