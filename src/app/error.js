"use client";

const Errorpage = ({ error, reset }) => {
  console.log(error);
  console.log(reset);
  return (
    <div className="text-center">
      <h1 className="text-4xl text-red-500">Something went wrong!!</h1>
      <h1 className="text-4xl text-red-500">{error.message}</h1>
      <button onClick={()=>reset()} className="btn btn-outline btn-warning mt-10">
        {"                                                           "}
        <span className="text-bold text-black">Reload</span>
      </button>
    </div>
  );
};
export default Errorpage;
