import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Cancel = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Payment Cancel !!
          </h2>
          <p>Your order has  not been  placed</p>
        </div>
      )}
    </div>
  );
};

export default Cancel;
