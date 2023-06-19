import styles from './telegram-container.module.scss';
import classNames from 'classnames';
import { ParameterBlock } from '../parameter-block/parameter-block';
import { BodyListContainer } from '../body-list-container/body-list-container';

export interface TelegramContainerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-telegram-containers-and-templates
 */
export const TelegramContainer = ({ className }: TelegramContainerProps) => {
    let chosenChannels: Array<number> = [];
    return (
        <div className={classNames(styles.root, className)}>
            <ParameterBlock title="Telegram Channels" bodyElement={<BodyListContainer bodyTitle="Telegram Channel Ids" triggerTitle="Telegram Enabled" bodyPlaceholder="ids here"/>} />
        </div>
    );
};
