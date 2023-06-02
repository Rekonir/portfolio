import style from './Content.module.scss';
import { ILink } from '../../type/type';
import Button from '../UI/Button/Button';
import { FC } from 'react';

interface linkProps {
    position: ILink
}
const Content: FC<linkProps> = ({ position }) => {
    return (
        <div className={style.Content}>
            <div className={style.photoBox}>
                <img className={style.photo} src={position.photo} alt="" />
            </div>
            <div className={style.description}>
                <p>{position.description}</p>
                <div className={style.btns}>
                    <a className={style.link} href={position.site_link}>
                        <Button >
                            {position.name}
                        </Button>
                    </a>
                    <a className={style.link} href={position.site_link}>
                        <Button >
                            GitHub: {position.name}
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Content;