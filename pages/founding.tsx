import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import { motion } from "framer-motion";
import NavbarFounding from "@/components/founding/NavbarFounding";
import Intro from "@/components/founding/Intro";
import HowTo from "@/components/founding/HowTo";
import Benefits from "@/components/founding/Benefits";
import CTA from "@/components/founding/CTA";
import WalletCard from "@/components/founding/WalletLogin";
import ToRise from "@/components/founding/ToRise";

export default function Home() {
  return (
    <>
      <Head>
        <title>PFG</title>
        <meta name="description" content="PFG website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/web/logo.ico" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-gradient-to-r from-darkBlue via-darkBlue to-[#1d4260] text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between relative">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden xl:inline-flex w-32 h-full absolute left-0 bottom-0 z-10"
          />

          <div className="h-[88vh] mx-auto p-4 relative z-0">
            {/* Flex Container for Intro and WalletCard */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col xl:flex-row gap-8 justify-between"
            >
              {/* Intro */}
              <div className="flex-1">
                <Intro />
              </div>

              {/* Wallet Card */}
              <div className="xl:w-[350px] flex-shrink-0">
                <WalletCard />
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {/* <Benefits /> */}
            </motion.div>
            {/* HowTo */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <ToRise />
            </motion.div>
            {/* HowTo */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <HowTo />
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              <CTA />
            </motion.div>
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden xl:inline-flex w-32 h-full absolute right-0 bottom-0 z-10"
          />
        </div>
      </main>
    </>
  );
}
