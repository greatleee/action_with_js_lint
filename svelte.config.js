import sveltePreprocess from 'svelte-preprocess'
import postcssVariables from 'postcss-css-variables'
import autoprefixer from "autoprefixer";

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [
        postcssVariables({preserve: true}),
        autoprefixer()
      ]
    },
    charset: false,
  }),
  onwarn: (warning, handler) => {
    const {code, frame} = warning;
    if (code === "css-unused-selector") return;
    else if (code === 'a11y-label-has-associated-control') return;
    else if (code === 'a11y-mouse-events-have-key-events') return;
    else {
      console.warn(code)
    }

    handler(warning);
  },
}
