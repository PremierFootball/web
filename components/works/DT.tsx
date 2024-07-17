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
        <span className="text-textGreen tracking-wide">
          Direcci&oacute;n t&eacute;cnica
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Disfruta de ver el f&uacute;tbol bien entendido y ejecutado.
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiStarburst />
          </span>
          Nos encargamos de dirigir el plantel de primera o la categor&iacute;a
          que deseen potenciar, no solo logrando el &eacute;xito deportivo, sino
          tambi&eacute;n los objetivos puntuales del club, como potenciar
          jugadores, desarrollar talento en posiciones espec&iacute;ficas del
          campo, entre otros.
        </li>
      </ul>
    </motion.div>
  );
};

export default DT;
