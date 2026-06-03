import "./ContactInfoSection.css";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const ContactInfoSection = () => {
  return (
    <section className="contact-info-page">

      <div className="container">

        <div className="info-grid">

          <div className="info-card">
            <Phone size={28} />
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-card">
            <Mail size={28} />
            <h3>Email</h3>
            <p>info@endlessacademy.com</p>
          </div>

          <div className="info-card">
            <MapPin size={28} />
            <h3>Location</h3>
            <p>Puducherry, India</p>
          </div>

          <div className="info-card">
            <Clock size={28} />
            <h3>Working Hours</h3>
            <p>Mon - Sat | 9 AM - 7 PM</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactInfoSection;