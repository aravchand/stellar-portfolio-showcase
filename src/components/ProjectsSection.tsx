import ProjectCard from './ProjectCard';

const featuredProjects = [
  {
    title: 'Halt Hate',
    description:
      // 'A proactive safety app designed to combat bullying through real-time alerts with location and evidence documentation. Built with Flutter, Dart, and native Swift and Kotlin to integrate a novel multi-media messaging pipeline (previously unavailable in Flutter).',
      // "I developed this proactive safety app to combat bullying and harassment through real-time alerts with location sharing and multimedia evidence documentation. Built with Flutter and Dart, with native Swift and Kotlin integrations, the app implements a custom MMS messaging pipeline (functionality that was previously unavailable in Flutter) to transmit audio and contextual data instantly to trusted contacts. Since launch, Halt Hate has reached 25,000+ users, been published on the App Store, and recognized by local and state officials, including a New York State Senate citation for Civic Technology innovation. I worked directly with Huntington Town Council and NYS Senator Office of Civic Engagement to refine the app’s safety workflows, ensuring it addressed real-world needs around accountability, rapid response, and user privacy. The project reflects my focus on building technically rigorous systems with measurable social impact.",
      "I developed this proactive safety app to combat bullying and harassment through real-time alerts with location sharing and multimedia evidence documentation. Built with Flutter and Dart, with native Swift and Kotlin integrations, the app implements a custom MMS messaging pipeline (functionality that was previously unavailable in Flutter) to transmit audio and contextual data instantly to trusted contacts. Since launch, Halt Hate has reached 25,000+ users, been published on the App Store, and recognized by local and state officials, including a New York State Senate citation for Civic Technology innovation. I worked directly with Huntington Town Council and NYS Senator Office of Civic Engagement to refine the app’s safety workflows, ensuring it addressed real-world needs around accountability, rapid response, and user privacy.",
      links: { demo: '#', github: '#' },
  },
  {
    title: 'MIT-NASA ZeroRobotics',
    description:
      // 'MIT-NASA Zero Robotics is a national programming competition where teams develop autonomous algorithms to control NASA’s Astrobee free-flying robots aboard the International Space Station. I collaborated on designing, simulating, and optimizing control and navigation algorithms under strict constraints on fuel, time, and sensor data, translating physical dynamics into reliable, real-time decision logic. I led my team of 7 as we advanced through competitive rounds and earned Top 3 nationally, with our code executed live in a microgravity environment aboard the ISS. The project required rigorous testing, mathematical modeling, and systems-level thinking, bridging theory and practice in one of the most constrained and high-stakes computational settings possible. The experience solidified my interest in algorithmic control, optimization, and space-grade software systems.',
      'MIT-NASA ZeroRobotics "Lost in Space" is a national programming competition where teams develop autonomous algorithms to control NASA’s Astrobee free-flying robots aboard the International Space Station. As the Software Lead, I led my team of 7 as we advanced through competitive rounds and earned Top 3 nationally, with our code executed live in a microgravity environment aboard the ISS. I collaborated on designing, simulating, and optimizing control and navigation algorithms under strict constraints on fuel, time, and sensor data. The project required rigorous testing, mathematical modeling, and systems-level thinking, where I organized productivity-first and open-model brainstorming sessions to foster innovation and collaboration.',
    links: { demo: '#', paper: '#' },
  },
  {
    title: 'Uber Link',
    description:
      'Uber Link is a data-driven sustainability project developed in collaboration with Uber, focused on optimizing ride-routing decisions to reduce emissions without sacrificing rider experience. Our team designed and evaluated algorithmic routing strategies that incorporated congestion patterns, trip efficiency, and environmental cost metrics to propose greener default pathways within large-scale urban mobility systems; using example data from Barcelona, our routing projects a 45% reduction in CO2 and PM-10 pollutant emissions. In the Uber Global Hackathon 2023, the project earned Top 3 out of 2,400 teams globally and placed best in the Data Analysis track, validating both its technical rigor and real-world relevance. Through this work, I explored how mathematical modeling and optimization can influence platform-level decisions at scale.',
    links: { demo: '#', video: '#' },
  },
  {
    title: 'AirControl',
    description:
      'AirControl is an accessibility-focused interaction system that reimagines device control using spatial input rather than traditional touch interfaces. I co-developed this assistive tool employing PyAutoGUI and MediaPipe to map user motion and environmental awareness to precise command execution, enabling more inclusive human-computer interaction in constrained or mobility-limited contexts. This project won the top award for "Innovation and Usability" from 60+ teams at TeenHacksLI, the largest hackathon in the NYC Metro area. I later extended this work with guidance from the MIT SpaceEnabled research group into a VR-based LiDAR simulation environment, where I modeled depth sensing and spatial mapping pipelines through MetaXR to explore how real-time 3D perception can enhance interaction accuracy and situational awareness.',
    links: { paper: '#', github: '#' },
  },
  {
    title: 'NASA Engineering Institute',
    description:
      'NASA Glenn Engineering Institute is a highly selective, immersive engineering program, where I was chosen as 1 of 60 students nationwide to conduct applied research at NASA’s Glenn Research Center in Cleveland, OH. I designed and tested custom Mars-rover wheel geometries, using the JPL Grouser Spacing Equation to optimize tread design for traction and load distribution. We conducted testing on a seven-degree regolith slopebed simulating extraplanetary terrain, where our final design outperformed Curiosity’s rover wheel by 35% in traction efficiency. In a parallel project, I helped design an acoustic dampening system that reduced noise by 23 decibels without restricting airflow, modeling constraints similar to those faced in jet engine takeoff to mitigate harmful noise pollution.',
    links: { demo: '#' },
  },
  {
    title: 'Cyberbullying Sentiment Classification',
    description:
      'I developed a machine learning research project focused on detecting and categorizing harmful language within digital environments. I developed a Support Vector Machine (SVM)–based sentiment classification pipeline in Python using TensorFlow, trained on 40,000+ human-labeled tweets spanning ethnicity-, gender-, religion-, and age-based cyberbullying, as well as non-bullying content. Using word2vec embeddings for semantic representation, the model achieved 91.43% accuracy on previously unseen data, with low false-negative rates across most categories. I then integrated the trained model into Google Workspace via Google Colaboratory, enabling automated scanning and classification to flag potential cyberbullying in real time.',
    links: { github: '#', demo: '#' },
  },
];

