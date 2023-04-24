"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";

import axios from "axios";
import { toast } from "react-hot-toast";

import { SafeUser, SafeListing } from "../types";

interface VehiclesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const VehiclesClient: React.FC<VehiclesClientProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success("Listing Deleted");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error || "Error cancelling");
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading
        title="Your Vehicles"
        subtitle="These are your vehicles that you have listed on Cloud-BnC."
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onCancel}
            disabled={deletingId === listing.id}
            actionLabel="Unlist Vehicle"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default VehiclesClient;
