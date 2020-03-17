import { get, post } from './apiUtils';

export const getTargets = async () => await get('/targets');

export const createTarget = async data => await post('/targets', { target: data });
