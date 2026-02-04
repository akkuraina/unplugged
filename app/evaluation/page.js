import SectionPage from "@/app/components/SectionPage";

export default function Evaluation() {
  return (
    <SectionPage title="Survival Criteria">
      <div className="grid md:grid-cols-2 gap-10">

        <div className="glass">
          <h2 className="text-3xl text-yellow-400 font-bold mb-4">
            Practical Deployability
          </h2>
          <p>
            Projects will be evaluated on how realistically they can function in
            real-world environments such as forests, reserves, rural terrains, or
            outdoor ecosystems. The focus is on solutions that go beyond theory
            and can be practically implemented with minimal dependencies.
          </p>
        </div>

        <div className="glass">
          <h2 className="text-3xl text-yellow-400 font-bold mb-4">
            Hardware Integration & Innovation
          </h2>
          <p>
            Teams must demonstrate meaningful usage of sensors, microcontrollers,
            communication modules, or embedded systems. Innovation in combining
            hardware components to create intelligent systems will carry
            significant weightage.
          </p>
        </div>

        <div className="glass">
          <h2 className="text-3xl text-yellow-400 font-bold mb-4">
            Sustainability & Environmental Relevance
          </h2>
          <p>
            Solutions aligned with wildlife conservation, environmental
            monitoring, resource optimization, or ecological sustainability will
            be prioritized. Judges will look for ideas that positively impact
            natural habitats and promote responsible engineering.
          </p>
        </div>

        <div className="glass">
          <h2 className="text-3xl text-yellow-400 font-bold mb-4">
            Presentation & System Demonstration
          </h2>
          <p>
            Apart from technical execution, teams will be judged on how clearly
            they communicate their idea, demonstrate working prototypes, and
            explain the real-world application and scalability of their system.
          </p>
        </div>

      </div>
    </SectionPage>
  );
}
