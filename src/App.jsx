import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Jeniliya Glory</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Jeniliya Glory Beauty Salon</h1>

          <p>
            Luxury Beauty • Hair Styling • Bridal Makeup • Skin Care
          </p>

          <a href="#services" className="btn">
            Explore Services
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-container">

          <div className="about-text">
            <h2>About Our Salon</h2>

            <p>
              Jeniliya Glory Beauty Salon is a premium beauty destination
              dedicated to enhancing confidence, elegance, and personal style.
              We specialize in professional beauty treatments tailored to every
              client's unique needs.
            </p>

            <p>
              From hair styling and bridal makeup to skincare and grooming,
              our experienced beauty professionals ensure exceptional service
              using modern techniques and high-quality beauty products.
            </p>

            <div className="about-info">
              <div className="info-box">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>

              <div className="info-box">
                <h3>1000+</h3>
                <p>Happy Clients</p>
              </div>

              <div className="info-box">
                <h3>100%</h3>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035"
              alt="Beauty Salon"
            />
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">

        <div className="section-header">
          <h2>Our Premium Services</h2>

          <p>
            Professional beauty solutions designed to make you look and feel your best.
          </p>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <h3>Hair Styling</h3>
            <p>
              Modern haircuts, hair coloring, smoothing,
              styling and hair treatments.
            </p>
          </div>

          <div className="service-card">
            <h3>Bridal Makeup</h3>
            <p>
              Complete bridal beauty packages designed for
              weddings and special occasions.
            </p>
          </div>

          <div className="service-card">
            <h3>Facials & Skin Care</h3>
            <p>
              Glow facials, deep cleansing, skin nourishment
              and rejuvenation treatments.
            </p>
          </div>

          <div className="service-card">
            <h3>Manicure & Pedicure</h3>
            <p>
              Luxury nail care, grooming and professional
              hand & foot treatments.
            </p>
          </div>

          <div className="service-card">
            <h3>Hair Spa</h3>
            <p>
              Healthy hair restoration, nourishment and
              relaxation spa treatments.
            </p>
          </div>

          <div className="service-card">
            <h3>Party Makeup</h3>
            <p>
              Elegant makeup services for parties,
              celebrations and events.
            </p>
          </div>

        </div>
      </section>
      {/* Gallery */}
<section className="gallery" id="gallery">

  <div className="section-header">
    <h2>Beauty Gallery</h2>
    <p>
      Explore our luxury salon interiors, professional hair styling,
      bridal makeup, skincare treatments and beauty transformations.
    </p>
  </div>

  <div className="gallery-grid">
    {/* Salon Interior */}
<a
  href="https://images.unsplash.com/photo-1560066984-138dadb4c035"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://images.unsplash.com/photo-1560066984-138dadb4c035"
    alt="Salon Interior"
  />
</a>

<a
  href="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
    alt="Luxury Beauty Salon"
  />
</a>

{/* Makeup Products */}
<a
  href="https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
    alt="Professional Makeup Products"
  />
</a>

{/* Hair Spa */}
<a
  href="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
    alt="Hair Spa Treatment"
  />
</a>

{/* Hair Styling */}
<a
  href="https://tse3.mm.bing.net/th/id/OIP.-CZNIkoY8ZryUaJlS0zyfAHaE8?pid=Api&P=0&h=180"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://tse3.mm.bing.net/th/id/OIP.-CZNIkoY8ZryUaJlS0zyfAHaE8?pid=Api&P=0&h=180"
    alt="Hair Styling"
  />
</a>

<a
  href="https://images.hindustantimes.com/img/2022/12/20/1600x900/photo_2022-12-19_22-20-59_1671517307467_1671517316090_1671517316090.jpg"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://images.hindustantimes.com/img/2022/12/20/1600x900/photo_2022-12-19_22-20-59_1671517307467_1671517316090_1671517316090.jpg"
    alt="Hair Styling Service"
  />
</a>

<a
  href="https://tse3.mm.bing.net/th/id/OIP.EnBdNlMWVAhSazEGD5GjKgHaJQ?pid=Api&P=0&h=180"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://tse3.mm.bing.net/th/id/OIP.EnBdNlMWVAhSazEGD5GjKgHaJQ?pid=Api&P=0&h=180"
    alt="Professional Hair Care"
  />
</a>

<a
  href="https://lh5.googleusercontent.com/tCbwl-_JCJU_qzyasbj2Znp1gLO0HzaPcJwwFEKCAwaaVCvu8gtBhgWWiaF6Ku_APjsg0okvzwQ-O0z9TVcOD6li_5swg_3EmRDWJQaKzd7w1ckkij0gc6LoSvk-QpQWv42om_yuDzaiStCBzj171Q"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://lh5.googleusercontent.com/tCbwl-_JCJU_qzyasbj2Znp1gLO0HzaPcJwwFEKCAwaaVCvu8gtBhgWWiaF6Ku_APjsg0okvzwQ-O0z9TVcOD6li_5swg_3EmRDWJQaKzd7w1ckkij0gc6LoSvk-QpQWv42om_yuDzaiStCBzj171Q"
    alt="Hair Treatment"
  />
</a>

{/* Bridal Makeup */}
<a
  href="https://i.pinimg.com/originals/fd/b2/f9/fdb2f9ead33583bc000fe2caab5b6b0e.jpg"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://i.pinimg.com/originals/fd/b2/f9/fdb2f9ead33583bc000fe2caab5b6b0e.jpg"
    alt="Indian Bridal Makeup"
  />
