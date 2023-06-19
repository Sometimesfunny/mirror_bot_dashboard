import { createBoard } from '@wixc3/react-board';
import { ChannelsContainer } from '../../../components/channels-container/channels-container';

export default createBoard({
    name: 'ChannelsContainer',
    Board: () => <ChannelsContainer />,
    environmentProps: {
        canvasWidth: 337,
        canvasHeight: 193,
    },
});
