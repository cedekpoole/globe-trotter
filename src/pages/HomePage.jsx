function HomePage() {
  return (
    <main className="flex flex-col items-center p-6 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat rounded-lg">
      <section className="flex flex-col items-center justify-center text-center mt-16 max-w-2xl bg-[#242424] bg-opacity-80 p-8 rounded-xl shadow-lg">
        <h1 className="font-montserrat text-6xl font-semibold mb-6 text-[#F3E9DC]">
          Explore the world with{" "}
          <span className="font-bold block text-[#E2B07E] p-1">
            GlobeTrotter
          </span>
        </h1>
        <h2 className="font-raleway text-lg text-[#F3E9DC] leading-relaxed mb-4">
          Track your footsteps across a world map that highlights every city you
          have visited. Relive your incredible experiences and share your global
          journey with friends, celebrating each adventure along the way.
        </h2>
        <button className="mt-6 px-6 py-2 rounded-full bg-[#A6714D] text-[#F3E9DC] text-lg font-medium hover:bg-[#91603C] transition-colors duration-300 ease-in-out shadow-md">
          Get Started
        </button>
      </section>
    </main>
  );
}

export default HomePage;
