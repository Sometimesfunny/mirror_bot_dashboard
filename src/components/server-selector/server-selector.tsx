import styles from './server-selector.module.scss';
import classNames from 'classnames';
import { ButtonsListWithSearchBar } from '../buttons-list-with-search-bar/buttons-list-with-search-bar';
import { AppSelector } from '../app-selector/app-selector';

export interface ServerSelectorProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-server-selectors-and-templates
 */
export const ServerSelector = ({ className }: ServerSelectorProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['app-selector']}>
                <AppSelector />
            </div>
            <div className={styles['buttons-list']}>
                <ButtonsListWithSearchBar />
            </div>
        </div>
    );
};
