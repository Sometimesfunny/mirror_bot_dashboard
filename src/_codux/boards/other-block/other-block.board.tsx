import { createBoard } from '@wixc3/react-board';
import { OtherBlock } from '../../../components/other-block/other-block';

export default createBoard({
    name: 'OtherBlock',
    Board: () => <OtherBlock />,
    environmentProps: {
        canvasWidth: 952,
        canvasHeight: 590,
    },
});
