import { weatherAPI } from "../middleware/api";

const handleCityQuery = async ({ city }) => {
  const params = {
    access_key: import.meta.env.VITE_SECRETKEY,
    query: city,
  };

  const response = await weatherAPI.get("current", { params });

  return response.data;
};

export default handleCityQuery;
