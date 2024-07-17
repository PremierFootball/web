import { motion } from "framer-motion";
import { TiStarburst } from "react-icons/ti";

const IndividualDevelopment = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">
          Desarrollo Individual
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Logra el mayor potencial
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiStarburst />
          </span>
          Si deseas potenciar a alg&uacute;n jugador en particular o eres
          jugador y buscas alcanzar el m&aacute;ximo de tus habilidades,
          comprender en profundidad las situaciones de juego, corregir y mejorar
          durante tus actuaciones, te ayudaremos a lograrlo
          proporcion&aacute;ndote herramientas. Analizaremos cada detalle y
          prepararemos rutinas de entrenamiento que te permitan avanzar
          constantemente hacia el &eacute;xito.
        </li>
      </ul>
    </motion.div>
  );
};

export default IndividualDevelopment;
