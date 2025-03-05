import React from "react";

const checkoutPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/service/${id}`);
  const data = await res.json();
  return <div>{JSON.stringify(data)}</div>;
};

export default checkoutPage;
