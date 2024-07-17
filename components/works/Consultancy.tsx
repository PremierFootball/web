import { motion } from "framer-motion";
import { TiStarburst } from "react-icons/ti";

const DT = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">Consultor&iacute;a</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Ofrecemos consultor&iacute;a en todas las disciplinas del f&uacute;tbol
        y aspectos del juego.
      </p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex items-start gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiStarburst />
          </span>
          <span>
            <span className="text-textGreen">
              An&aacute;lisis del funcionamiento de la academia
            </span>
            <br />
            Evaluamos las fortalezas y &aacute;reas de mejora de la academia,
            revisamos los programas de entrenamiento y sus progresiones. Si tus
            jugadores desean alcanzar la &eacute;lite pero los resultados
            actuales no cumplen con las expectativas, nuestro trabajo consiste
            en identificar &aacute;reas cr&iacute;ticas de crecimiento que
            motiven al club a alcanzar sus objetivos.
          </span>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiStarburst />
          </span>
          <span>
            <span className="text-textGreen">
              An&aacute;lisis del plantel principal:{" "}
            </span>
            <br /> Realizamos un an&aacute;lisis detallado del equipo principal,
            evaluando el rendimiento individual y colectivo de los jugadores,
            as&iacute; como su alineaci&oacute;n t&aacute;ctica y
            estrat&eacute;gica para optimizar el desempe&ntilde;o en
            competiciones.
          </span>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiStarburst />
          </span>
          <span>
            <span className="text-textGreen">
              An&aacute;lisis de jugadores:{" "}
            </span>
            <br /> Evaluamos el rendimiento individual de los jugadores,
            identificando fortalezas, &aacute;reas de mejora y potencial de
            desarrollo para maximizar su contribuci&oacute;n al equipo.{" "}
          </span>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiStarburst />
          </span>
          <span>
            <span className="text-textGreen">An&aacute;lisis de rivales: </span>
            <br /> Estudiamos a los equipos rivales, analizando su estilo de
            juego, fortalezas y debilidades, para desarrollar estrategias
            efectivas y obtener ventajas competitivas.{" "}
          </span>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiStarburst />
          </span>
          <span>
            <span className="text-textGreen">An&aacute;lisis de torneos: </span>
            <br /> Analizamos las competiciones en las que participa el club,
            evaluando el formato, la calidad de los oponentes y las estrategias
            necesarias para alcanzar los objetivos establecidos.{" "}
          </span>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiStarburst />
          </span>
          <span>
            <span className="text-textGreen">
              An&aacute;lisis institucional:{" "}
            </span>
            <br /> Revisamos la estructura organizativa del club, identificando
            &aacute;reas de mejora en la gesti&oacute;n y administraci&oacute;n,
            asegurando que todas las funciones institucionales est&eacute;n
            alineadas con los objetivos deportivos y financieros del club.{" "}
          </span>
        </li>
      </ul>
    </motion.div>
  );
};

export default DT;
