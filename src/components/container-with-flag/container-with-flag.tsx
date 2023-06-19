import styles from './container-with-flag.module.scss';
import classNames from 'classnames';

export interface ContainerWithFlagProps {
    className?: string;
    title?: string;
    defVal?: boolean;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-container-with-flags-and-templates
 */
export const ContainerWithFlag = ({
    className,
    title = 'Title',
    defVal = false,
}: ContainerWithFlagProps) => {
    function onFlagSwitchFunction (event: any) {
        const newEvent = new CustomEvent(`on${title.replace(/\s+/g, '')}FlagSwitch`, {detail: event.target.value == "true" ? true : false});
        document.dispatchEvent(newEvent);
        console.log(`on${title.replace(/\s+/g, '')}FlagSwitch Event dispatched`);
    }
    return (
        <div className={styles.item}>
            <span className={styles['item-name']}>{title}</span>
            <span className={classNames(styles['item-selector'], styles['item-trigger'])}>
                <select defaultValue={String(defVal)} className={styles.selector} onChange={onFlagSwitchFunction}>
                    <option>true</option>
                    <option>false</option>
                </select>
            </span>
        </div>
    );
};
