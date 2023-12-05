import type { Action } from 'svelte/action';
import { addClass, off, on, removeClass, trigger } from '@jsfns/web';
import classNames from './long-press.module.css';

const longPressClassName = classNames['long-press'];

export const longPress: Action<HTMLElement, number | undefined, { 'on:longpress': (e: CustomEvent<string>) => void }> = (
  elm: HTMLElement,
  duration = 1000,
) => {
  let timeoutId: number | undefined | ReturnType<typeof setTimeout>;

  function cleanUp() {
    clearTimeout(timeoutId);
    removeClass(elm, longPressClassName);
    // css(elm, '--duration', null); <-- needs to be fixed
    elm.style.setProperty('--duration', null);
  }

  function mouseDown() {
    addClass(elm, longPressClassName);
    // css(elm, { '--duration': duration + 'ms' }); <-- needs to be fixed
    elm.style.setProperty('--duration', duration + 'ms');

    timeoutId = setTimeout(() => {
      cleanUp();
      trigger(elm, 'longpress');
    }, duration);
  }

  on(elm, 'mousedown', mouseDown);
  on(elm, ['mouseup', 'mouseleave'], cleanUp);

  return {
    update(newDuration = 1000) {
      duration = newDuration;
    },
    destroy() {
      off(elm, 'mousedown', mouseDown);
      off(elm, ['mouseup', 'mouseleave'], cleanUp);
      cleanUp();
    },
  };
};
