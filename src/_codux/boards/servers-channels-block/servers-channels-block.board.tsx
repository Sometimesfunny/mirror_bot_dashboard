import { createBoard } from '@wixc3/react-board';
import { ServersChannelsBlock } from '../../../components/servers-channels-block/servers-channels-block';

export default createBoard({
    name: 'ServersChannelsBlock',
    Board: () => <ServersChannelsBlock />,
    environmentProps: {
        canvasWidth: 1108,
        canvasHeight: 638,
        windowHeight: 642,
    },
});
