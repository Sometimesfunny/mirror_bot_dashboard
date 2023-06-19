import { createBoard } from '@wixc3/react-board';
import { AppSelector } from '../../../components/app-selector/app-selector';

export default createBoard({
    name: 'AppSelector',
    Board: () => <AppSelector />,
    environmentProps: {
        canvasWidth: 188,
        canvasHeight: 53,
    },
});
