const url = "https://api.tvmaze.com/shows/82/episodes";
const fechmove = async() => {
    const res = await axios.get(url);
    const data = res.data;
    for (const move of data) {

    }
}