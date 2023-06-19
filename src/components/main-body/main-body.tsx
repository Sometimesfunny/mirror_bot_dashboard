import styles from './main-body.module.scss';
import classNames from 'classnames';
import { Parameters } from '../parameters/parameters';
import { useState, useEffect } from 'react';
import User from '../../lib/user/user';

export interface MainBodyProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-main-bodys-and-templates
 */
export const MainBody = ({ className }: MainBodyProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [servers, setServers] = useState<Array<any>>([]); // Concritise array type

    useEffect(() => {
        console.log('Subscribed to onChannelSelected');
        document.addEventListener('onChannelSelected', (event) => {
            if (event instanceof CustomEvent) {
                console.log(event.detail);
                setIsClicked(true);
            }
        });
        return () => {
            document.removeEventListener('onChannelSelected', () => setIsClicked(false));
            console.log('Unsubscribed from onChannelSelected');
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (User.discord_target_channels.length === 0) {
                await User.get_discord_target_channels();
            }
            
            setServers(User.discord_target_channels);
            setIsLoading(false);
        }
        
        fetchData();
    }, []);

    return (
        <div className={classNames(styles.root, className)}>
            {
                isLoading ? <p>Loading...</p> : <Parameters targetDiscordServers={servers}/>
            }
        </div>
    );
};
