// AboutUs.js
import React from 'react';
import Navbar from '../include/Navbar';
import Footer from '../include/Footer';
import './aboutus.css';
import aboutus2 from '../images/aboutus2.jpg'; 

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      
      {/* Part one */}
      <div className="aboutustop-image">
      </div>



      {/* Part two - Our Mission */}
      <section className="aboutus-mission">
        <div className="container mission-grid">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
            Our mission is to provide top-notch event planning and organizing services to make your special moments even more memorable. 
            We are dedicated to transforming ideas into extraordinary events, with a focus on detail, creativity, and client satisfaction. 
            Whether it’s a wedding, corporate gathering, or a social event, we strive to create seamless and unforgettable experiences that reflect your vision. 
            We believe in pushing the boundaries of innovation and are committed to offering personalized solutions for every event, ensuring that every aspect is meticulously planned and executed.
          </p>
          </div>
          <div className="mission-image">
            <img src={aboutus2} alt="Our Mission" />
          </div>
        </div>
      </section>

      {/* Part three - Our History */}
      <section className="aboutus-history">
        <div className="container">
          <h2>Our History</h2>
          <p>
            Founded in 2015, our event organizing company has grown from a small startup to a leading provider
            of unique and memorable events. With hundreds of successful weddings, corporate events, and social gatherings
            under our belt, we continue to innovate and expand to offer the best possible service to our clients.
          </p>
        </div>
      </section>

     {/* Part four - Testimonials */}
<section className="aboutus-testimonials">
  <div className="container">
    <h2>What Our Clients Say</h2>
    <div className="testimonial-grid">
      {/* Row 1 */}
      <div className="testimonial">
        <p>
          "This team turned our dream wedding into reality. The attention to detail and professionalism
          were outstanding!"
        </p>
        <h4> Emily Johnson</h4>
      </div>
      <div className="testimonial">
        <p>
          "Our corporate event was a huge success thanks to the flawless execution by the team."
        </p>
        <h4> Michael Thompson</h4>
      </div>
      <div className="testimonial">
        <p>
          "We couldn’t have asked for a better partner for organizing our product launch event. Everything was perfect."
        </p>
        <h4> Sarah Williams</h4>
      </div>
      {/* Row 2 */}
      <div className="testimonial">
        <p>
          "Their creativity and attention to detail truly made our conference stand out."
        </p>
        <h4> James Anderson</h4>
      </div>
      <div className="testimonial">
        <p>
          "Every little detail was taken care of, allowing us to focus on enjoying the event."
        </p>
        <h4> Olivia Brown</h4>
      </div>
      <div className="testimonial">
        <p>
          "The team’s professionalism and ability to bring our vision to life was incredible!"
        </p>
        <h4> David Wilson</h4>
      </div>
      {/* Row 3 */}
      <div className="testimonial">
        <p>
          "Our gala event was an absolute hit! Couldn’t have done it without them."
        </p>
        <h4> Charlotte Davis</h4>
      </div>
      <div className="testimonial">
        <p>
          "They made sure our event was perfect in every way. Highly recommend!"
        </p>
        <h4> William Harris</h4>
      </div>
      <div className="testimonial">
        <p>
          "Flawless execution and outstanding service from start to finish."
        </p>
        <h4> Sophia Lewis</h4>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default AboutUs;