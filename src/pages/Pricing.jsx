export default function Product() {
  return (
    <main className="p-3 mt-10">
      <section className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <h2 className="text-4xl leading-tight mb-12 font-bold">
            Simple pricing.
            <span className="block font-normal mt-2">Just £9/month.</span>
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img
          src="pricing.jpg"
          alt="a map with pins in particular cities"
          className="w-full rounded-lg"
        />
      </section>
    </main>
  );
}
