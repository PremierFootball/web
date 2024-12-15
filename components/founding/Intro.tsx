const Intro = () => {
  return (
    <section id="intro" className="text-white text-center py-16 relative">
      <div className="relative z-10 px-6 sm:px-12">
        <p className="text-lg sm:text-xl mb-8 text-left">
          Join a unique and exclusive project. Be part of the future of
          football!
        </p>
        {/* Título alineado a la izquierda */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-[Staatliches] text-left">
          Our business, simple.
        </h1>

        {/* Key Points Boxes */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 justify-center">
          {/* Key Points Box 1 */}
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-lg sm:text-xl inline-block max-w-xs border-4 border-[#8B7500]">
            <div className="flex flex-col gap-2 text-darkBlue uppercase font-bold">
              <p>Recruit young players</p>
              <p>Develop them</p>
              <p>Sell them</p>
            </div>
          </div>

          {/* Key Points Box 2 (Letras doradas, fondo blanco, borde azul) */}
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-lg sm:text-xl inline-block max-w-xs border-4 border-darkBlue">
            <div className="flex flex-col gap-2 text-[#8B7500] uppercase font-bold">
              <p>Build a team</p>
              <p>Compete</p>
              <p>GET rewards</p>
            </div>
          </div>
        </div>

        {/* Caja de texto imaginaria con dos bloques */}
        <div className="p-6 text-darkBlue rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto mt-8 bg-white">
          <p className="font-light text-left mb-4">Can we do it? Yes!</p>
          <p className="font-bold text-center uppercase">
            Uruguay meets all the conditions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
