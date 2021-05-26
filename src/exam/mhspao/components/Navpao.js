import React from 'react';
import style from './Navpao.module.css';

const Navpao = () => {
    return (
        <div className={style.navbar}>
            <ul className={style.navlinks}>
                <li className={style.navitems}>053611385</li>
                <li className={style.navitems}>info@mhs-pao.go.th</li>
                <li className={style.navitems}>เปิดทำการวันจันทร์ - วันศุกร์ เวลา 08.30 - 16.30 น.</li>
            </ul>
        </div>
    )
}


export default Navpao;