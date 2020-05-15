import ButtonEx from './button/Button.example.svelte';
import ErrorEx from './error/Error.example.svelte';
import SvgIconEx from './svg-icon/SvgIcon.example.svelte';
import LoadingOverlayEx from './loaders/loading-overlay/LoadingOverlay.example.svelte';
import LoadbarEx from './loaders/loadbar/Loadbar.example.svelte';
import ImageEx from './image/Image.example.svelte';
import FocusDotEx from './focus-dot/FocusDot.example.svelte';

export default { title: 'Base' };

export const Button = () => ({ Component: ButtonEx });
export const Error = () => ({ Component: ErrorEx });
export const SvgIcon = () => ({ Component: SvgIconEx });
export const LoadingOverlay = () => ({ Component: LoadingOverlayEx });
export const Loadbar = () => ({ Component: LoadbarEx });
export const Image = () => ({ Component: ImageEx });
export const FocusDot = () => ({ Component: FocusDotEx });
