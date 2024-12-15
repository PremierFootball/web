const Benefits = () => {
  return (
    <section
      id="benefits"
      className="py-16 bg-opacity-80 bg-yellow-500 bg-opacity-20"
    >
      <h2 className="text-3xl font-semibold text-center mb-8">
        Beneficios de ser Fundador
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Acceso Exclusivo</h3>
          <p>
            Obtén acceso a eventos y actividades exclusivas para miembros
            fundadores.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Voz en el Club</h3>
          <p>
            Tendrás la oportunidad de participar activamente en la toma de
            decisiones del club.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Beneficios Financieros</h3>
          <p>
            Recibe un porcentaje de las ganancias generadas por el club y sus
            actividades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
