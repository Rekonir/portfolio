import style from './Header.module.scss'
import Button from '../UI/Button/Button';


const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.contacts}>
                <p>Телефон для связи: +7(981)973-80-72</p>
                <p>Почта для связи: zhed-nikita@mail.ru</p>
            </div>
            <Button variant='white' size='small'>
                Скачать резюме
            </Button>
            <Button variant="red" size='small'>
                Я на HH.ru
            </Button>
        </div>
    );
};

export default Header;