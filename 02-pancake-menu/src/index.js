import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pancake Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pancake />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log("Store open?", isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed!");

  return (
    <footer>
      {new Date().toLocaleTimeString()} We're currently closed! Please don't
      ever come again!
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Pancake() {
  return (
    <div>
      <img src="pancakes/pancake01.jpg" alt="Pancake Top" />
      <h2>Pancake Top</h2>
      <p>Tomato, and some good food ingredients</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
