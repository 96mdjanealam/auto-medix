import dbConnect, { dbCollection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";
import bannerImg from "../../../assets/images/checkout/checkout.png";
import Link from "next/link";

const ServiceDetailsPage = async ({ params }) => {
  const { id } = await params;

  // const data = await dbConnect(dbCollection.services).findOne({
  //   _id: new ObjectId(id),
  // });

  const res = await fetch(`http://localhost:3000/api/service/${id}`)
  const data = await res.json();


  return (
    <div className="w-11/12 mx-auto">
      <section>
        <figure className="relative">
          <Image
            src={bannerImg}
            width={1137}
            height={300}
            alt={data.title}
            className="object-cover w-full"
          ></Image>
          <div className="absolute black-grad top-0 left-0 w-full h-full flex items-center p-10 rounded-lg">
            <h2 className="font-semibold text-white text-3xl md:text-5xl">
              Service Details
            </h2>
          </div>
        </figure>
        <div className="mt-6 flex items-center gap-3 font-bold"><p>Price: {data.price}</p>
        <Link href={`/checkout/${data._id}`}>
        <button className="btn btn-sm btn-success">checkout</button>
        </Link>
        </div>
        <p className="mt-3 font-bold">{data.title}</p>
        <p className="mt-6">{data.description}</p>
      </section>
      <h4 className="my-5 font-bold">Facilities</h4>
      {data.facility.map((item, index) => (
        <div key={index} className="mb-4">
          <p>{item.name}</p>
          <p>{item.details}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceDetailsPage;
