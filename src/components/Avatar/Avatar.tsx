import { ImgHTMLAttributes } from 'react';
import styles from  './Avatar.module.css'

//utilizando desestruturação ao inves de props, passando valor true como padrão caso não existir outro.

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props} : AvatarProps){
  return(
    <img  className={hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder} {...props} />
  )
}