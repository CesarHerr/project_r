import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegion } from '../redux/weather/api';

function Region() {
  const dispatch = useDispatch();
  const { region } = useSelector((state) => state.region);

  useEffect(() => {
    dispatch(fetchRegion());
  }, [dispatch]);

  return (
    <div className="container text-center mx-auto border-2 border-red-600 ">
      <h1 className=" border border-green-500 h-60">Regions</h1>
      <ul className="grid grid-cols-2 border border-green-950 h-screen">
        {region.map((item) => (
          <li className="h-60 border bg-green-600" key={item.ID}>{item.LocalizedName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Region;
