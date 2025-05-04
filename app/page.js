"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const data = { name, email };

    axios
      .post("http://localhost:3000/api/firstRequest", data)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e.message));
  };

  // second request post method
  const secondHadleformSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const data = { name, email };

    axios
      .post("http://localhost:3000/api/secRequest", data)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e.message));
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/firstRequest")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e.message));
  }, [axios, setData]);

  return (
    <div>
      <h2>This is home page</h2>

      <form className="bg-black text-white p-5" onSubmit={handleFormSubmit}>
        <input
          className="bg-white p-2 mr-5 text-black"
          type="text"
          id="name"
          placeholder="name"
          name="name"
        />

        <input
          className="bg-white p-2 text-black"
          type="email"
          id="email"
          placeholder="email"
          name="email"
        />
        <button
          className="bg-blue-500 p-2 rounded-4xl m-5 cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>

      {/* SECOND REQUEST  */}
      <form
        className="bg-black mt-5 text-white p-5"
        onSubmit={secondHadleformSubmit}
      >
        <input
          className="bg-white p-2 mr-5 text-black"
          type="text"
          id="name"
          placeholder="name"
          name="name"
        />

        <input
          className="bg-white p-2 text-black"
          type="email"
          id="email"
          placeholder="email"
          name="email"
        />
        <button
          className="bg-blue-500 p-2 rounded-4xl m-5 cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>

      <div>
        {data.map((user) => {
          return (
            <div>
              <h2>{user.name}</h2>
              <h2>{user.email}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
