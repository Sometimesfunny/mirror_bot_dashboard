import styles from './body-list-container.module.scss';
import classNames from 'classnames';
import { ContainerWithFlag } from '../container-with-flag/container-with-flag';
import { useState, useEffect } from 'react';

export interface BodyListContainerProps {
    className?: string;
    title?: string;
    triggerTitle?: string;
    triggerDefault?: boolean;
    bodyTitle?: string;
    bodyPlaceholder?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-body-list-containers-and-templates
 */
export const BodyListContainer = ({
    className,
    title = 'Title',
    triggerTitle = 'Trigger title',
    triggerDefault = false,
    bodyTitle = 'Body title',
    bodyPlaceholder = 'Placeholder',
}: BodyListContainerProps) => {
    const [disabledFlag, setDisabledFlag] = useState(triggerDefault);
    useEffect(() => {
        const subscribeTrigger = () => {
            console.log(`Subscribed to on${triggerTitle.replace(/\s+/g, '')}FlagSwitch`);
            document.addEventListener(`on${triggerTitle.replace(/\s+/g, '')}FlagSwitch`, (event) => {
                if (event instanceof CustomEvent) {
                    setDisabledFlag(event.detail);
                }
            });
            return () => {
                document.removeEventListener(`on${triggerTitle.replace(/\s+/g, '')}FlagSwitch`, () => setDisabledFlag(false));
                console.log(`Unsubscribed from on${triggerTitle.replace(/\s+/g, '')}FlagSwitch`);
            };
        }
        subscribeTrigger();
    }, []);
    return (
        <div className={classNames(styles.root, className)}>
            <ContainerWithFlag
                defVal={triggerDefault}
                className={styles['trigger-container']}
                title={triggerTitle}
            />
            <div className={styles['block-body']}>
                <span className={styles['body-title']}>{bodyTitle}</span>
                <span className={styles['body-inner']}>
                    <textarea placeholder={bodyPlaceholder} className={styles['body-textarea']} disabled={!disabledFlag}/>
                </span>
            </div>
        </div>
    );
};
