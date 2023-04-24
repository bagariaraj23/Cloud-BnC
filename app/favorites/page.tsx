import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import { getCurrentUser } from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavorites";
import FavoriteClient from "./FavoriteClient";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Go save some listings!"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
        <FavoriteClient
            listings={listings}
            currentUser={currentUser}
        />
    </ClientOnly>
  )
};

export default ListingPage;