</a>

<a
  href="https://media-api.xogrp.com/images/72929d76-c33d-4685-8980-ce1bc942d1a1~rs_768.h-cr_0.238.1365.1603"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://media-api.xogrp.com/images/72929d76-c33d-4685-8980-ce1bc942d1a1~rs_768.h-cr_0.238.1365.1603"
    alt="Bridal Beauty"
  />
</a>

<a
  href="https://media.istockphoto.com/id/1336649728/photo/beautiful-traditional-indian-bride-getting-ready-for-her-wedding-day-by-makeup-artist.jpg?s=612x612&w=0&k=20&c=sFQRDldX1yYiyhPweZpKYNkTEyX5kIcWkdjFTSdwD2g="
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://media.istockphoto.com/id/1336649728/photo/beautiful-traditional-indian-bride-getting-ready-for-her-wedding-day-by-makeup-artist.jpg?s=612x612&w=0&k=20&c=sFQRDldX1yYiyhPweZpKYNkTEyX5kIcWkdjFTSdwD2g="
    alt="Wedding Makeup Artist"
  />
</a>

<a
  href="https://i.pinimg.com/originals/b4/4e/e9/b44ee9ecb8b259ccedc022da0ef32ed6.jpg"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://i.pinimg.com/originals/b4/4e/e9/b44ee9ecb8b259ccedc022da0ef32ed6.jpg"
    alt="South Indian Bridal Makeup"
  />
</a>

{/* Skin Care */}
<a
  href="https://img.freepik.com/premium-photo/radiant-youth-indian-beauty-promoting-skincare-elegance_1072437-714.jpg?w=1480"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://img.freepik.com/premium-photo/radiant-youth-indian-beauty-promoting-skincare-elegance_1072437-714.jpg?w=1480"
    alt="Skin Care Treatment"
  />
</a>

<a
  href="https://tse4.mm.bing.net/th/id/OIP.aB2Nxu9R0mawtMwuNXAL2wHaFk?pid=Api&P=0&h=180"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://tse4.mm.bing.net/th/id/OIP.aB2Nxu9R0mawtMwuNXAL2wHaFk?pid=Api&P=0&h=180"
    alt="Facial Care"
  />
</a>

<a
  href="https://img.freepik.com/premium-photo/indian-beauty-treatments-indian-skincare-rituals-indian-beauty-shots_978786-49019.jpg?w=2000"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://img.freepik.com/premium-photo/indian-beauty-treatments-indian-skincare-rituals-indian-beauty-shots_978786-49019.jpg?w=2000"
    alt="Beauty Skin Care"
  />
</a>
<a
  href="https://img.freepik.com/premium-photo/indian-beauty-with-revitalized-skin-showcasing-serum-white-background_878783-19470.jpg"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://img.freepik.com/premium-photo/indian-beauty-with-revitalized-skin-showcasing-serum-white-background_878783-19470.jpg"
    alt="Indian Skincare Beauty"
  />
</a>
{/* Manicure & Pedicure */}
<a
  href="https://cdn.diys.com/wp-content/uploads/2016/08/pedicure-ideas.jpg"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://cdn.diys.com/wp-content/uploads/2016/08/pedicure-ideas.jpg"
    alt="Pedicure Service"
  />
</a>

<a
  href="https://spadaspa.com/wp-content/uploads/2023/03/Day-Spa_Nails_Header_1920x1080.jpg"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://spadaspa.com/wp-content/uploads/2023/03/Day-Spa_Nails_Header_1920x1080.jpg"
    alt="Luxury Nail Spa"
  />
</a>

{/* Salon Services */}
<a
  href="https://static.magicpin.com/samara/media/blog/18-01-2022-best_salon_bangalore_cover.jpg"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://static.magicpin.com/samara/media/blog/18-01-2022-best_salon_bangalore_cover.jpg"
    alt="Beauty Salon Services"
  />
</a>

{/* Party Makeup */}
<a
  href="https://media.istockphoto.com/id/1340302535/photo/beautiful-indian-woman-getting-ready-to-a-wedding-reception-at-the-beauty-parlor.jpg?s=612x612&w=0&k=20&c=GzhivtaqLIDXBQ69R0DlIOfwY4aOYUI67gxWKTM3ooA="
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://media.istockphoto.com/id/1340302535/photo/beautiful-indian-woman-getting-ready-to-a-wedding-reception-at-the-beauty-parlor.jpg?s=612x612&w=0&k=20&c=GzhivtaqLIDXBQ69R0DlIOfwY4aOYUI67gxWKTM3ooA="
    alt="Party Makeup"
  />
</a>
  </div>

</section> 
      {/* Contact Section */}
      <section className="contact" id="contact">

        <div className="section-header">
          <h2>Contact Us</h2>

          <p>
            Book your beauty appointment today.
          </p>
        </div>

        <div className="contact-box">

          <h3>Jeniliya Glory Beauty Salon</h3>

          <p>📞 7989356261</p>

          <p>📍 Hyderabad, Telangana</p>

          <p>✉️ chjenniglory440@gmail.com</p>

          <p>⏰ Mon - Sun : 9:00 AM - 9:00 PM</p>

        </div>

      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2026 Jeniliya Glory Beauty Salon | All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default App;