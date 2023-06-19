import styles from './nav-bar.module.scss';
import classNames from 'classnames';
import { StatusBar } from '../status-bar/status-bar';

export interface NavBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-nav-bars-and-templates
 */
export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav className={styles.navigator}>
                <span className={styles['logo-box']}>MIRROR BOT DASHBOARD</span>
                <nav className={styles['navigator-text-box']}>
                    <StatusBar />
                </nav>
                <span className={styles['login-container']}>
                    <button className={styles['base-button']} disabled>
                        Login
                    </button>
                </span>
            </nav>
        </div>
    );
};
