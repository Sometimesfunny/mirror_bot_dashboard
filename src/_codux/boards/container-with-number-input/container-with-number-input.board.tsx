import { createBoard } from '@wixc3/react-board';
import { ContainerWithNumberInput } from '../../../components/container-with-number-input/container-with-number-input';

export default createBoard({
    name: 'ContainerWithNumberInput',
    Board: () => <ContainerWithNumberInput />
});
