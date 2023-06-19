import { createBoard } from '@wixc3/react-board';
import { BlockWithList } from '../../../components/block-with-list/block-with-list';

export default createBoard({
    name: 'BlockWithList',
    Board: () => <BlockWithList />,
    environmentProps: {
        canvasWidth: 1103,
        canvasHeight: 478,
        windowHeight: 428,
        windowWidth: 1198,
    },
});
