import React from 'react'
import style from './index.module.scss'
import Star from '@/assets/InfoPageStar.svg'

const Author
 = () => {
  return (
    <div className={style.author_box}>
      <p className={style.author_name}>Mischca Sullivan</p>
            <div className={style.stars}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
    </div>
  )
}

export default Author
