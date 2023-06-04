import style from './Stack.module.scss';
import IconsData from '../../IconsData.json'

const Stack = () => {
    return (
        <div className={style.Stack}>
            {
                IconsData.map(icon => (
                    <a href={icon.link}>
                        <img src={icon.logo} alt="stack" className={style.icon} />
                    </a>

                ))
            }

        </div>
    );
};

export default Stack;