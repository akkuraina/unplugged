import { UNSTOP_REGISTER_URL } from "@/lib/constants";

export default function Register() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <h1 className="heading text-4xl md:text-5xl mb-6 text-center">
        ENTER THE PARK
      </h1>
      <p className="text-amber-100/90 text-lg text-center max-w-xl mb-10">
        Register for Unplugged 3.0 — 24 hours of hardware innovation. Your
        expedition starts here.
      </p>
      <a
        href={UNSTOP_REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="jurassic-btn inline-block text-center"
      >
        REGISTER NOW
      </a>
    </main>
  );
}
