import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";
import bannerImg from "../../../assets/images/checkout/checkout.png";

const ServiceDetailsPage = async ({ params }) => {
    const { id } = await params;

  const data = await dbConnect("services").findOne({ _id: new ObjectId(id) });

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
            <h2 className="font-semibold text-white text-3xl md:text-5xl">Service Details</h2>
          </div>
        </figure>
      </section>
    </div>
  );
};

export default ServiceDetailsPage;