const researchProjects = [
  {
    // title: 'Primes in Pascal-like Hyperpyramids',
    title: 'Universal Matrix for Prime Divisibility',
    description:
      // 'This is a research contribution in combinatorial number theory and algebraic combinatorics that extends classical enumerative formulas to broad new families of generalized binomial coefficients. Building on Rowland’s matrix product formula for counting standard binomial coefficients by their divisibility by a prime p, I developed universal matrix product formulas that count Fibonomial and C-nomial coefficients for any strong divisibility sequence—and showed these matrices are independent of the underlying sequence. I further generalized these constructions to C-multinomial coefficients, unifying and broadening tools for analyzing prime divisibility distributions in combinatorial sequences. This work was published on Integers, won the Top 4 Grand Award at the International Science and Engineering Fair (ISEF) 2025, and has been presented at multiple mathematics conferences (MAA Mid-Atlantic Conference, AMS Fall Southeastern Sectional Meeting, Jane Street\'s NYC Math Day, etc.). Predecessor project won at ISEF 2024: the AMS Karl Menger Memorial Award and the NSA Research Directorate Award.',
      'In this combinatorial number theory and algebraic combinatorics research, I extended classical enumerative formulas to broad new families of generalized binomial coefficients. I developed universal matrix product formulas that count Fibonacci analogues of binomial coefficients (and in general, C-nomial coefficients for any strong divisibility sequence C); I showed these matrices are independent of the underlying sequence C. This work unifies tools for analyzing prime divisibility distributions in combinatorial sequences. This work was published in the Integers journal, won the Top 4 Grand Award in Mathematics at the International Science and Engineering Fair (ISEF) 2025, and has been presented at multiple mathematics conferences (MAA Mid-Atlantic Conference, AMS Fall Southeastern Sectional Meeting, Jane Street\'s NYC Math Day, etc.). Predecessor project won at ISEF 2024: the AMS Karl Menger Memorial Award and the NSA Research Directorate Award.',
    links: { paper: '#' },
  },
  {
    title: 'Software-Based CS-PRNG',
    description:
      'I derive a cryptographically-secure pseudo-random number generator (CS-PRNG) based in my previous combinatorial number theory research. Building on my research into universal matrix product formulas for generalized binomial coefficients, I designed a software-only PRNG whose state evolution is governed by structured algebraic transformations rather than ad-hoc mixing heuristics. The construction emphasizes resistance to classical cryptanalytic attacks by leveraging non-linear state updates, sequence-agnostic matrix behavior, and mathematically constrained diffusion. Tested with NIST 800-22 standard tests suite, my Python implementation demonstrates statistical randomness after over 500M generated bits. Collaborated with guidance from NSA researchers, PNNL national laboratory experts, and MIT alumni industry professionals.',
    links: { paper: '#', video: '#' },
  },
];

