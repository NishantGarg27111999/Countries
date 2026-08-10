exports.handler = async () => {
    const border = event.queryStringParameters.border;
  const API_KEY = process.env.REST_COUNTRIES_API_KEY;
  const res = await fetch(`https://api.restcountries.com/countries/v5/borders/${border}`, {
    headers: { Authorization: `Bearer ${API_KEY}` }
  });
  const data = await res.json();
  
  return { statusCode: 200, body: JSON.stringify(data.objects[0]?.names.common) };
};