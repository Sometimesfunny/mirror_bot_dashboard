import styles from './channels-container.module.scss';
import classNames from 'classnames';
import { Channel } from '../channel/channel';
import { ChannelData } from '../../lib/types/types';
import { ChangeEventHandler } from 'react';

export interface ChannelsContainerProps {
    className?: string;
    channelsDataList?: Array<ChannelData>;
    onChangeFunction?: ChangeEventHandler;
}

const templateData = [
    {
        name: 'Title1',
        id: 1234567890
    },
    {
        name: 'Title2',
        id: 987654321
    },
    {
        name: 'Title3',
        id: 1234567890
    }
]

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-channels-containers-and-templates
 */
export const ChannelsContainer = ({ className, channelsDataList=templateData, onChangeFunction=undefined }: ChannelsContainerProps) => {
    return (
        <ul className={styles['channels-list']}>
            {channelsDataList.map((data) => <Channel title={data.name} id={data.id} onChangeFunction={onChangeFunction} key={data.id}/>)}
        </ul>
    );
};
