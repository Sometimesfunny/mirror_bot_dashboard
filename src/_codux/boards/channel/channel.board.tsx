import { createBoard } from '@wixc3/react-board';
import { Channel } from '../../../components/channel/channel';

export default createBoard({
    name: 'Channel',
    Board: () => <Channel />,
    environmentProps: {
        canvasWidth: 346,
        canvasHeight: 64,
    },
});
