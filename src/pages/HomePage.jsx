import PageNav from "../components/PageNav";

function HomePage() {
  return (
    <main>
      <PageNav />
      <section className="flex flex-col items-center justify-center text-center mt-20 max-w-lg">
        <h1 className="font-montserrat text-5xl mb-5">
          Explore the world with{" "}
          <span className="font-bold block p-1">GlobeTrotter</span> your
          ultimate travel companion
        </h1>
        <h2 className="font-raleway text-xl">
          Track your footsteps across a world map that highlights every city you
          have visited. Relive your incredible experiences and share your global
          journey with friends, celebrating each adventure along the way.
        </h2>
      </section>
    </main>
  );
}

export default HomePage;
