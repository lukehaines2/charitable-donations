import config from "../config";

const opts = { headers: {"Content-Type": "application/json"} };

export const getCharityData = (charityId) => {
  return fetch(`${config.api.endpoint}${config.api.appId}/v1/charity/${charityId}`, opts)
  .then((res) => res.json());
}

export const getDonationData = (charityId) => {
  const id = parseInt(charityId);
  return fetch(`${config.api.endpoint}${config.api.appId}/v1/charity/${id}/donations`, opts)
  .then((res) => res.json())
  .catch(err => console.log(err));
}
