import { useEffect, useState } from 'react';
import { getRef } from '../firebase';

const useRefInfo = (referencia) => {
    const [data, setData] = useState();
    useEffect(() => {
      getRef(referencia)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setData(snapshot.val());
          } else {
            setData(null);
            console.log('No data available on firebase');
          }
        })
        .catch((error) => {
          console.error(error.message || error);
        });
      return () => {
        return setData(null);
      };
    }, []);
    return data;
  };

export default useRefInfo;   
  