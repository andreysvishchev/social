import React from 'react';
import loader from "../../../img/loader.svg";
import style from './Preloader.module.scss'

const Preloader = () => {
    return (
        <div>
            <img className={style.img} src={loader} alt="loader"/>
        </div>
    );
};


export default Preloader;