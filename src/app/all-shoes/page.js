import React from "react";
import Jahid from "next/link";

const AllShoes = async () => {
  const res = await fetch("http://localhost:5000/shoes",{cache:'no-store'});
  const shoesData = await res.json();

  return (
    <div>
      <h1 className="text-center font-bold text-5xl my-20">All Shoes</h1>
      <div className="grid grid-cols-3 place-items-center">
        {shoesData.map((shoe) => (
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
      <Jahid href={"/"}>
        <div className="text-center">
        <button className="btn btn-outline btn-primary ">Home</button>

        </div>

      </Jahid>
    </div>
  );
};

export default AllShoes;
