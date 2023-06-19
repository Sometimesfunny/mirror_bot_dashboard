import styles from './channel.module.scss';
import classNames from 'classnames';
import { ChangeEventHandler } from 'react';

export interface ChannelProps {
    className?: string;
    onChangeFunction?: ChangeEventHandler;
    title?: string;
    id?: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-channels-and-templates
 */
export const Channel = ({ className, onChangeFunction, title='Title', id=1234567890 }: ChannelProps) => {
    return (
            <li
                className={classNames(
                    styles['list-item'],
                    styles['list-item-container'],
                    styles['list-item-container']
                )}
            >
                <span className={styles['checkbox-container']}>
                    <input
                        type="checkbox"
                        className={styles.checkbox}
                        onChange={onChangeFunction}
                    />
                </span>
                <span className={styles.item}>
                    <span className={styles['item-title']}>{title}</span>
                    <span className={styles['item-subtitle']}>{id}</span>
                </span>
            </li>
    );
};
