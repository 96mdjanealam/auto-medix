import React from "react";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import dbConnect, { dbCollection } from "@/lib/dbConnect";
import Link from "next/link";

const ServicesSection = async() => {

  const data = await dbConnect(dbCollection.services).find().toArray();

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item._id} className="border-2 p-4 rounded-lg shadow-lg">
            <figure className="w-full h-60">
              <Image
                src={item?.img}
                alt={item.title}
                width={314}
                height={208}
                unoptimized 
                className="object-cover w-full h-full rounded-lg"
              />
            </figure>

            <p className="font-bold mt-4">{item.title}</p>

            <div className="flex justify-between items-center text-orange-600 font-semibold text-sm mt-2">
              <p>Price: ${item.price}</p>
              <Link href={`/services/${item._id}`}><FaArrowRight /></Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
