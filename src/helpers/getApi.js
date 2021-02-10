export const getApi = async(category) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=V6QGYoLheM381AuLKVUEnQTpe3CshAGw`;
  const resp = await fetch(url);
  const {data} = await resp.json();
  const gifs = data.map( image => {
    return {
        id: image.id,
        title: image.title,
        url: image.images.fixed_height.url,
       }
  })
  return gifs;
}