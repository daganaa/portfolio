const AboutSection = ({ className = '' }: { className?: string }) => (
  <section id="about" className={`min-h-screen flex flex-col items-center justify-center bg-white px-4 ${className}`}>
    <div className="max-w-2xl bg-white rounded-xl shadow-lg p-8 text-center">
      <h2 className="text-3xl font-extrabold mb-4">WHAT??</h2>
      <p className="text-lg text-gray-700">
        I am a passionate developer with a love for building beautiful, performant, and user-friendly web applications. My work blends modern design, smooth animations, and robust backend logic to deliver exceptional digital experiences. (Replace this with your real bio!)
      </p>
    </div>
  </section>
);

export default AboutSection;