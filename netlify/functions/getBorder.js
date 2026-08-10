exports.handler = async (event) => {
    const code = event.queryStringParameters.code;
    console.log(event.queryStringParameters);
  const API_KEY = process.env.REST_COUNTRIES_API_KEY;
  const res = await fetch(`https://api.restcountries.com/countries/v5/borders/${code}`, {
    headers: { Authorization: `Bearer ${API_KEY}` }
  });
  const data = await res.json();
  console.log(data);
  return { statusCode: 200, body: JSON.stringify(data.data.objects) };
};