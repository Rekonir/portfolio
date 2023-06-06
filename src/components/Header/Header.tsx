import style from './Header.module.scss'
import Button from '../UI/Button/Button';


const Header = () => {
    // const downloadFile = () => {
    //     const fileUri =
    //         "https://example.com/example.docx";

    //     const link = document.createElement("a");
    //     link.href = fileUri;
    //     link.setAttribute("download", "example.docx");
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };
    return (
        <div className={style.header}>
            <div className={style.contacts}>
                <p>Телефон для связи: +7(981)973-80-72</p>
                <p>Почта для связи: zhed-nikita@mail.ru</p>
            </div>
            <Button variant='white' >
                Скачать резюме
            </Button>
            <Button variant="red" >
                Я на hh.ru
            </Button>
        </div>
    );
};

export default Header;