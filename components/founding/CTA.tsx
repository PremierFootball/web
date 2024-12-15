import Link from "next/link";

const CTA = () => {
  return (
    <section id="cta" className="text-center py-16">
      <h2 className="text-3xl font-semibold mb-4">¡Hazte Fundador Ahora!</h2>
      <p className="text-lg mb-8">
        Únete a nuestro club y forma parte del crecimiento y desarrollo de
        nuestra institución.
      </p>
      <Link href="/founding">
        <button className="w-40 h-14 border border-textGreen font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Hazte Fundador
        </button>
      </Link>
    </section>
  );
};

export default CTA;
