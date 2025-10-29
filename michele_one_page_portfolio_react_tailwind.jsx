export default function Portfolio() {
  const projects = [
    {
      title: "Inference Attacks on Smart Buildings",
      role: "Lead – Privacy & ML",
      bullets: [
        "Built Python pipeline (Pandas/NumPy/sklearn) for 1‑min IoT time‑series",
        "Modeled occupancy via affine thermal model + supervised/unsupervised ML",
        "Proposed obfuscation & differential privacy to reduce leakage"
      ],
      tech: ["Python", "scikit-learn", "PyTorch", "Jupyter", "Docker"],
      link: "#"
    },
    {
      title: "Surrogate Models for Energy Simulation",
      role: "Research – DL Forecasting",
      bullets: [
        "Automated >15k EnergyPlus runs (Rhino/Grasshopper/Honeybee)",
        "Trained GRU/Seq2Seq/1D‑CNN for hourly cooling‑load prediction",
        ">90% runtime reduction vs. full simulation; real‑time design feedback"
      ],
      tech: ["PyTorch", "EnergyPlus", "Grasshopper", "NumPy"],
      link: "#"
    },
    {
      title: "Generative AI for Architectural Design",
      role: "Applied Research – CV/Generative",
      bullets: [
        "Trained 3D‑GANs, cGANs, U‑Nets for 2D/3D synthesis & segmentation",
        "Image‑to‑geometry pipelines with OpenCV + TensorFlow",
        "Co‑instructor @ DigitalFUTURES, mentored 40+ participants"
      ],
      tech: ["TensorFlow", "Keras", "OpenCV", "PyTorch"],
      link: "#"
    }
  ];

  const skills = [
    {
      group: "AI & Machine Learning",
      items: [
        "PyTorch", "TensorFlow", "scikit-learn", "HuggingFace",
        "CNN", "RNN/LSTM/GRU", "Seq2Seq", "GAN/VAE", "Transformers"
      ]
    },
    {
      group: "Data Science & Analytics",
      items: [
        "Python", "Pandas", "NumPy", "SQL", "ETL", "Time-series", "SHAP"
      ]
    },
    {
      group: "Simulation & IoT",
      items: [
        "EnergyPlus", "Honeybee/Ladybug", "OpenFOAM",
        "Arduino", "Raspberry Pi", "Sensor networks"
      ]
    },
    {
      group: "Software & Ops",
      items: [
        "Git", "Docker", "FastAPI", "REST APIs", "MLflow"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Michele Sodano</h1>
            <p className="mt-2 text-lg md:text-xl text-slate-300">
              Data Scientist · AI Engineer · Applied Researcher
            </p>
            <p className="mt-4 max-w-2xl text-slate-300">
              Blending data, design & intelligence to ship interpretable, efficient and privacy‑aware AI.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 transition">See Projects</a>
              <a href="#contact" className="px-4 py-2 rounded-2xl bg-indigo-500/90 hover:bg-indigo-400 transition">Contact</a>
              <a href="#cv" className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 transition">Download CV</a>
            </div>
          </div>
          <div className="w-full md:w-48 lg:w-56">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500/40 to-cyan-500/30 border border-white/10 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
        <p className="mt-4 text-slate-300 max-w-3xl leading-relaxed">
          Engineer with 6+ years across Europe, Asia and the U.S., building ML/DL systems from
          generative models (GANs/VAEs/segmentation/3D synthesis) to time‑series forecasting and
          surrogate modeling. Skilled in Python (PyTorch, TensorFlow, scikit‑learn) and modern data
          pipelines. I turn research into deployable, trustworthy AI: interpretable, efficient, privacy‑aware.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-semibold">Core Skills</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.group} className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-medium text-slate-200">{s.group}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-12 border-t border-white/5">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
          <a className="text-sm text-indigo-300 hover:text-indigo-200" href="#">All projects →</a>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{p.role}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc list-inside">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-slate-400">{p.tech.join(" · ")}</p>
              <a href={p.link} className="mt-4 inline-block text-sm text-indigo-300 hover:text-indigo-200">Details →</a>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-indigo-400/40" />
            </article>
          ))}
        </div>
      </section>

      {/* Experience / Education */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-semibold">Experience & Education</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Item title="UTSA – SentinelHive Lab" subtitle="Postdoctoral Research Fellow (2024–2025, San Antonio, USA)" lines={[
              "Trustworthy AI · occupancy detection · privacy risk assessment",
              "Built ML pipelines; coordinated lab ops & mentoring"
            ]} />
            <Item title="SUTD – Artificial Architecture & AIRLAB" subtitle="PhD Researcher (2019–2024, Singapore)" lines={[
              "Surrogate modeling (LSTM/GRU/Seq2Seq) · ST‑GNN",
              "Generative AI for design; digital fabrication"
            ]} />
            <Item title="Saimex S.r.l." subtitle="R&D Project Manager (2018, Italy)" lines={["Parametric 3D workflow; −60% design iteration time"]} />
          </div>
          <div className="space-y-4">
            <Item title="PhD – Architecture & Sustainable Design" subtitle="SUTD (2019–2024) – President’s Graduate Fellowship" lines={["Thesis on deep learning surrogate models for energy‑efficient design"]} />
            <Item title="MSc/BSc – Building Engineering" subtitle="Politecnico di Milano" lines={["Energy systems · structural basics · simulation"]} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-12 border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-semibold">Let’s work together</h2>
        <p className="mt-3 text-slate-300">Open to mid‑senior roles and startup collaborations. Milan‑based · hybrid/remote.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="mailto:mikysodano@gmail.com" className="px-4 py-2 rounded-2xl bg-indigo-500/90 hover:bg-indigo-400 transition">Email</a>
          <a href="#" className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 transition">LinkedIn</a>
          <a id="cv" href="#" className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 transition">Download CV</a>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-6 py-10 text-xs text-slate-400 border-t border-white/5">
        © {new Date().getFullYear()} Michele Sodano · Privacy‑aware, human‑centered AI
      </footer>
    </main>
  );
}

function Item({ title, subtitle, lines }) {
  return (
    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
      <h3 className="font-medium text-slate-200">{title}</h3>
      <p className="text-sm text-slate-400">{subtitle}</p>
      <ul className="mt-2 text-sm text-slate-300 list-disc list-inside">
        {lines.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
