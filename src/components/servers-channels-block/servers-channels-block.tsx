import styles from './servers-channels-block.module.scss';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Channel } from '../channel/channel';
import { ServersList } from '../servers-list/servers-list';
import { ParameterBlock } from '../parameter-block/parameter-block';

export interface ServersChannelsBlockProps {
    className?: string;
    serversData?: Array<any>;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-servers-channels-blocks-and-templates
 */
export const ServersChannelsBlock = ({
    className,
    serversData = Array(),
}: ServersChannelsBlockProps) => {
    const [dropdownVisible, setDropdownVisible] = useState(true);
    const [selectedCount, setSelectedCount] = useState(0);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const updateSelector = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCount(e.target.checked ? selectedCount + 1 : selectedCount - 1);
    };
    return (
        <div className={classNames(styles.root, className)}>
            <ParameterBlock bodyElement={<ServersList serversData={serversData}/>} title="Discord channels" />
        </div>
    );
};
