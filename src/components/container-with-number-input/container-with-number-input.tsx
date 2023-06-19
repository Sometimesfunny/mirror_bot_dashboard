import styles from './container-with-number-input.module.scss';
import classNames from 'classnames';

export interface ContainerWithNumberInputProps {
    className?: string;
    title?: string;
    defVal?: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-container-with-number-inputs-and-templates
 */
export const ContainerWithNumberInput = ({
    className,
    title = 'Title',
    defVal = 0,
}: ContainerWithNumberInputProps) => {
    return (
        <div className={styles.item}>
            <span className={styles['item-name']}>{title}</span>
            <span className={classNames(styles['item-selector'], styles['item-trigger'])}>
                <input
                    type="number"
                    min="0"
                    minLength={1}
                    step="1"
                    defaultValue={defVal}
                    className={styles['number-input']}
                />
            </span>
        </div>
    );
};
