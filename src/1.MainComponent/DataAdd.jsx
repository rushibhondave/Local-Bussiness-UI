import React, { useState } from "react";
import axios from "axios";

function DataAdd() {
  const [name, setname] = useState("");
  const [sex, setpsex] = useState("");
  const [country, setcountry] = useState("");
  const [newsletter, setnewsletter] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, sex, country, newsletter);
    try {
      const url = "https://localhost:7222/api/Logins";
      const data = {
        name: name,
        sex: sex,
        country: country, 
        Subscribe: newsletter,
      };

      axios.post(url, data).then((result) => {
        clear();
      });
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  const clear = () => {
    setname("");
    setpsex("");
    setcountry("");
    setnewsletter(false); // Reset checkbox to unchecked
  };

  return (
    <form className="formm" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="sex">Sex:</label>
      <input
        type="radio"
        name="sex"
        id="male"
        value="male"
        checked={sex === "male"}
        onChange={(e) => setpsex(e.target.value)}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="sex"
        id="female"
        value="female"
        checked={sex === "female"}
        onChange={(e) => setpsex(e.target.value)}
      />
      <label htmlFor="female">Female</label>
      <br />
      <br />

      <label htmlFor="country">Country:</label>
      <select
        name="country"
        id="country"
        value={country}
        onChange={(e) => setcountry(e.target.value)}
      >
        <option>Select an option</option>
        <option value="nepal">Nepal</option>
        <option value="usa">USA</option>
        <option value="australia">Australia</option>
      </select>

      <br />
      <br />

      <input
        type="checkbox"
        name="newsletter"
        id="newsletter"
        checked={newsletter}
        onChange={(e) => setnewsletter(e.target.checked)}
      />
      <label htmlFor="newsletter">Subscribe?</label>
      <br />
      <button type="submit" value="Submit" className="btn">
        Submit
      </button>
    </form>
  );
}

export default DataAdd;
