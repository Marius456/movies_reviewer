import { useState, useEffect } from 'react';
import axios from 'axios';
// import { MOVIEDB_API_KEY } from '@env';

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/${endpoint}`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setFetchError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {
    data, isLoading, fetchError, refetch,
  };
};

export default useFetch;
