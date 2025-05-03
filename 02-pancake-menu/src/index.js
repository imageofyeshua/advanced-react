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
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pancakes">
        {data.map((pancake) => (
          <Pancake pancakeObj={pancake} key={pancake.name} />
        ))}
      </ul>
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

function Pancake(props) {
  console.log(props);
  return (
    <li className="pancake">
      <img src={props.pancakeObj.photoName} alt={props.pancakeObj.name} />
      <div>
        <h3>{props.pancakeObj.name}</h3>
        <p>{props.pancakeObj.ingredients}</p>
        <span>{props.pancakeObj.price + 3}</span>
      </div>
    </li>
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
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently closed! Please don't
      ever come again!
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
