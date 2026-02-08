export default function Timeline() {
  return (
    <section
      id="timeline"
      className="min-h-screen flex flex-col justify-center items-center text-center px-10"
    >
      <h2 className="text-5xl text-yellow-400 mb-20">
        FROM IDEA TO IMPACT
      </h2>

      <div className="space-y-10 text-xl">
        <div>
          <p className="text-3xl text-yellow-500">10 FEB</p>
          <p>Registrations Open</p>
        </div>

        <div>
          <p className="text-3xl text-yellow-500">10 MAR</p>
          <p>Round 1 Results</p>
        </div>

        <div>
          <p className="text-3xl text-yellow-500">5 APR</p>
          <p>Final Hackathon @ DJSCE</p>
        </div>
      </div>
    </section>
  );
}
