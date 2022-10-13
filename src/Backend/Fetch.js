async function ajax_get(url, callback) {
  console.log("ajax_get for " + url);
  await fetch(url, {
    method: 'GET',
    mode: 'cors'
  })
  .then(response => callback(response))
  .catch(function(error){
    console.log("Error fetching (Frame)")
  });
}
  
export default ajax_get;
  //https://api.thecatapi.com/v1/images/search?size=full
  //ajax_get('https://thecatapi.com/v1/images?api_key=live_hveqJJk0xusnri3wFu6oSTJ2kwKzcKZHgkbHvRq5BJoY7kN3xpY99gm6KPxWELar', function(data) {
