const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 px-4 xl:px-20 flex flex-col gap-4 items-center justify-center mb-20 xl:mb-32 h-screen"
    >
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
          05. ¿Qu&eacute; sigue?
        </p>
        <h2 className="font-titleFont text-5xl font-semibold my-4 text-center">
          Tengamos una charla
        </h2>
        <p className="max-w-[600px] text-center text-textDark">
          Estamos siempre abiertos a explorar nuevos desaf&iacute;os y
          oportunidades donde podamos contribuir como desarrolladores o
          consultores. No dudes en contactarnos si tienes alguna pregunta o
          simplemente quieres conectar.
        </p>

        <div className="mt-8">
          <a href="mailto:premierfootballgrowth@gmail.com">
            <button className="w-40 h-14 border border-textGreen font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
              Enviar Mail
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
