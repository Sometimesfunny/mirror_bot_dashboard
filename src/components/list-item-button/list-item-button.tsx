import styles from './list-item-button.module.scss';
import classNames from 'classnames';
import { ChannelData, ServerData, TelegramChat } from '../../lib/types/types';

export interface ListItemButtonProps {
    className?: string;
    data?: ChannelData | ServerData | TelegramChat;
}

function onClickFunction (id: number) {
    const newEvent = new CustomEvent("onChannelSelected", {detail: id});
    document.dispatchEvent(newEvent);
    console.log("Event dispatched");
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-list-item-buttons-and-templates
 */
export const ListItemButton = ({ className, data={name: 'Title', id: 12345} }: ListItemButtonProps) => {
    return (
        <li className={styles.item}>
            <button className={styles['item-button']} onClick={e => onClickFunction(Number(data.id))}>
                <span className={styles['item-title']}>{data.name}</span>
                <span className={styles['item-subtitle']}>{data.id}</span>
            </button>
        </li>
    );
};
