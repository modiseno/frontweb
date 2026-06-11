import type { ImageMetadata } from 'astro';

const imageImports = import.meta.glob<{ default: ImageMetadata }>(
    '/src/assets/*.{jpg,jpeg,png,webp,avif}',
    { eager: true }
);

export function resolveImage(filename: string): ImageMetadata {
    const key = `/src/assets/${filename}`;
    const mod = imageImports[key];
    if (!mod) {
        throw new Error(`Image not found in src/assets/: ${filename}`);
    }
    return mod.default;
}
