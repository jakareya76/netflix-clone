import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from 'react-icons/hi';

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
      <div className="relative flex item-center group">
        <HiOutlineArrowNarrowLeft
          onClick={slideLeft}
          size={30}
          className="bg-white rounded-full p-1 absolute left-2 top-[40%] opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={`slider${rowId}`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((curMovie, idx) => {
            return <Movie curMovie={curMovie} key={idx} />;
          })}
        </div>
        <HiOutlineArrowNarrowRight
          onClick={slideRight}
          size={30}
          className="bg-white rounded-full p-1 absolute right-2 top-[40%] opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
