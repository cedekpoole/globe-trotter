import Button from "../components/Button";

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
        <h2 className="text-lg text-[#F3E9DC] leading-relaxed mb-6">
          Track your footsteps across a world map that highlights every city you
          have visited. Relive your incredible experiences and share your global
          journey with friends, celebrating each adventure along the way.
        </h2>

        <Button link={"/app"}>Get Started</Button>
      </section>
    </main>
  );
}

export default HomePage;
