const projects = [
  {
    title: "Highbury Clinic (Capstone)",
    desc: "MERN Stack medical system with role-based access for Patients, Doctors, and Admins. Features JWT auth and PDF report handling.",
    link: "https://highburyclinic.xyz",
    tech: "MongoDB, Express, React, Node.js"
  },
  {
    title: "Graphicawork.xyz",
    desc: "Freelance marketplace for graphic designers to showcase portfolios and manage client inquiries.",
    link: "https://graphicawork.xyz",
    tech: "React, Tailwind, Node.js"
  },
  {
    title: "Nextboolean LMS",
    desc: "Edutech platform for managing online courses, student progress tracking, and digital learning assets.",
    link: "#",
    tech: "MERN Stack, Cloudinary"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 px-10">
      <h2 className="text-3xl font-bold text-center mb-12 text-hospital">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-hospital">
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{p.desc}</p>
            <p className="text-xs font-mono text-hospital mb-4">{p.tech}</p>
            {p.link !== "#" && <a href={p.link} target="_blank" className="text-blue-600 font-bold hover:underline">Live Demo →</a>}
          </div>
        ))}
      </div>
    </section>
  );
}