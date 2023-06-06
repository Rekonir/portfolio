import style from './BodyPage.module.scss'
import Data from '../../../public/Data.json'
import Content from '../../components/Content/Content';

const BodyPage = () => {
    return (
        <div className={style.BodyPage}>
        {
            Data.map(position => (
                <Content position={position} />
            ))
        }
        </div>

    );
};

export default BodyPage;