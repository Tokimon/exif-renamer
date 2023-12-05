import { omitBy } from 'lodash';

export const omitEvents = <T extends Parameters<typeof omitBy>[0]>(props: T) => omitBy(props, (_, key) => key.startsWith('event_')) as T;
