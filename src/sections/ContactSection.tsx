import { useState } from 'react';

const ContactSection = ({ className = '' }: { className?: string }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add submit logic
  };

  return (
    <section id="contact" className={`min-h-screen flex flex-col items-center justify-center bg-white px-4 ${className}`}>
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold mb-6 text-center">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            rows={5}
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;