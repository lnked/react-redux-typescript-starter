import { useState, useEffect, useRef } from 'react';

import { API_URL } from 'settings';

export function useFetch(url, init) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const prevUrl = useRef();
  const prevInit = useRef();

  useEffect(() => {
    if (prevUrl.current === url && prevInit.current === init) return;

    prevUrl.current = url;
    prevInit.current = init;

    fetch(`${API_URL}/${url}`, init)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return setError(response);
      })
      .then(data => setData(data))
      .catch(err => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [init, url]);

  return { data, loading, error };
}

// import useFetch from 'hooks/useFetch';

// export default function HookDemo() {
//   const { data, loading, error } = useFetch('users');
//   if (loading) return 'Loading...';
//   if (error) return 'Oops!';
//   return data[0].username;
// }
