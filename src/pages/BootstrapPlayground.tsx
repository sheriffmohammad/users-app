import React from "react";

function Card() {
  return (
    <div
      className="card bg-light mb-3 p-0"
      style={{
        maxWidth: "18rem",
      }}
    >
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Light card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default function BootstrapPlayground() {
  return (
    <div className="w-100 text-center">
      <h3 className="font-weight-light text-uppercase text-success">shop</h3>
      <div className="row justify-content-between mt-5">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

      <h3 className="mt-5 font-weight-light text-uppercase text-success">shop</h3>
      <div className="row justify-content-between mt-5">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}
