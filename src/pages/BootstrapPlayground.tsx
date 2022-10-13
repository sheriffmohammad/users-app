import React from "react";

function Card({ imageName, title, description }: any) {
  return (
    <div
      className="card bg-light mb-3 p-0 shadow-sm rounded-1"
      style={{
        maxWidth: "18rem",
      }}
    >
      <div className="p-0">
        <img
          src={`assets/images/bootstrap-playground/${imageName}`}
          className="w-100 h-100"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title text-start fw-bold">{title}</h5>
        <h6 className="card-text text-start text-secondary mt-3">
          {description}
        </h6>
      </div>
    </div>
  );
}

export default function BootstrapPlayground() {
  return (
    <div className="w-100 px-4">
      <h2 className="text-center fw-bold">Shop</h2>
      <div className="row justify-content-between g-0 mt-5">
        <Card
          imageName="1.jpg"
          title="GeForce RTX® Graphics Cards and Desktops"
          description="GeForce RTX graphics cards deliver the ultimate platform for gamers and creators. Experience ray tracing, AI-powered graphics, game-winning responsiveness, and much more."
        ></Card>
        <Card
          imageName="2.jpg"
          title="GeForce RTX 30 Series Laptops"
          description="Powering the world’s fastest laptops for gamers and creators. With new AI-powered Max-Q technologies that optimize laptops to deliver high performance in thin form factors."
        ></Card>
        <Card
          imageName="3.jpg"
          title="GFN Thursday"
          description="See what’s streaming this week on GeForce NOW."
        ></Card>
        <Card
          imageName="4.jpg"
          title="In the NVIDIA Studio"
          description="Your weekly celebration of extraordinary artists, inspiring art, and creator news."
        ></Card>
      </div>

      <h2 className="text-center fw-bold mt-5">Gaming</h2>
      <div className="row justify-content-between mt-5">
        <Card
          imageName="5.jpg"
          title="DLSS 3"
          description="The performance multiplier, powered by AI."
        ></Card>
        <Card
          imageName="6.png"
          title="Portal with RTX"
          description="Re-imagined with ray tracing and DLSS."
        ></Card>
        <Card
          imageName="7.jpg"
          title="NVIDIA DLSS 3"
          description="New games this month."
        ></Card>
        <Card imageName="8.jpg" title="Frames Win Games" description="NVIDIA Reflex Available Now."></Card>
      </div>
    </div>
  );
}
