import locations from "../../blore-locations";

const formattedLocations = locations.map((location) => ({
//   flag: country.flag,
  label: location.label,
  value: location.value,
  latlng: location.latlng,
  region: location.region,
}));

const useLocation = () => {
  const getAll = () => formattedLocations;

  const getByValue = (value: string) => {
    return formattedLocations.find((item) => item.value === value);
  };

  return {
    getAll,
    getByValue,
  };
};

export default useLocation;
