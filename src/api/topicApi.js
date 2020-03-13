import { get } from './apiUtils';

export const getTopics = async () => await get('/topics');
