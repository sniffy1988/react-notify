import data from "../data/ua_locations_10_11_2021.json";

const getCity = (disrtId) => {
  return data
    .filter((item) => {
      return item.parent_id === disrtId;
    })
    .sort((a, b) => {
      return a.id - b.id;
    });
};

export default getCity;
