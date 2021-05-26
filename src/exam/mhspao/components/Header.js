import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <h1 className={style.items}>MHSPAO</h1>
            </div>
            <div className={style.menu}>
                <ul className={style.links}>
                    <li className={style.items}>หน้าหลัก</li>
                    <li className={style.items}>ข้อมูลพื้นฐาน</li>
                    <li className={style.items}>ข่าวประชาสัมพันธ์</li>
                    <li className={style.items}>ศูนย์ข้อมูลข่าวสาร</li>
                    <li className={style.items}>สุจริต & โปร่งใส</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;