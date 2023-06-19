import styles from './channels-with-searchbar.module.scss';
import classNames from 'classnames';
import { ChannelsContainer } from '../channels-container/channels-container';
import { useState } from 'react';
import { ChannelData } from '../../lib/types/types';

export interface ChannelsWithSearchbarProps {
    className?: string;
    data?: Array<ChannelData>;
}

const templateData = [
    {
        name: 'Title1',
        id: 1234567890,
    },
    {
        name: 'Title2',
        id: 987654321,
    },
    {
        name: 'Title3',
        id: 1234567891,
    },
    {
        name: 'Title4',
        id: 111,
    },
    {
        name: 'Title1',
        id: 1234567892,
    },
    {
        name: 'Title2',
        id: 987654322,
    },
    {
        name: 'Title3',
        id: 1234567893,
    },
    {
        name: 'Title4',
        id: 112,
    },
];

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-channels-with-searchbars-and-templates
 */
export const ChannelsWithSearchbar = ({
    className,
    data = templateData,
}: ChannelsWithSearchbarProps) => {
    const [changableList, searchInList] = useState(data);
    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchInList(
            data.filter(
                (item) =>
                    item.id.toString().includes(e.target.value.toLowerCase()) || item.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    };
    return (
        <div className={classNames(styles.root, className)}>
            <input
                className={styles['search-bar']}
                placeholder="Search by name or id..."
                onChange={onSearch}
            />
            <div className={styles.modifier}>
                {<ChannelsContainer className={styles.modifier} channelsDataList={changableList} />}
            </div>
        </div>
    );
};
