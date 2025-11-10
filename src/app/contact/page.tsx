'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // Form submission logic would go here
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 hover-section dark:text-white">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover-card">
              <h2 className="text-2xl font-semibold mb-6 text-primary dark:text-primary/90 hover-section">Lab Location</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="hover-section">
                  <strong className="dark:text-white">Address:</strong><br />
                  Clinical Biomarkers Research Laboratory<br />
                  Room No. 329,330, 3rd floor<br />
                  School of Medical Science and Technology<br />
                  Life Science Building<br />
                  Indian Institute of Technology Kharagpur<br />
                  Kharagpur-721302, West Bengal, India
                </p>
                <p className="hover-section">
                  <strong className="dark:text-white">Email:</strong><br />
                  <a href="mailto:cbrl.kc.smst@gmail.com" className="hover-link text-blue-600 dark:text-blue-400">
                    cbrl.kc.smst@gmail.com
                  </a>
                </p>
                <p className="hover-section">
                  <strong className="dark:text-white">Phone:</strong><br />
                  +91 03222 282221
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover-card">
              <h2 className="text-2xl font-semibold mb-6 text-primary dark:text-primary/90 hover-section">Principal Investigator</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="hover-section">
                  <strong className="dark:text-white">Dr. Koel Chaudhury, Ph.D.</strong><br />
                  Professor<br />
                  School of Medical Science and Technology<br />
                  Indian Institute of Technology Kharagpur
                </p>
                <p className="hover-section">
                  <strong className="dark:text-white">Email:</strong><br />
                  <a href="mailto:koel@smst.iitkgp.ac.in" className="hover-link text-blue-600 dark:text-blue-400">
                    koel@smst.iitkgp.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover-card">
              <h2 className="text-2xl font-semibold mb-6 text-primary dark:text-primary/90 hover-section">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/90 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/90 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/90 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/90 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 dark:bg-primary/90 dark:hover:bg-primary/80 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Interactive Google Map Section */}
        <div className="mt-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover-card">
            <h2 className="text-2xl font-semibold mb-6 text-primary dark:text-primary/90 hover-section">Find Us on Map</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 hover-section">
              Life Science Building, Indian Institute of Technology Kharagpur, West Bengal, India
            </p>
            
            <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Life+Science+Building,+IIT+Kharagpur&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Life Science Building, IIT Kharagpur Location"
              />
              
              {/* Overlay with location info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Life Science Building
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      IIT Kharagpur, West Bengal 721302
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Life+Science+Building,+IIT+Kharagpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-md transition-colors duration-300 hover-button"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
            
            {/* Additional Map Features */}
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg hover-card">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Coordinates</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  22.3149° N, 87.3105° E
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg hover-card">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Campus</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  IIT Kharagpur Main Campus
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg hover-card">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Building</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Life Science Building
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}