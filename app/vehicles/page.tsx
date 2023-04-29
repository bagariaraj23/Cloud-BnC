import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import { getCurrentUser } from "../actions/getCurrentUser";

import getListings from "../actions/getListings";
import VehiclesClient from "./VehiclesClient";

const VehiclesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
        <EmptyState
          title="You are not logged in"
          subtitle="You must be logged in to view your trips"
        />
    );
  }
  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No vehicles found"
          subtitle="Looks like you don't have any vehicles yet."
        /> 
      </ClientOnly>
    );
  }

  return(
    <ClientOnly>
        <VehiclesClient
        listings = {listings}
        currentUser = {currentUser}
        />
    </ClientOnly>
  )
};

export default VehiclesPage;