import getArticles from './getArticles';
import { wait } from '@testing-library/react';

test('Hits Article API', async () => {
    await wait(() => expect(jest.spyOn(getArticles).toHaveBeenCalledTimes(1)))
});