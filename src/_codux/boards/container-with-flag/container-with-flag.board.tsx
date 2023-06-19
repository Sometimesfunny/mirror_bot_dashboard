import { createBoard } from '@wixc3/react-board';
import { ContainerWithFlag } from '../../../components/container-with-flag/container-with-flag';

export default createBoard({
    name: 'ContainerWithFlag',
    Board: () => <ContainerWithFlag />,
    environmentProps: {
        canvasHeight: 37,
        canvasWidth: 389,
    },
});
