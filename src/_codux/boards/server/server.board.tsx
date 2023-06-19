import { createBoard } from '@wixc3/react-board';
import { Server } from '../../../components/server/server';

export default createBoard({
    name: 'Server',
    Board: () => <Server />,
    environmentProps: {
        canvasWidth: 360,
    },
});
