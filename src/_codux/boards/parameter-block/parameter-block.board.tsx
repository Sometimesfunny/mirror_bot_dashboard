import { createBoard } from '@wixc3/react-board';
import { ParameterBlock } from '../../../components/parameter-block/parameter-block';

export default createBoard({
    name: 'ParameterBlock',
    Board: () => <ParameterBlock />,
    environmentProps: {
        canvasHeight: 356,
        canvasWidth: 324,
    },
});
