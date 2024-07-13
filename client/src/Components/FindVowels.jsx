import React, { useState } from "react";

const FindVowels = () => {
  const [data, setData] = useState("");
  const [vowelsCount, setVowelsCount] = useState(0);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
    console.log(data)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let Vowels = "aAeEiIoOuU";
    let string = data;
    let capsStr = "";
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (Vowels.indexOf(string[i]) !== -1) {
        capsStr += string[i].toUpperCase();
        count += 1;
      } else {
        capsStr += string[i];
      }
    }
    setResult(capsStr);
    setVowelsCount(count);
    setData(""); // Clear the input field
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Here"
          onChange={handleChange}
          value={data}
        />
        <button type="submit">Submit</button>
      </form>
      {result && (
        <div>
          <h1>{result}</h1>
          <p>Vowels Count: {vowelsCount}</p>
        </div>
      )}
    </div>
  );
};

export default FindVowels;
