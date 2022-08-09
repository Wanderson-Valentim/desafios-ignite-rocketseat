import Button from '../components/Button';
import { GenreResponseProps } from '../assets/Interfaces'
import React from 'react';


interface SideBarProps {
  handleClickButton(id:number):void,
  selectedGenreId: number,
  genres: GenreResponseProps[],
}


function SideBar({ handleClickButton, selectedGenreId, genres }: SideBarProps) {
  return(
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
    </>
  )
}


export default React.memo(SideBar, (prevProps , nextProps) => {
  const handleClickIsEqual = prevProps.handleClickButton === nextProps.handleClickButton
  const idIsEqual = prevProps.selectedGenreId === nextProps.selectedGenreId
  const genresIsEqual = Object.is(prevProps.genres, nextProps.genres)

  return handleClickIsEqual && idIsEqual && genresIsEqual
});