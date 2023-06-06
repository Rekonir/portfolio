import style from './Footer.module.scss';
import Stack from '../Stack/Stack';
import Button from '../UI/Button/Button';

const Footer = () => {
    return (
        <div className={style.Footer}>
            <h3>Experience </h3>
            <Stack />
            <div className={style.btns}>
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
        </div>
    );
};

export default Footer;