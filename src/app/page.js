import Image from "next/image";

export const metadata = {
  title: "hoME pAGe",
  description: "This is home page",
};
import React from "react";

const Homepage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {cache:'force-cache',
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
  // console.log(data, "jahid data");

  return (
    <div>
      <h1 className="text-5xl text-center ">Next js to welcome 022212 </h1>
      <div className="grid grid-cols-3 place-items-center mt-10 align-items-center ">
        {data.map((shoe) => (
          <div key={shoe.id} className="card w-96 bg-base-100 shadow-xl mt-5">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Buy No</div>
                <div className="badge badge-outline">Details</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
