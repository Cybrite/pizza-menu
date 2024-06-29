import React from "react";

export function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open untill {closeHour}:00. Come visit us or Order online!</p>
      <button className="btn">Order</button>
    </div>
  );
}
