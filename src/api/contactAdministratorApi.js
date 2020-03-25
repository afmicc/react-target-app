import { post } from './apiUtils';

export const contact = async data => await post(`/contact`, { contact: data });
