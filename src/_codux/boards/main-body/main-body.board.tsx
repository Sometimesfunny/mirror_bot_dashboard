import { createBoard } from '@wixc3/react-board';
import { MainBody } from '../../../components/main-body/main-body';

export default createBoard({
    name: 'MainBody',
    Board: () => <MainBody />,
    environmentProps: {
        windowWidth: 1024,
    },
});
