import React from "react";

const Home = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            "url('https://drivado.com/static/media/Website%20Banner-01.9ff40c55e77430305c7d.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <h1>Welcome to Drivado</h1>
      </div>

      {/* Content Section */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>About Us</h2>
        <p>
          Travel in one of our comfortable chauffeured vehicles and experience
          the sophistication of elegant luxury accompanied by impeccable
          service. You can book your transfers globally online around the clock
          via the website or the smartphone app. With just one click you can get
          a binding price for the desired trip. With our all-inclusive price we
          provide airport transfers, station transfers, point to point transfers
          and hourly disposals. With us you get exactly the chauffeur service
          that best suits your wishes and needs. Our vision is to offer a
          smarter way to book and manage rides — something affordable, reliable,
          and efficient. Come, explore our services and book a transfer with us.
        </p>

        <h2>Our Mission</h2>
        <p>
          To empower individuals and businesses by offering top-notch services
          and creating meaningful value for our community.
        </p>

        <h2>Get Started</h2>
        <p>
          Explore our website to learn more about what we do and how we can help
          you.
        </p>
      </div>
    </div>
  );
};

export default Home;
