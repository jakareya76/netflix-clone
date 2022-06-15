import { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineClose,
} from 'react-icons/ai';

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.saveShow);
    });
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`);

  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => {
        return item.id !== passedID;
      });
      await updateDoc(movieRef, {
        saveShow: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">
        My Shows
      </h1>
      <div className="relative flex item-center group">
        <AiOutlineArrowLeft
          onClick={slideLeft}
          size={30}
          color="#333"
          className="bg-white rounded-full p-1 absolute left-2 top-[40%] opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={`slider`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[160px] sm:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {item?.title}
                  </p>
                  <p
                    className="absolute top-4 right-4"
                    onClick={() => deleteShow(item.id)}
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <AiOutlineArrowRight
          onClick={slideRight}
          size={30}
          color="#333"
          className="bg-white rounded-full p-1 absolute right-2 top-[40%] opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default SavedShows;
