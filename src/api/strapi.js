import axios from "axios";

export const getImages = async () =>
    await axios.get(`https://server-strapi-9nvrt.ondigitalocean.app/week-posts`);