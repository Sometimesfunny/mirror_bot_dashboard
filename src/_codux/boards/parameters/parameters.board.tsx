import { createBoard } from '@wixc3/react-board';
import { Parameters } from '../../../components/parameters/parameters';

export default createBoard({
    name: 'Parameters',
    Board: () => <Parameters />,
    environmentProps: {
        canvasWidth: 854,
        canvasHeight: 694,
    },
});
