"use client";

import useLocation from "@/app/hooks/useLocation";
import { SafeUser } from "@/app/types";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  imageSrc: string[];
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  imageSrc,
  locationValue,
  id,
  currentUser,
}) => {
  const { getByValue } = useLocation();
  const loc = getByValue(locationValue);

  return (
    <>
      <Heading title={title} subtitle={`${loc?.region}, ${loc?.label}`} />
      <div
        className="
        w-full
        h-[60vh]
        overflow-hidden
        rounded-xl
        relative
        "
      >
        <Image
          alt="Image"
          src={imageSrc[0]}
          fill
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
