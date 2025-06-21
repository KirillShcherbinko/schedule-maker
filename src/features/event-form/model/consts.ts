import { customAlphabet } from 'nanoid';

export const EVENT_FORM_LINK = 'eventForm';
export const EVENT_FORM_NAMESPACE = { ns: 'eventForm' };

export const nanoid = customAlphabet('0123456789');
export const createMode = 'create';
export const editMode = 'edit';
