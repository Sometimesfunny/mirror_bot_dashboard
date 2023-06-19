import { createBoard } from '@wixc3/react-board';
import { NavBar } from '../../../components/nav-bar/nav-bar';

export default createBoard({
    name: 'NavBar',
    Board: () => <NavBar />,
    environmentProps: {
        canvasHeight: 72,
        canvasWidth: 899,
        windowHeight: 400,
    },
});
