import styles from './other-block.module.scss';
import classNames from 'classnames';
import { ContainerWithFlag } from '../container-with-flag/container-with-flag';
import { ContainerWithNumberInput } from '../container-with-number-input/container-with-number-input';

export interface OtherBlockProps {
    className?: string;
    title?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-other-blocks-and-templates
 */
export const OtherBlock = ({ className, title = 'Title' }: OtherBlockProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['title-container']}>{title}</div>
            <div className={styles['body-container']}>
                <ContainerWithFlag defVal={false} title="Delay active" />
                <ContainerWithNumberInput defVal={0} title="Delay in seconds" />
                <ContainerWithFlag defVal={false} title="Push buttons" />
                <ContainerWithFlag defVal={false} title="Mention channel title in telegram" />
                <ContainerWithFlag defVal={false} title="Mention author in telegram" />
            </div>
        </div>
    );
};
