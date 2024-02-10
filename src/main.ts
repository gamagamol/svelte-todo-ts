/** @format */

import './app.css';
import App from './App.svelte';

const targetElement = document.getElementById('app');
let app: App | null = null;
if (targetElement) {
  app = new App({
    target: targetElement,
  });
}
export default app;
