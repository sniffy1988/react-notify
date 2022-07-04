import data from "../data/ua_locations_10_11_2021.json";

const filteredData = data.filter((item) => item.type === "DISTRICT");

const getDistricts = (regId) => {
  return filteredData
    .filter((item) => item.parent_id === regId)
    .sort((a, b) => {
      return a.id - b.id;
    });
};

export default getDistricts;
