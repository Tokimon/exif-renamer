import { writable } from 'svelte/store';
import type { ExifCache } from '~/types/exif.d';

export default writable(new Map() as ExifCache);
