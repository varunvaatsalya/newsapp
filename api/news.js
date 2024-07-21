import fetch from 'node-fetch';

export default async (req, res) => {
  const { country, category, page, pageSize } = req.query;
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d093053d72bc40248998159804e0e67d&page=${page}&pageSize=${pageSize}`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
