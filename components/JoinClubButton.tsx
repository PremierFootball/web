import Link from "next/link";

const JoinClubButton = () => {
  return (
    <div className="relative md:absolute md:top-8 md:right-8 z-50 md:block sm:block mb-8 sm:mb-0 sm:w-auto w-full">
      <div className="bg-yellow-500 bg-opacity-80 p-6 border-4 border-yellow-500 rounded-lg shadow-md text-center">
        <h1 className="text-lg font-bold mb-4 text-black">
          ¡Únete a nuestro Club!
        </h1>
        <Link href="/founding">
          <button className="w-full sm:w-40 h-14 border-2 border-yellow-500 font-titleFont text-sm text-black tracking-wider rounded-md hover:bg-yellow-500 hover:text-white duration-300">
            Hazte Fundador
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinClubButton;
