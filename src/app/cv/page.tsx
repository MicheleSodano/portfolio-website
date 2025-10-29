import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV - Michele Sodano | AI Engineer, Data Scientist, Research ML Engineer',
  description: 'Complete CV of Michele Sodano - AI Engineer and applied researcher with 6+ years in AI, data science, and computational modeling across Europe, Asia, and North America.',
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Michele Sodano</h1>
            <p className="text-xl text-muted mb-4">AI Engineer | Data Scientist | Research ML Engineer</p>
            <div className="text-muted space-y-1">
            <p><strong>Milan, Italy</strong> (Open to relocation within EU)</p>
            <p>📱 (+39) 3315807320 | (+65) 90190442 (WhatsApp)</p>
            <p>✉️ <a href="mailto:mikysodano@gmail.com" className="text-primary hover:text-primary-hover underline">mikysodano@gmail.com</a></p>
            <p>🔗 <a href="https://www.linkedin.com/in/michele-sodano/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover underline">LinkedIn</a></p>
          </div>
        </div>

        {/* About Me */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-border pb-2">About Me</h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>
              Engineer and applied researcher with 6+ years in AI, data science, and computational modeling across Europe, Asia, and North America. I started working with AI, data, and computational modeling driven by the curiosity to understand how technology could become a tool to improve reality, not just to automate it. Over the years, this curiosity has evolved into a passion for building intelligent, explainable, and responsible systems that merge creativity and logic.
            </p>
            <p>
              I've designed and deployed ML/DL models for smart buildings, energy forecasting, occupancy detection, and privacy-preserving analytics. My work spans generative AI (GANs, VAEs, 3D synthesis), time-series forecasting, surrogate modeling, and trustworthy AI, exploring LLM orchestration, differential privacy, and data obfuscation for secure IoT systems. Proficient in Python (PyTorch, TensorFlow, scikit-learn) and modern data pipelines, I bridge research and production, delivering interpretable, efficient, and impactful solutions.
            </p>
            <p>
              Beyond data and algorithms, my work is deeply about people and collaboration. The principles that guide me every day are transparent feedback as a foundation for growth, mentoring and shared learning, and collaborative problem-solving as a driver of innovation.
            </p>
            <p>
              I'm always open to collaborations and applied research opportunities where technology meets impact: bridging the gap between innovation and everyday life.
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-border pb-2">Professional Experience</h2>
          
          <div className="space-y-8">
            {/* UTSA */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold">AI Engineer | Research ML Engineer | Lab Manager</h3>
              <p className="text-lg font-medium text-muted">Postdoctoral Research Fellow — University of Texas at San Antonio</p>
              <p className="text-muted mb-3"><em>San Antonio (TX), USA | May 2024 – Jun 2025</em></p>
              <p className="mb-3">Applied AI and data science to smart-building analytics, developing models for occupancy detection, energy pattern forecasting, and privacy-preserving inference/privacy threat assessment (SentinelHive Lab).</p>
              <ul className="list-disc list-inside space-y-1 text-foreground/90">
                <li>Built Python-based ETL pipelines (Pandas, NumPy, scikit-learn) for API data extraction, cleaning, imputing, and modeling high-resolution datasets</li>
                <li>Designed and trained ML/DL models (RandomForest, XGBoost, LSTM, CNN) for energy forecasting and occupancy detection from environmental data</li>
                <li>Mapped and reproduced attack pipeline steps (localization, device classification, activity mining, LSTM/attention-based forecasting)</li>
                <li>Proposed and tested differential privacy and data obfuscation methods for secure IoT analytics</li>
                <li>Explored LangChain RAG multimodal agents to simulate metadata aggregation and privacy attacks</li>
                <li>Managed lab operations (multi-GPU environments, Docker setup) and supervised MSc/PhD research activities</li>
              </ul>
            </div>

            {/* SUTD */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold">Data Scientist | AI Researcher | Computational Designer</h3>
              <p className="text-lg font-medium text-foreground/80">PhD Researcher — Singapore University of Technology and Design</p>
              <p className="text-foreground/60 mb-3"><em>Singapore | Jan 2019 – Feb 2024</em></p>
              <p className="mb-3">Applied machine learning, deep learning, and parametric modeling to architectural design and building performance optimization (Artificial Architecture Lab, AIRLAB).</p>
              <ul className="list-disc list-inside space-y-1 text-foreground/90">
                <li>Developed surrogate models (LSTM, GRU, Seq2Seq, 1D-CNN) to emulate EnergyPlus simulations, reducing runtime by over 90%</li>
                <li>Designed multivariate forecasting pipelines for cooling and thermal load prediction, integrating weather, setpoints, and occupancy data</li>
                <li>Modeled buildings using Spatio-Temporal Graph Neural Networks (ST-GNN) and domain ontologies for digital-twin development</li>
                <li>Trained generative AI models (GAN, cGAN, VAE, U-Net) for architectural shape generation and segmentation tasks</li>
                <li>Created parametric workflows (Rhino + Grasshopper + Python) for 3D printing and robotic fabrication projects (<em>AirMesh</em>, <em>Casa Azul</em>, <em>SUTD Time Capsule</em>)</li>
                <li>Mentored MSc students and supported teaching in courses on AI for design, machine learning, and digital fabrication</li>
                <li>Awarded <strong>SUTD President's Graduate Fellowship</strong> (2019–2024) and <strong>SG Mark 2020 Award</strong> (<em>Time Capsule Project</em>)</li>
              </ul>
            </div>

            {/* Saimex */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold">Project Manager | R&D</h3>
              <p className="text-lg font-medium text-foreground/80">Saimex S.r.l.</p>
              <p className="text-foreground/60 mb-3"><em>Seregno (MB), Italy | Aug 2018 – Dec 2018</em></p>
              <p className="mb-3">Managed R&D for structural GFRP façade systems using pultrusion manufacturing system for cladding of skyscrapers in the Middle East (UAE, Bahrain).</p>
              <ul className="list-disc list-inside space-y-1 text-foreground/90">
                <li>Converted 2D CAD workflows to parametric 3D modeling, cutting design iteration time by 60%</li>
                <li>Supervised FEM analysis, fire-resistance validation, and ISO/ASTM compliance</li>
                <li>Coordinated documentation and communication with the Chinese production plant</li>
              </ul>
            </div>

            {/* O.B. Technical */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold">Site Coordinator | Technical Services</h3>
              <p className="text-lg font-medium text-foreground/80">O.B. Technical Service Ltd.</p>
              <p className="text-foreground/60 mb-3"><em>Gulu, Uganda | Oct 2016 – Feb 2017</em></p>
              <p className="mb-3">Led design and coordination of hotel and restaurant facilities, combining energy engineering and on-site management.</p>
              <ul className="list-disc list-inside space-y-1 text-foreground/90">
                <li>Conducted 3D as-built surveys, redesigned MEP systems, and implemented solar PV + thermal systems, improving energy efficiency by 25%</li>
                <li>Supervised over 50 workers, ensuring schedule and quality compliance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-foreground/20 pb-2">Education</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold">Ph.D. in Architecture & Sustainable Design</h3>
              <p className="text-lg text-foreground/80"><em>Computing and Information Sciences</em></p>
              <p className="text-foreground/70 mb-2">Singapore University of Technology and Design (SUTD) | Gen 2019 – Feb 2024</p>
              <p className="text-foreground/80 mb-2"><strong>Grade:</strong> Honours with Highest Distinction (CGPA 4.67/5)</p>
              <p className="text-green-600 font-medium mb-3"><strong>Scholarship:</strong> SUTD President's Graduate Fellowship (2019–2024)</p>
              <p className="text-sm text-foreground/70 mb-3"><strong>Thesis:</strong> Advancing Energy-Efficient Building Design through Deep Learning Surrogate Models</p>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>• SUTD President's Graduate Fellowship (2019–2024)</li>
                <li>• SG Mark 2020 Award (Time Capsule Project)</li>
                <li>• Published multiple research papers on AI in architecture</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold">MSc Building Engineering</h3>
              <p className="text-foreground/70 mb-2">Politecnico di Milano | Set 2014 – Lug 2017</p>
              <p className="text-foreground/80 mb-2"><strong>Grade:</strong> 110/110</p>
              <p className="text-blue-600 font-medium mb-3"><strong>Scholarship:</strong> Tesi all'Estero Scholarship (2016)</p>
              <p className="text-sm text-foreground/70 mb-3"><strong>Thesis:</strong> Feasibility Study of Renewable Air-Conditioning for Lacor Hospital Operating Theatres</p>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>• Tesi all'Estero Scholarship recipient</li>
                <li>• Specialized in energy systems and sustainable design</li>
                <li>• Focus on computational modeling and simulation</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold">BSc Building Engineering</h3>
              <p className="text-foreground/70 mb-2">Politecnico di Milano | Set 2011 – Lug 2014</p>
              <p className="text-foreground/80 mb-2"><strong>Grade:</strong> 94/110</p>
              <p className="text-sm text-foreground/70 mb-3"><strong>Thesis:</strong> Energy Optimization of the Building Envelope of a Particular Case Study through the Analysis and Comparison of Three Different Technological Solutions of Opaque Wall</p>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>• CENED Energy Certifier License (2013)</li>
                <li>• Strong foundation in engineering principles</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Technical Competencies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-foreground/20 pb-2">Core Technical Competencies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Programming & Software Development</h3>
              <p className="text-foreground/80">Python (advanced), SQL, Bash; basic Java, C#, Node.js, Git, Docker, RESTful & FastAPI endpoints</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Data Science</h3>
              <p className="text-foreground/80">Data wrangling and ETL (Pandas, NumPy, SciPy), statistical analysis, hypothesis testing, sampling theory, visualization (Matplotlib, Plotly, Seaborn). Signal and image analytics (OpenCV) for time-series and sensor data</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">AI & Machine Learning</h3>
              <p className="text-foreground/80">Regression, classification, clustering, forecasting. Frameworks: PyTorch, TensorFlow, Keras, scikit-learn, Hugging Face. Deep learning architectures: CNN, LSTM/GRU, Seq2Seq, Transformers, GAN, VAE. Model explainability (SHAP, feature importance, bias detection). Familiar with GPU computing (CUDA), model quantization, and performance optimization</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Generative & Large Language Models</h3>
              <p className="text-foreground/80">Fine-tuning transformer-based models (LoRA, QLoRA, PEFT). Prompt engineering and qualitative evaluation for generative outputs. Understanding of diffusion models, text-to-image synthesis, and multimodal fusion. <strong>RAG & Agentic AI</strong>: Experience with LangChain and LlamaIndex for context-aware reasoning</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-foreground/20 pb-2">Certifications & Professional Courses</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">AI / Data Science / Cybersecurity</h3>
              <ul className="list-disc list-inside space-y-1 text-foreground/90">
                <li><strong>CS 5713 – Practical Attack & Defense Techniques</strong>, UTSA Computer Science (2024) — <em>Audited</em></li>
                <li><strong>50.039 – Theory & Practice of Deep Learning</strong>, SUTD ISTD (2021) — <em>Audited</em></li>
                <li><strong>51.504 – Machine Learning</strong>, SUTD ISTD (2021) — <em>Audited</em></li>
                <li><strong>NUS DSBE001x – Data Science for Construction, Architecture & Engineering</strong>, NUS Lifelong Learning (2020) — <em>Certified</em></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Building Simulation / Energy / Sustainability</h3>
              <ul className="list-disc list-inside space-y-1 text-foreground/90">
                <li><strong>EnergyPlus for Practitioners</strong>, Big Ladder Software (2021) — <em>Certified</em></li>
                <li><strong>MITx 4.464x – Sustainable Building Design</strong>, MIT OpenCourseWare (2020) — <em>Certified</em></li>
                <li><strong>20.318 – Creative Machine Learning</strong>, SUTD ASD (2020) — <em>Certified</em></li>
                <li><strong>CENED Energy Certifier License</strong>, Regione Lombardia & Politecnico di Milano (2013) — <em>Certified</em></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-foreground/20 pb-2">Languages</h2>
          <p className="text-lg"><strong>Italian</strong> (Native) · <strong>English</strong> (C2 Fluent)</p>
        </section>

        {/* Back to Portfolio */}
        <div className="text-center pt-8 border-t border-border">
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 shadow-sm"
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
