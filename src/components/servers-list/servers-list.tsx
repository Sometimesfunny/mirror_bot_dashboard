import styles from './servers-list.module.scss';
import classNames from 'classnames';
import { Server } from '../server/server';
import { useState } from 'react';
import { ServerData } from '../../lib/types/types';

export interface ServersListProps {
    className?: string;
    serversData?: Array<ServerData>;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-servers-lists-and-templates
 */
export const ServersList = ({
    className,
    serversData = [
        {
            name: 'Server',
            id: 321,
            channels: [
                { name: 'test', id: 123 },
            ],
        },
        {
            name: 'Not server',
            id: 456,
            channels: [
                { name: 'test2', id: 124 },
            ],
        },
    ],
}: ServersListProps) => {
    const [changableList, searchInList] = useState(serversData);
    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        let valueLowerCase = e.target.value.toLowerCase();
        searchInList(
            serversData
                .filter(
                    (server) =>
                        server.name.toLowerCase().includes(valueLowerCase) ||
                        server.channels.some((channel) => channel.name.includes(valueLowerCase)) ||
                        server.id.toString().includes(valueLowerCase) ||
                        server.channels.some((channel) =>
                            channel.id.toString().includes(valueLowerCase)
                        )
                )
                .map((server) => {
                    if (
                        server.name.toLowerCase().includes(valueLowerCase) ||
                        server.id.toString().includes(valueLowerCase)
                    ) {
                        return server;
                    } else {
                        return {
                            ...server,
                            channels: server.channels.filter(
                                (channel) =>
                                    channel.name.toLowerCase().includes(valueLowerCase) ||
                                    channel.id.toString().includes(valueLowerCase)
                            ),
                        };
                    }
                })
        );
    };
    return (
        <div className={classNames(styles.root, className)}>
            <input
                className={styles['search-bar']}
                placeholder="Search by name or id..."
                onChange={onSearch}
            />
            <div className={styles['servers-list']}>
                {changableList.map((data) => (
                    <Server serverName={data.name} channelsList={data.channels} key={data.id}/>
                ))}
            </div>
        </div>
    );
};
