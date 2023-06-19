import styles from './server.module.scss';
import classNames from 'classnames';
import React, { useState } from 'react';
import { ChannelsContainer } from '../channels-container/channels-container';

export interface ServerProps {
    className?: string;
    serverName?: string;
    channelsList?: Array<any>;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-servers-and-templates
 */
export const Server = ({ className, serverName = 'Server Name', channelsList=[] }: ServerProps) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCount, setSelectedCount] = useState(0);
    

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const updateSelector = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCount(e.target.checked ? selectedCount + 1 : selectedCount - 1);
    };
    return (
        <div className={styles['server-container']}>
            <button
                className={classNames(styles['server-button'], styles['server-button'])}
                onClick={toggleDropdown}
            >
                {selectedCount ? `${serverName} (${selectedCount})` : serverName}
            </button>

            {dropdownVisible && <ChannelsContainer channelsDataList={channelsList} onChangeFunction={updateSelector}/>}
        </div>
    );
};
