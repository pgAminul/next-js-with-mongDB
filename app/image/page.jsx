import Image from "next/image";
import React from "react";

export default function images() {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuB1dRN3GGajr22atBaoSa1v9AZD-91CezbQ&s"
        alt=""
      />

      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuB1dRN3GGajr22atBaoSa1v9AZD-91CezbQ&s"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}
