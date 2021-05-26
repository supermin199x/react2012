import React from 'react';
import Navpao from '../components/Navpao';
import Header from '../components/Header';
import style from '../pages/Homepao.module.css';

const Homepao = () => {
    return (
        <div className={style.homepao}>
            <Navpao />
            <Header />
        </div>
    )
}

export default Homepao;