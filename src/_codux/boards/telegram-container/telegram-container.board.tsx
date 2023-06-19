import { createBoard } from '@wixc3/react-board';
import { TelegramContainer } from '../../../components/telegram-container/telegram-container';

export default createBoard({
    name: 'TelegramContainer',
    Board: () => <TelegramContainer />,
    environmentProps: {
        canvasWidth: 385,
        canvasHeight: 365,
    },
});
