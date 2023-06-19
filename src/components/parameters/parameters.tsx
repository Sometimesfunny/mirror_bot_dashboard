import styles from './parameters.module.scss';
import classNames from 'classnames';
import { ServersChannelsBlock } from '../servers-channels-block/servers-channels-block';
import { BlockWithList } from '../block-with-list/block-with-list';
import { OtherBlock } from '../other-block/other-block';
import { TelegramContainer } from '../telegram-container/telegram-container';

export interface ParametersProps {
    className?: string;
    targetDiscordServers?: Array<any>;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-parameterss-and-templates
 */
export const Parameters = ({ className, targetDiscordServers }: ParametersProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <table className={styles['parameters-table']}>
                <tbody>
                    <tr className={styles['parameters-row']}>
                        <td className={styles['table-data']}>
                            <ServersChannelsBlock serversData={targetDiscordServers}/>
                        </td>
                        <td className={styles['table-data']}>
                            <BlockWithList
                                title="Mirror"
                                bodyTitle={'Hide mention author ids'}
                                bodyPlaceholder="ids or everyone/here keywords"
                                triggerDefault={false}
                                triggerTitle="Mirror Mentions"
                            />
                        </td>
                        <td className={styles['table-data']}>
                            <BlockWithList
                                title="Whitelist"
                                triggerDefault={false}
                                triggerTitle="Whitelist Enabled"
                                bodyTitle="Whitelisted Author IDs"
                                bodyPlaceholder="ids here"
                            />
                        </td>
                    </tr>
                    <tr className={styles['parameters-row']}>
                        <td className={styles['table-data']}>
                            <TelegramContainer />
                        </td>
                        <td className={styles['table-data']}>
                            <OtherBlock title="Other" />
                        </td>
                        <td className={styles['table-data']}>
                            <BlockWithList
                                title="Keywords"
                                triggerDefault={false}
                                triggerTitle="Keywords Blacklist Active"
                                bodyTitle="Keywords Blacklist"
                                bodyPlaceholder="some keywords here, case insensitive"
                            />
                        </td>
                    </tr>
                    <tr className={styles['parameters-row']}>
                        <td className={styles['table-data']} />
                        <td className={styles['table-data']} />
                        <td className={styles['table-data']} />
                    </tr>
                    <tr className={styles['parameters-row']}>
                        <td className={styles['table-data']} />
                        <td className={styles['table-data']} />
                        <td className={styles['table-data']} />
                    </tr>
                    <tr className={styles['parameters-row']}>
                        <td className={styles['table-data']} />
                        <td className={styles['table-data']} />
                        <td className={styles['table-data']} />
                    </tr>
                    <tr className={styles['parameters-row']}>
                        <td className={styles['table-data']} />
                        <td className={styles['table-data']} />
                        <td className={styles['table-data']} />
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
