import styles from './buttons-list-with-search-bar.module.scss';
import classNames from 'classnames';
import { ListItemButton } from '../list-item-button/list-item-button';
import { ChannelData, ServerData, TelegramChannelsList, DiscordChannel } from '../../lib/types/types';
import { useState, useEffect } from 'react';
import User from '../../lib/user/user';

export interface ButtonsListWithSearchBarProps {
    className?: string;
    data?: Array<ChannelData | ServerData> | TelegramChannelsList;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-buttons-list-with-search-bars-and-templates
 */
export const ButtonsListWithSearchBar = ({
    className
}: ButtonsListWithSearchBarProps) => {
    const [discordChannels, setDiscordChannels] = useState<Array<DiscordChannel>>([]);
    const [telegramChannels, setTelegramChannels] = useState<TelegramChannelsList>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [channels, setChannels] = useState<any[]>([]);
    const [changableList, searchInList] = useState<any[]>([]);
    

    useEffect(() => {
        const fetchData = async () => {
            if (User.discord_source_channels.length === 0) {
                await User.get_discord_source_channels();
                console.log(User.discord_source_channels);
            }
            if (User.telegram_target_channels.length === 0){
                await User.get_telegram_source_channels();
            }
            setDiscordChannels(User.discord_source_channels.flatMap(item => 
                item.categories.flatMap(category => category.channels)
              ));
            setTelegramChannels(User.telegram_target_channels);
            setChannels(discordChannels);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const subscribeTrigger = () => {
            console.log(`Subscribed to onAppSelect`);
            document.addEventListener(`onAppSelect`, (event) => {
                if (event instanceof CustomEvent) {
                    if (event.detail === 'discordAppButton') {
                        setChannels(discordChannels);
                    } else if (event.detail === 'telegramAppButton') {
                        setChannels(telegramChannels);
                    }
                }
            });
            return () => {
                document.removeEventListener(`onAppSelect`, () => {});
                console.log(`Unsubscribed from onAppSelect`);
            };
        };
        subscribeTrigger();
    }, [discordChannels, telegramChannels]);

    useEffect(() => {
        if (channels.length === 0 && !isLoading) {
            setChannels(discordChannels);
        }
        searchInList(channels);
    }, [channels, discordChannels, isLoading]);

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchInList(
            channels.filter(
                (item) =>
                    item.id.toString().includes(e.target.value.toLowerCase()) ||
                    item.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    };
    if (isLoading){
        return <p>Loading...</p>
    }
    return (
        <div className={classNames(styles.root, className)}>
            <input className={styles['search-bar']} placeholder="Search by name or id..." onChange={onSearch}/>
            <div className={styles['selector-body']}>
                <ul className={styles['items-list']}>
                    {changableList.map((data_item) => (
                        <ListItemButton key={data_item.id} data={data_item}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};
