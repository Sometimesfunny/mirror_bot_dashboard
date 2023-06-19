import styles from './block-with-bool.module.scss';
import classNames from 'classnames';

export interface BlockWithBoolProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-block-with-bools-and-templates
 */
export const BlockWithBool = ({ className }: BlockWithBoolProps) => {
    return <div className={classNames(styles.root, className)}>BlockWithBool</div>;
};
