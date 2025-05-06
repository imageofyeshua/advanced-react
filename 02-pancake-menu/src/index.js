import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import data from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pancake Co.</h1>
    </header>
  );
}

function Menu() {
  const pancakes = data;
  const numPancakes = pancakes.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPancakes > 0 ? (
        <>
          <p>Authentic Korean Cuisine, 6 Creative Dishes to Choose from.</p>
          <ul className="pancakes">
            {pancakes.map((pancake) => (
              <Pancake pancakeObj={pancake} key={pancake.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      {/* <Pancake
        name="Pancake 5Tier"
        ingredients="Tomato and some other things"
        photoName="pancakes/pancake01.jpg"
        price={10}
      />
      <Pancake
        name="Pancake Funghi"
        ingredients="Tomato and some other mushrooms"
        photoName="pancakes/pancake02.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pancake({ pancakeObj }) {
  console.log(pancakeObj);

  // if (pancakeObj.soldOut) return null;

  return (
    <li className={`pancake ${pancakeObj.soldOut ? "sold-out" : ""}`}>
      <img src={pancakeObj.photoName} alt={pancakeObj.name} />
      <div>
        <h3>{pancakeObj.name}</h3>
        <p>{pancakeObj.ingredients}</p>
        <span>{pancakeObj.soldOut ? "SOLD OUT" : pancakeObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log("Store open?", isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed!");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          Visit us between {openHour}:00 am and {closeHour}:00 pm
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}, Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
