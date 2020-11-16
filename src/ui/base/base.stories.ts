import ButtonEx from './button/Button.example.svelte';
import ErrorEx from './error/Error.example.svelte';
import ImageEx from './image/Image.example.svelte';
import FocusDotEx from './focus-dot/FocusDot.example.svelte';

export default { title: 'Base' };

export const Button = () => ({ Component: ButtonEx });
export const Error = () => ({ Component: ErrorEx });
export const Image = () => ({ Component: ImageEx });
export const FocusDot = () => ({ Component: FocusDotEx });
