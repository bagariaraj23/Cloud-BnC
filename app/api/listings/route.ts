import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import { getCurrentUser } from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  
  if (!currentUser) {
    // return NextResponse.redirect("/login");
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    title,
    description,
    category,
    imagesSrc,
    docImagesSrc,
    insImagesSrc,
    polImagesSrc,
    passengerCount,
    pricePerHour,
    pricePerDay,
    pricePerWeek,
    make,
    model,
    year,
    color,
    location,
  } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
        NextResponse.error();
    //   return NextResponse.redirect("/listings/new");
    }
  });

  const listing = await prisma.listing.create({
    data: {
        title,
        description,
        category,
        imagesSrc,
        docImagesSrc,
        insImagesSrc,
        polImagesSrc,
        passengerCount,
        pricePerHour: parseInt(pricePerHour, 10),
        pricePerDay: parseInt(pricePerDay, 10),
        pricePerWeek: parseInt(pricePerWeek, 10),
        make,
        model,
        year: parseInt(year, 10),
        color,
        location: location.value,
        userId: currentUser.id,
        }
    });

    // return NextResponse.redirect(`/listings/${listing.id}`);
    return NextResponse.json(listing);
}
