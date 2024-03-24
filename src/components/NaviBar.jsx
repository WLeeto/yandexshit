import React from 'react'

export const NaviBar = (children) => {
    /* Тут панель навигации с сылками, если она динамическая, то еще дети, если нет, то просто ul-li */
  return (
    <>
        <ul>
            <li>Видео</li>
            <li>Картинки</li>
            <li>Новости</li>
            <li>Карты</li>
            <li>Маркет</li>
            <li>Переводчик</li>
            <li>Эфир</li>
            <li>ещё</li>
        </ul>
        {children}
    </>
  )
}
