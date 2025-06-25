'use client';

import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main className="bg-white text-gray-800">
      {/* NAVBAR */}
      <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl font-bold text-yellow-500">🌍 TravelGo</div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-600 font-medium">
          <a href="#" className="hover:text-yellow-500 transition">Home</a>
          <a href="#" className="hover:text-yellow-500 transition">Destinations</a>
          <a href="#" className="hover:text-yellow-500 transition">About</a>
          <a href="#" className="hover:text-yellow-500 transition">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="pt-24 sm:pt-32 relative bg-[url('/images/beach.jpg')] bg-cover bg-center min-h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div
          data-aos="fade-up"
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Discover Your Next Great Escape
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6">
            Find the world’s best travel spots, curated just for you.
          </p>
          <a
            href="#"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold shadow hover:bg-yellow-300 transition duration-300"
          >
            Plan My Trip
          </a>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          ✈️ Popular Destinations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { name: "Bali", image: "/images/Bali.jpg" },
            { name: "Paris", image: "/images/Paris.jpg" },
            { name: "Tokyo", image: "/images/Tokyo.jpg" },
          ].map((dest, i) => (
            <div
              key={dest.name}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{dest.name}</h3>
                <p className="text-sm text-gray-600">
                  Experience the beauty of {dest.name} with our expert-curated travel plans.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="bg-yellow-100 py-16 px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
          Ready to explore the world?
        </h2>
        <p className="mb-6 text-gray-700 text-sm sm:text-base">
          Join thousands of travelers planning their dream trips.
        </p>
        <a
          href="#"
          className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition"
        >
          Get Started
        </a>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} builder clan 
      </footer>
    </main>
  );
}
