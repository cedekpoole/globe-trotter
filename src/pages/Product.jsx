export default function Product() {
  return (
    <main className="p-3">
      <section className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <img
          src="product.jpg"
          alt="map on table"
          className="w-full max-w-full lg:max-w-md rounded-lg"
        />
        <div>
          <h2 className="text-4xl leading-tight mb-12">About GlobeTrotter.</h2>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p className="text-lg mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
}
