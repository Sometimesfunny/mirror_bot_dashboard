import styles from './status-bar.module.scss';
import classNames from 'classnames';
import { useEffect } from 'react';
import { START_URL, STOP_URL } from '../../lib/constants/constants';

export interface StatusBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-status-bars-and-templates
 */
export const StatusBar = ({ className }: StatusBarProps) => {
    useEffect(() => {
        const ws = new WebSocket('ws://127.0.0.1:8000/ws');
    
        ws.addEventListener('open', () => {
          console.log('WebSocket connection established');
        });
    
        ws.addEventListener('message', (event) => {
          const message = JSON.parse(event.data);
    
          // Update status-indicator-box and error-text-box with message data
          const botStatus = message.data.attributes.botStatus;
          const error = message.data.attributes.error;
    
          const statusIndicatorBox = document.getElementById('status');
          if (statusIndicatorBox !== null){
            statusIndicatorBox.innerHTML = botStatus;
          }
          
          const errorTextBox = document.getElementById('error-text');
          if (errorTextBox !== null){
            errorTextBox.textContent = error;
          }
        });
    
        ws.addEventListener('close', () => {
          console.log('WebSocket connection closed');
        });
    
        return () => {
          ws.close();
        };
      }, []);

    const start_function = () => {
        fetch(START_URL, {method: 'POST'})
    }
    const stop_function = () => {
        fetch(STOP_URL, {method: 'POST'})
    }
    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles['start-stop-box']}>
                <span className={styles['start-box']}>
                    <button className={styles['start-button']} onClick={start_function}>Start</button>
                </span>
                <span className={styles['stop-box']}>
                    <button className={styles['stop-button']} onClick={stop_function}>Stop</button>
                </span>
            </span>
            <span className={styles['status-text-box']}>
                <p>Status:</p>
            </span>
            <span className={styles['status-indicator-box']}>
                <p id='status'>Starting...</p>
            </span>
            <span className={styles['error-box']}>
                <span className={styles['error-title']}>Error details:</span>
                <span className={styles['error-text-box']} id='error-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent neque eros,
                    eleifend sed enim ut, mollis lobortis nunc.
                </span>
            </span>
        </div>
    );
};
