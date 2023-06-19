import { createBoard } from '@wixc3/react-board';
import { ChannelsWithSearchbar } from '../../../components/channels-with-searchbar/channels-with-searchbar';

export default createBoard({
    name: 'ChannelsWithSearchbar',
    Board: () => <ChannelsWithSearchbar />,
    environmentProps: {
        canvasWidth: 285,
        canvasHeight: 435,
    },
});
