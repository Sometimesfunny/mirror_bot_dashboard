import { createBoard } from '@wixc3/react-board';
import { ServersList } from '../../../components/servers-list/servers-list';

export default createBoard({
    name: 'ServersList',
    Board: () => <ServersList />
});
