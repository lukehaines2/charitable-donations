import config from "../config";

const opts = { headers: {"Content-Type": "application/json"} };

// export const getCharityData = (charityId) => {
//   const id = parseInt(charityId);
//   return fetch(`${config.api.endpoint}${config.api.appId}/v1/charity/${id}`, opts)
//   .then((res) => res.json());
// };

export const getDonationData = (charityId) => {
  const id = parseInt(charityId);
  return fetch(`${config.api.endpoint}${config.api.appId}/v1/charity/${id}/donations`, opts)
  .then((res) => handleResponse(res))
  .catch(err => alert(err));
};

const handleResponse = (data) => {
  const contentType = data.headers.get("Content-Type");
  if (!contentType) {
    return new Promise((resolve) => resolve(data))
  } else if (contentType.indexOf("application/json") !== -1)  {
    return data.json()
  } else {
    return data.text()
  }
}
