import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountry } from '../redux/weather/api';

function Countries() {
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);

  return (
    <div className="container text-center mx-auto border-2 border-red-600 ">
      <h1 className=" border border-green-500 h-60">Countries</h1>
      <ul className="grid grid-cols-2 border border-green-950 h-screen">
        {country.map((item) => (
          <li className="h-60 border bg-green-600" key={item.ID}>{item.LocalizedName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Countries;
