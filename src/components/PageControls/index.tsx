import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchFilms } from '../../store/reducers/actionCreators';
import { filmsSlice } from '../../store/reducers/filmsSlice';
import cl from './pageControls.module.scss';

const PageControls: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    searchParam: { value, year, type, numberPage },
    films,
  } = useAppSelector((state) => state.films);
  const { setPrevPage, setNextPage } = filmsSlice.actions;
  const [isDisablePrev, setIsDisablePrev] = useState(true);
  const [isDisableNext, setIsDisableNext] = useState(false);

  useEffect(() => {
    if (films.Response === 'False') {
      setIsDisableNext(true);
    } else {
      setIsDisableNext(false);
    }
  }, [films.Response]);

  useEffect(() => {
    dispatch(fetchFilms({ value, year, type, numberPage }));
  }, [numberPage]);

  const getPrevPage = () => {
    if (numberPage === 2) {
      setIsDisablePrev(true);
    }
    dispatch(setPrevPage());
  };

  const getNextPage = async () => {
    setIsDisablePrev(false);
    dispatch(setNextPage());
  };

  return (
    <div className={cl['page-controls']}>
      <button
        type="button"
        onClick={getPrevPage}
        disabled={isDisablePrev}
        className={`${cl['page-controls__button']} button`}
      >
        &#171;
      </button>
      <p className={cl['page-controls__number']}>{numberPage}</p>
      <button
        type="button"
        onClick={getNextPage}
        disabled={isDisableNext}
        className={`${cl['page-controls__button']} button`}
      >
        &#187;
      </button>
    </div>
  );
};

export default PageControls;
