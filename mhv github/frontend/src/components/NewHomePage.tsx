import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string; // URL or icon class
}

const services: Service[] = [
  {
    title: 'Primary Care',
    description: 'Comprehensive primary care services for veterans.',
    icon: 'https://via.placeholder.com/64',
  },
  {
    title: 'Mental Health',
    description: 'Support and resources for mental well-being.',
    icon: 'https://via.placeholder.com/64',
  },
  {
    title: 'Specialty Care',
    description: 'Advanced care in various specialties.',
    icon: 'https://via.placeholder.com/64',
  },
];

const HomePage: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      {/* Hero Section */}
      <section style={{
        background: 'url(https://via.placeholder.com/1920x600) no-repeat center center',
        backgroundSize: 'cover',
        color: '#fff',
        textAlign: 'center',
        padding: '50px 20px',
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>VA Health Care Services</h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          Dedicated to providing the highest quality care for our veterans.
        </p>
      </section>

      {/* Services Section */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Services</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
          {services.map((service, index) => (
            <div key={index} style={{
              flex: '1 1 300px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'left',
              maxWidth: '300px',
            }}>
              <img
                src={service.icon}
                alt={service.title}
                style={{ width: '64px', height: '64px', marginBottom: '10px' }}
              />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ background: '#f9f9f9', padding: '40px 20px' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '20px' }}>What Veterans Say</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontStyle: 'italic' }}>
          <p>
            "The care and support I received from VA Health Care have been life-changing. The staff truly cares about our
            well-being." - John D.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Get in Touch</h2>
        <p>Have questions or need assistance? Contact us today!</p>
        <button style={{
          background: '#007BFF',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1rem',
        }}>
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default HomePage;
