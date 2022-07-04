import data from "../data/ua_locations_10_11_2021.json";

const getRegions = () => {
  return data
    .filter((item) => {
      return item.type === "STATE";
    })
    .sort((a, b) => {
      return a.id - b.id;
    });
};

export default getRegions;
