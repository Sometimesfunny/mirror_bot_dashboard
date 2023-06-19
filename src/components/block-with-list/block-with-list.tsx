import styles from './block-with-list.module.scss';
import classNames from 'classnames';
import { ParameterBlock } from '../parameter-block/parameter-block';
import { BodyListContainer } from '../body-list-container/body-list-container';

export interface BlockWithListProps {
    className?: string;
    title?: string;
    triggerTitle?: string;
    triggerDefault?: boolean;
    bodyTitle?: string;
    bodyPlaceholder?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-block-with-lists-and-templates
 */
export const BlockWithList = ({
    className,
    title = 'Title',
    triggerTitle = 'Trigger title',
    triggerDefault = false,
    bodyTitle = 'Body title',
    bodyPlaceholder = 'Placeholder',
}: BlockWithListProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ParameterBlock
                title={title}
                bodyElement=<BodyListContainer
                    title={title}
                    triggerTitle={triggerTitle}
                    triggerDefault={triggerDefault}
                    bodyTitle={bodyTitle}
                    bodyPlaceholder={bodyPlaceholder}
                />
            />
        </div>
    );
};
