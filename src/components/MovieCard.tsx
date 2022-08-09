import React from 'react';
import { useMemo } from 'react';
import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';


interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}


function MovieCard(props: MovieCardProps) {
  const clockIcon = useMemo(() => <Clock/>, []);
  const starIcon = useMemo(() => <Star/>, []);

  return (
    <div className="movie-card">
      <img
        src={props.poster}
        alt={props.title}
      />

      <div>
        <div className="movie-info">
          <span>{props.title}</span>
          <div className="meta">
            <div>
              {starIcon} {props.rating}
            </div>

            <div>
              {clockIcon} {props.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default React.memo(MovieCard, (prevProps , nextProps) => {
  return (prevProps.title === nextProps.title) && (prevProps.rating === nextProps.rating)
});