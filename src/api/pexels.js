import axios from "axios";

export const getImages = async (searchTerm = "abstract") =>
    await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers: {
            Authorization: "563492ad6f91700001000001ef3eaf2d3f7941c4a0607c593006185c",
        },
    });
