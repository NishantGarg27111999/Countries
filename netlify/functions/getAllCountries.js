exports.handler = async () => {
  const API_KEY = process.env.REST_COUNTRIES_API_KEY;
  const res = await fetch('https://api.restcountries.com/v5/all', {
    headers: { Authorization: `Bearer ${API_KEY}` }
  });
  const data = await res.json();
  return { statusCode: 200, body: JSON.stringify(data) };
};