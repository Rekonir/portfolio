import style from './Footer.module.scss';
import Stack from '../Stack/Stack';
import Button from '../UI/Button/Button';

const Footer = () => {
    return (
        <div className={style.Footer}>
            <h3>Experience </h3>
            <Stack />
            <div className={style.btns}>
                <Button variant='white'>
                    Скачать резюме
                </Button>
                <Button variant="red">
                    Я на hh.ru
                </Button>
            </div>
        </div>
    );
};

export default Footer;