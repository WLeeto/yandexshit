import React from 'react'

export const NewsContainer = (children, props) => {
    /* Контейнер для новостей */
    /* props - список новостей или последние 5 новостей */
    
  return (
    /* Тут верстка заголовка h1 */
    {...props.map(el => React.Children.map(el.props.children, chil => <News props={el}/>))}
    /* Тут курсы валют */
  )
}
