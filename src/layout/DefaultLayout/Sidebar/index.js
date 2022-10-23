import classnames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classnames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </div>
    );
}

export default Sidebar;
