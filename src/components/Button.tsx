import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes } from 'react';
import React from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}


function Button({ iconName, title, selected, ...rest }: ButtonProps) {
  return (
    <button type="button" {...(selected && { className: 'selected' })} {...rest}>
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}


export default React.memo(Button, (prevProps , nextProps) => {
  const iconNameIsEqual = prevProps.iconName === nextProps.iconName
  const titleIsEqual = prevProps.title === nextProps.title
  const selectedIsEqual = prevProps.selected === nextProps.selected

  return iconNameIsEqual && titleIsEqual && selectedIsEqual
});