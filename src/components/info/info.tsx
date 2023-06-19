import styles from './info.module.scss';
import classNames from 'classnames';

export interface InfoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-infos-and-templates
 */
export const Info = ({ className }: InfoProps) => {
    return <div className={classNames(styles.root, className)}>Info</div>;
};
