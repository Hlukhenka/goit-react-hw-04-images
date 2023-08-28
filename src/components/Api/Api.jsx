import axios from 'axios';

const KEY = '33413248-e9639b85a9def0afc9b27b636';
const BASE_URL = 'https://pixabay.com/api/';
const BASE_PARAMS = '&image_type=photo&orientation=horizontal&per_page=12';

export const fetchImages = async function (search, page) {
  const url = `${BASE_URL}?q=${search}&page=${page}&key=${KEY}${BASE_PARAMS}`;
  const response = await axios.get(url);
  const data = response.data;
  return data;
};

