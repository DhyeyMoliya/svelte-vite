/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

//#region Ensure Svelte file endings have a type for TypeScript
/**
 * These declarations tell TypeScript that we allow import of Svelte files in TS files, e.g.
 * ```
        import Component from './Component.svelte';
     ```
 */
declare module '*.svelte' {
    export { SvelteComponent } from 'svelte';
}
//#endregion
