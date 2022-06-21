import React from 'react';

import styles from './Avatar.module.css';

interface AvatarProps{
    hasBorder?: boolean;
    src: string;
    alt?: string;
}


const Avatar = ({ hasBorder = true, src }: AvatarProps) => {

    return (

        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />

    );
}

export default Avatar;