import { createBoard } from '@wixc3/react-board';
import { ButtonsListWithSearchBar } from '../../../components/buttons-list-with-search-bar/buttons-list-with-search-bar';

export default createBoard({
    name: 'ButtonsListWithSearchBar',
    Board: () => <ButtonsListWithSearchBar />,
    environmentProps: {
        canvasHeight: 575,
    },
});
