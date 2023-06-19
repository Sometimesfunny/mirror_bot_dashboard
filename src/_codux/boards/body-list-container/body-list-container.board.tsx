import { createBoard } from '@wixc3/react-board';
import { BodyListContainer } from '../../../components/body-list-container/body-list-container';

export default createBoard({
    name: 'BodyListContainer',
    Board: () => <BodyListContainer />,
    environmentProps: {
        canvasWidth: 438,
        canvasHeight: 489,
    },
});
