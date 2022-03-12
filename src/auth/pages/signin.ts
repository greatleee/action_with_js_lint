import Signin from './Signin.svelte';
import '@styles/root.scss';
import '@styles/default.scss';

const app = new Signin({
  target: document.getElementById('app')
});

export default app;
