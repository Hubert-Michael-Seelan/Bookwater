import React from "react";

let bookWater = {
  name: "Tahir",
  designation: "Technical Lead",
  company_name: "BookWater Tech Pvt Ltd",
  city: "Chennai",
  exp: "4 + Years",
};
let caps = Object.keys(bookWater);
caps.forEach((key) => {
  bookWater[key] = bookWater[key].toUpperCase();
  console.log(`${key} : ${bookWater[key]}`);
});

// console.log(bookWater);

export const IIndQuestion = () => {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
};
