import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Consultancy from "./works/Consultancy";
import IndividualDevelopment from "./works/IndividualDevelopment";
import DT from "./works/DT";
import Institucional from "./works/Institucional";
import Academy from "./works/Academy";

const Bussines = () => {
  const [workInstitucional, setWorkInstitucional] = useState(true);
  const [workAcademy, setWorkAcademy] = useState(false);
  const [workDT, setWorkDT] = useState(false);
  const [workIndividualDevelopment, setWorkIndividualDevelopment] =
    useState(false);
  const [workConsultancy, setWorkConsultancy] = useState(false);

  const handleInstitucional = () => {
    setWorkInstitucional(true);
    setWorkAcademy(false);
    setWorkDT(false);
    setWorkIndividualDevelopment(false);
    setWorkConsultancy(false);
  };
  const handleAcademy = () => {
    setWorkInstitucional(false);
    setWorkAcademy(true);
    setWorkDT(false);
    setWorkIndividualDevelopment(false);
    setWorkConsultancy(false);
  };
  const handleDT = () => {
    setWorkInstitucional(false);
    setWorkAcademy(false);
    setWorkDT(true);
    setWorkIndividualDevelopment(false);
    setWorkConsultancy(false);
  };
  const handleIndividualDevelopment = () => {
    setWorkInstitucional(false);
    setWorkAcademy(false);
    setWorkDT(false);
    setWorkIndividualDevelopment(true);
    setWorkConsultancy(false);
  };
  const handleConsultancy = () => {
    setWorkInstitucional(false);
    setWorkAcademy(false);
    setWorkDT(false);
    setWorkIndividualDevelopment(false);
    setWorkConsultancy(true);
  };
  return (
    <section
      id="business"
      className="max-w-containerxs mx-auto py-10 lgl:py-32 px-4"
    >
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <SectionTitle title="Actividades en PFG" titleNo="01" />
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
          <ul className="md:w-32 flex flex-col">
            <li
              onClick={handleInstitucional}
              className={`${
                workInstitucional
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              Desarrollo Institucional
            </li>
            <li
              onClick={handleAcademy}
              className={`${
                workAcademy
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              Gesti&oacute;n de la Academia
            </li>
            <li
              onClick={handleDT}
              className={`${
                workDT
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
            >
              Direcci&oacute;n t&eacute;cnica
            </li>
            <li
              onClick={handleIndividualDevelopment}
              className={`${
                workIndividualDevelopment
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
            >
              Desarrollo Individual
            </li>
            <li
              onClick={handleConsultancy}
              className={`${
                workConsultancy
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
            >
              Consultoria
            </li>
          </ul>
          {workInstitucional && <Institucional />}
          {workAcademy && <Academy />}
          {workDT && <DT />}
          {workIndividualDevelopment && <IndividualDevelopment />}
          {workConsultancy && <Consultancy />}
        </div>
      </motion.div>
    </section>
  );
};

export default Bussines;
