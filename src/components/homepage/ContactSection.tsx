import ContactForm from '@components/ContactForm';

export default function ContactSection() {
  return (
    <div className="contact-section mt-16">
      <h2 className="text-4xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
        Get In Touch
      </h2>
      
      <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
        Have a project in mind or want to collaborate? I'd love to hear from you. 
        Send me a message and I'll get back to you as soon as possible.
      </p>
      
      <ContactForm />
    </div>
  );
}