const socialProjects = [
  {
    title: 'Project CLERIS',
    description:
      // 'Project CLERIS is a global research-education initiative designed to make advanced STEM concepts accessible to students worldwide, breaking financial barriers to academia. I founded and led 50+ volunteers in the Research Course project to elucidate the process of conducting scientific research for students worldwide. Through a growing library of 16+ educational videos, Project CLERIS has reached 33,000+ learners across multiple countries, accumulating 3,000,000+ views and being featured by Associated Press News. The initiative reflects my commitment to educational equity—using rigorous technical knowledge to remove barriers to high-level learning and empower students who lack access to traditional academic resources.',
      'Project CLERIS is a global research-education initiative designed to make advanced STEM concepts accessible to students worldwide and break financial barriers to academia. I founded and led 50+ volunteers in the Research Course project which elucidates the process of conducting scientific research for students worldwide. The project guides students from topic ideation to local resource attainment and professorial mentorship to composing a paper for journal submission. Through a growing library of 16+ educational videos, Project CLERIS has reached 33,000+ learners across 100+ countries, accumulating 3,000,000+ views and being featured by Associated Press News.',
    links: { demo: '#' },
  },
  {
    title: 'Sweet Surplus',
    description:
      'Sweet Surplus is a food-rescue and sustainability initiative I co-founded to reduce commercial food waste while strengthening community food security. As Head of Networking, I organize partnerships with local bakeries to redirect surplus baked goods to shelters and community organizations, transforming potential waste into consistent nutritional support for vulnerable populations. To ensure long-term viability, I designed an operational model that provides partner bakeries with measurable tax incentives, resulting in $40,000+ worth of food redistributed across multiple cities and countries and an average 7.5% revenue boost for participating businesses through tax deductions. This work was nationally recognized with the Daily Point of Light Award, honoring its sustained national impact in community service and civic innovation.',
    links: { demo: '#' },
  },
];

const ProjectsSection = () => {
  return (
    <>
      {/* Selected Projects */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Selected Projects</h2>

          <div className="flex flex-wrap justify-center gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="w-full md:w-[48%] lg:w-[32%] animate-slide-up opacity-0"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards',
                }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section id="research" className="py-24 relative bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">
            Mathematics & Cryptography Research
          </h2>

          <div className="flex flex-wrap justify-between gap-6 max-w-4xl mx-auto">
            {researchProjects.map((project, index) => (
              <div
                key={project.title}
                className="w-full md:w-[48%] animate-slide-up opacity-0"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'forwards',
                }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Initiatives */}
      <section id="social" className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Social Initiatives</h2>

          <div className="flex flex-wrap justify-between gap-6 max-w-4xl mx-auto">
            {socialProjects.map((project, index) => (
              <div
                key={project.title}
                className="w-full md:w-[48%] animate-slide-up opacity-0"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'forwards',
                }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;