import React from 'react'

export const InterestsContainer = ({ children }) => {
  /* Контейнер для интересностей под баннером рекламы */
    /* Задаем ему размеры и флекс */

  return (
    <>
      {React.Children.map(children, (child) => (
        <InterestsElement {...child.props} />
      ))}
    </>
  );
};
