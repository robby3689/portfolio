export default function Hero() {
  return (
    <section className="bg-hospital text-white py-20 px-10 text-center">
      <h1 className="text-5xl font-bold mb-4">Sachin Singh</h1>
      <p className="text-xl mb-8 font-light">Full Stack Web Developer | IT Infrastructure Specialist</p>
      <div className="flex justify-center gap-4">
        <a href="#projects" className="bg-white text-hospital px-6 py-2 rounded-full font-bold">View My Work</a>
        <a href="mailto:sachin.ca73@gmail.com" className="border border-white px-6 py-2 rounded-full">Contact Me</a>
      </div>
    </section>
  );
}