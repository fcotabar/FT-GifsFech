export const fetchGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=AuSp1XRXDUDvgf88uClXUb8y2AsfJ1oj`;

  try {
    const resp = await fetch(url);
    const { data, meta, message } = await resp.json();

    if (data && meta.status === 200) {
      const gifs = data.map(({ id, title, images }) => ({
        id,
        title,
        url: images?.downsized_medium.url,
      }));

      return gifs;
    } else {
      // console.log(meta.status);
      throw new Error(message);
    }
  } catch (err) {
    throw new Error(err);
  }
};
