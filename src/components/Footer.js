import React from "react";
import { Order } from "./Order";

export function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We are currently open!");
  // } else {
  //   alert("Sorry, We are Closed!!");
  // }
  // we can also use if-else statement after outside JSX
  if (!isOpen) return <p>Closed!</p>;

  // return React.createElement('footer', null, "We're currently open!")
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We open at {openHour}:00 till {closeHour}:00.
        </p>
      )}
    </footer>
  );
}
