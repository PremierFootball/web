import { motion } from "framer-motion";
import { TiStarburst } from "react-icons/ti";

const Academy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">
          Gesti&oacute;n de la Academia
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        PFG se har&aacute; cargo de toda la organizaci&oacute;n, crecimiento y
        el &eacute;xito de las formativas del club.
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiStarburst />
          </span>
          Una modalidad es como consultor&iacute;a, donde tomaremos control de
          las actividades para potenciarlas en la direcci&oacute;n que el club
          desee.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiStarburst />
          </span>
          Otra modalidad es como asociado, donde PFG se responsabiliza de los
          costos del sistema de formaci&oacute;n del club contratante y a cambio
          el club otorgar&aacute; un porcentaje preestablecido de la
          cesi&oacute;n de los derechos deportivos de los deportistas cuando
          estos sean transferidos.
        </li>
      </ul>
    </motion.div>
  );
};

export default Academy;
