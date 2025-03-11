import Checkout from "@/components/Checkout";
import React from "react";

const checkoutPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/service/${id}`);
  const data = await res.json();
  return <div className="w-11/12 mx-auto">
    <Checkout></Checkout>
  </div>;
};

export default checkoutPage;
