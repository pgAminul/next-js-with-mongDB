"use client";

import axios from "axios";

export default function update({ result }) {
  const id = result._id;
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const data = { name, email };

    await axios
      .put(`http://localhost:3000/api/firstRequest/${id}`, data)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e.message));
  };
  return (
    <div>
      <form className="bg-black mt-5 text-white p-5" onSubmit={handleUpdate}>
        <input
          className="bg-white p-2 mr-5 text-black"
          type="text"
          id="name"
          placeholder="name"
          defaultValue={result.name}
          name="name"
        />

        <input
          className="bg-white p-2 text-black"
          type="email"
          id="email"
          placeholder="email"
          name="email"
          defaultValue={result.email}
        />
        <button
          className="bg-blue-500 p-2 rounded-4xl m-5 cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
