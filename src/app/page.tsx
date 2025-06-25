import beach from "../public/beach.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="relative bg-[url('/images/beach.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore the World with Ease 🌍
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Discover hidden gems, plan your perfect trip, and travel smarter with our expert guides.
          </p>
          <a
            href="#"
            className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 text-center">
  <h2 className="text-3xl font-bold mb-6">Top Destinations</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {[
      { name: "Bali", image: "/images/Bali.jpg" },
      { name: "Paris", image: "/images/Paris.jpg" },
      { name: "Tokyo", image: "/images/Tokyo.jpg" },
    ].map((dest, index) => (
      <div
        key={dest.name}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
      >
        <img
          src={dest.image}
          alt={dest.name}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{dest.name}</h3>
          <p className="text-sm text-gray-500 mt-1">
            Experience the charm of {dest.name} with our curated itineraries.
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

    </main>
  );
}
