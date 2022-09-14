const FetchBibleData = async function () {
  const headers = { "api-key": process.env.REACT_APP_API_KEY };
  const response = await fetch(
    "https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01/books?include-chapters=true&include-chapters-and-sections=false",
    { headers }
  );

  const data = await response.json();

  return data;
};

export default FetchBibleData;
