import { createBoard } from '@wixc3/react-board';
import { ListItemButton } from '../../../components/list-item-button/list-item-button';

export default createBoard({
    name: 'ListItemButton',
    Board: () => <ListItemButton />,
    environmentProps: {
        canvasWidth: 161,
        canvasHeight: 35,
    },
});
