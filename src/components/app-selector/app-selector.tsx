import styles from './app-selector.module.scss';
import classNames from 'classnames';

export interface AppSelectorProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-app-selectors-and-templates
 */
export const AppSelector = ({ className }: AppSelectorProps) => {
    function onAppSelectFunction (event: any) {
        const newEvent = new CustomEvent(`onAppSelect`, {detail: event.target.id});
        document.dispatchEvent(newEvent);
        console.log(`onAppSelect Event dispatched`);
    }
    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles['button-container']}>
                <button className={styles['button-switch']} id="discordAppButton" onClick={onAppSelectFunction}>Discord</button>
            </span>
            <span className={styles['button-container']}>
                <button className={styles['button-switch']} id="telegramAppButton" onClick={onAppSelectFunction}>Telegram</button>
            </span>
        </div>
    );
};
