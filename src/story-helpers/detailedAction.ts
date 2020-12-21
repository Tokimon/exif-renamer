import { action, ActionOptions } from '@storybook/addon-actions';



type PropMapping = Record<string, unknown>;


const eventToObject = (e: CustomEvent<any>) =>
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
    .reduce((obj: PropMapping, key: string): PropMapping => {
      obj[key] = e[key as keyof CustomEvent<any>];
      return obj;
    }, {} as PropMapping);



const detailedAction = (message: string, options?: ActionOptions) =>
  (e: CustomEvent<any>): void => {
    action(message, options)(eventToObject(e));
  };

export default detailedAction;
