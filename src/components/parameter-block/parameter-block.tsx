import styles from './parameter-block.module.scss';
import classNames from 'classnames';
import {ReactNode} from 'react'

export interface ParameterBlockProps {
    className?: string;
    title?: string;
    bodyElement?: ReactNode
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-parameter-blocks-and-templates
 */
export const ParameterBlock = ({ className, title = 'Title', bodyElement=undefined }: ParameterBlockProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['block-title']}>{title}</div>
            <div className={styles['block-body']}>{bodyElement}</div>
        </div>
    );
};
