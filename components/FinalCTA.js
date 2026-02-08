import { UNSTOP_REGISTER_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="py-32 text-center px-6">
      <h2 className="heading text-3xl md:text-4xl mb-8">
        INNOVATION IS TEMPORARY. IMPACT IS NOT.
      </h2>
      <p className="text-amber-100/80 mb-10 max-w-xl mx-auto">
        Join the expedition. 24 hours. Hardware. No limits.
      </p>
      <a
        href={UNSTOP_REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="jurassic-btn inline-block"
      >
        BE PART OF UNPLUGGED 3.0
      </a>
    </section>
  );
}
