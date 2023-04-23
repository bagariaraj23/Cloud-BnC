'use client';

import React from "react";
import Container from "../Container";
import { MdPedalBike } from "react-icons/md";
import { AiTwotoneCar } from "react-icons/ai";
import { FaMotorcycle, FaTruck } from "react-icons/fa";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Car",
    icon: AiTwotoneCar,
    description: "This is a car",
  },
  {
    label: "Motorcycle",
    icon: FaMotorcycle,
    description: "This is a motorcycle",
  },
  {
    label: "Truck",
    icon: FaTruck,
    description: "This is a Truck",
  },
  {
    label: "Pedal Bicycle",
    icon: MdPedalBike,
    description: "This is a pedalling bicycle",
  },
];

const Categories = () => {
  const params = useSearchParams();

  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-center overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
