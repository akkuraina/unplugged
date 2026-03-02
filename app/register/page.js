import { UNSTOP_REGISTER_URL } from "@/lib/constants";

export default function Register() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <h1 className="heading text-4xl md:text-5xl mb-6 text-center">
        REGISTER FOR UNPLUGGED 3.0
      </h1>

      <p className="text-amber-100/90 text-lg text-center max-w-xl mb-4">
        Join Unplugged 3.0 — a 24-hour national-level hackathon bringing together
        innovators in IoT and VLSI to build impactful real-world solutions.
      </p>

      <p className="text-amber-100/80 text-base text-center max-w-xl mb-10">
        Participation is completely free of cost. Register through the official
        Unstop platform and begin your journey into innovation.
      </p>

      <a
        href={UNSTOP_REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="jurassic-btn inline-block text-center"
      >
        REGISTER ON UNSTOP
      </a>
    </main>
  );
};