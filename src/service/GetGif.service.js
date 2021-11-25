export const getGif = async ( area ) => {
        
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(area) }&limit=10&api_key=AXuDDzsw2aFarCLN2foDcNv8g1IF1cOa`;
    const response = await fetch( apiUrl );
    const { data } = await response.json();
    // const { id, title, images: { downsized_medium: { url: girUrl } }, ...resto } = data;

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}