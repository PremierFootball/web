import { motion } from "framer-motion";
import { TiStarburst } from "react-icons/ti";

const Institucional = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">
          Desarrollo Institucional
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        El f&uacute;tbol es un todo. PFG se ocupar&aacute; de desarrollarlo
        todo.
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiStarburst />
          </span>
          Gesti&oacute;n de Derechos de F&uacute;tbol: Desde la cancha, la
          oficina, hasta las redes sociales, b&uacute;squeda de sponsors y el
          resto de actividades relacionadas con el producto f&uacute;tbol, la
          empresa se ocupar&aacute; de que su club crezca y se transforme en una
          instituci&oacute;n de &eacute;xito. Ganar no es solo dentro de la
          cancha, se debe dar al club una estructura econ&oacute;mica,
          organizativa y futbol&iacute;stica tal, que permita obtener resultados
          de forma continua y permanente.
        </li>
      </ul>
    </motion.div>
  );
};

export default Institucional;
