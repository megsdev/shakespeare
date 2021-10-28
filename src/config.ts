import "dotenv/config";

const config = {
  apiUrl: process.env.REACT_APP_API_URL || "",
  apiAuthToken: process.env.REACT_APP_AUTH_TOKEN || "",
};

export default config;
