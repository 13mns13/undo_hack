import React from 'react'

import classes from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <div className='container'>
                <div className={classes.row}>
                    <a  className={classes.link} href="tell:89673180303">+7(967) 318 03 03</a>
                    <div className={classes.social}>
                        <box-icon name='vk' type='logo' color='#ffffff' ></box-icon>
                        <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon>
                        <box-icon name='facebook' type='logo' color='#ffffff' ></box-icon>
                        <box-icon name='youtube' type='logo' color='#ffffff' ></box-icon>
                        <box-icon name='twitter' type='logo' color='#ffffff' ></box-icon>
                    </div>
                </div>
                <div className={classes.about}>
                    <p><b>ООО «Opium»</b> (Лицензия на осуществление брокерской деятельности № 154-04434-100000 от 10.01.2001 г. Выдана ФСФР. Без ограничения срока действия. С информацией об <b>ООО «Opium»</b> можно ознакомиться по ссылке.</p>
                    <p>Банковские услуги оказывает <b>АО «Opium»</b>, универсальная лицензия Банка России № 101 от 29.11.2018 г. Выдана без ограничения срока действия.</p>
                    <p>Прогноз по рейтингу — стабильный.</p>
                </div>
                <div className={classes.copywrite}>
                    <p><b>ООО «Opium»</b><br/>© 2022 — 2022.</p>
                    <p>Любое использование материалов<br/>сайта без разрешения запрещено</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer