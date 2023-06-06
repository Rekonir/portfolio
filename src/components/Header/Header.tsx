import style from './Header.module.scss'
import Button from '../UI/Button/Button';


const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.contacts}>
                <p>Телефон для связи: +7(981)973-80-72</p>
                <p>Почта для связи: zhed-nikita@mail.ru</p>
            </div>
            <a href='https://bryansk.hh.ru/resume_converter/Жедь%20Никита%20Владимирович.pdf?hash=2cc743f9ff0bfe0c010039ed1f456965696d36&type=pdf&hhtmSource=resume&hhtmFrom=resume_builder_position'>
                <Button variant='white' >
                    Скачать резюме
                </Button>
            </a>
            <a href='https://bryansk.hh.ru/applicant/resumes/view?resume=2cc743f9ff0bfe0c010039ed1f456965696d36'>
                <Button variant="red">
                    Я на hh.ru
                </Button>
            </a>
        </div>
    );
};

export default Header;