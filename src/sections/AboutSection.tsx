const AboutSection = ({ className = '' }: { className?: string }) => (
  <section id="about" className={`min-h-screen flex flex-col items-center justify-center bg-white px-4 ${className}`}>
    <div className="max-w-2xl bg-white rounded-xl shadow-lg p-8 text-center">
      <h2 className="text-3xl font-extrabold mb-4">nice to meet you :)</h2>
      <p className="text-lg text-gray-700">
        <br></br>
        my name is nathan. i am a fullstack developer (inc. epic systems) 
        and student researcher at boston college. <br></br><br></br>
        my work aims to make people's lives easier, more beautiful, and simpler. <br></br>
        <br></br>
        when i'm free, i'm watching the warriors play basketball,
        playing tennis with friends, or spamming pullups at home.
        <br></br>
        <br></br>

        excited to build with you!

      </p>
    </div>
  </section>
);

export default AboutSection;