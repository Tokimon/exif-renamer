import { action, ActionOptions } from '@storybook/addon-actions';

const eventToObject = (e: Event) =>
  [
    'bubbles',
    'cancelBubble',
    'cancelable',
    'composed',
    'currentTarget',
    'defaultPrevented',
    'detail',
    'eventPhase',
    'isTrusted',
    'path',
    'returnValue',
    'srcElement',
    'target',
    'timeStamp',
    'type'
  ]
    .reduce((obj, key) => {
      obj[key] = e[key];
      return obj;
    }, {});



const detailedAction = (message: string, options: ActionOptions) =>
  (e: CustomEvent): void => {
    action(message, options)(eventToObject(e));
  };

export default detailedAction;
