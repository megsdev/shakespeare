import axios from "axios";
import { Review } from "./interfaces";
import config from "./config";

export const fetchAll = async (): Promise<Review[]> => {
  try {
    const result = (
      await axios.get(config.apiUrl, {
        headers: { "x-api-key": config.apiAuthToken },
      })
    ).data;

    return result.map((x: any) => {
      return {
        rating: x.rating,
        publishDate: new Date(x.publish_date),
        id: parseInt(x.id),
        body: x.body,
        author: x.author,
      };
    });
  } catch (error) {
    return null;
  }
};

export const fetch = async (id: number): Promise<Review> => {
  try {
    const result = await axios.get(`${config.apiUrl}/${id}`, {
      headers: { "x-api-key": config.apiAuthToken },
    });
    return {
      rating: result.data.rating,
      publishDate: new Date(result.data.publish_date),
      id: parseInt(result.data.id),
      body: result.data.body,
      author: result.data.author,
    };
  } catch (error) {
    return null;
  }
};
