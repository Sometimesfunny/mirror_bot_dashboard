import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasHeight: 714,
        canvasWidth: 1156,
        windowHeight: 696,
        windowWidth: 1002,
    },
});
