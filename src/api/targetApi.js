import { get } from './apiUtils';

export const getTargets = async () => await get('/targets');
