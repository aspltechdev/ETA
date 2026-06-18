import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact">

      <div className="container contact-container">

        <div className="contact-info">

          <span>Contact Us</span>

          <h2>Let's Start Your Language Journey</h2>

          <p>
            Reach out to our team for course
            guidance and enrollment assistance.
          </p>

          <div className="contact-item">
            📍 Pondicherry, India
          </div>

          <div className="contact-item">
            📞 +91 9876543210
          </div>

          <div className="contact-item">
            ✉ hello@example.com
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <textarea
            placeholder="Message"
          ></textarea>

          <button>
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default ContactSection;



// import "./ContactSection.css";
// import { useState } from "react";

// const ContactSection = () => {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending...");

//     const formData = new FormData(event.target);

//     formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Message sent successfully!");
//       event.target.reset();
//     } else {
//       setResult("Failed to send message.");
//     }
//   };

//   return (
//     <section className="contact-section" id="contact">
//       <div className="container">
//         <form className="contact-form" onSubmit={onSubmit}>
//           <input type="text" name="name" placeholder="Name" required />

//           <input type="email" name="email" placeholder="Email" required />

//           <input type="text" name="phone" placeholder="Phone" />

//           <textarea
//             name="message"
//             placeholder="Message"
//             rows="5"
//             required
//           />

//           <button type="submit">Send</button>

//           {result && <p>{result}</p>}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
