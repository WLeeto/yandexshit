import React from 'react'

export const NewsElement = (props) => {
    /* Тут делаем элемент новости - достаем название, ссылку и обрабатываем */
    const { text, url } = props
  return (
    <a url={url}>{text}</a>
  )
}
