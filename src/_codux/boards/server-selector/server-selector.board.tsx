import { createBoard } from '@wixc3/react-board';
import { ServerSelector } from '../../../components/server-selector/server-selector';

export default createBoard({
    name: 'ServerSelector',
    Board: () => <ServerSelector />,
    environmentProps: {
        canvasWidth: 1016,
        canvasHeight: 780,
        windowHeight: 744,
    },
});
