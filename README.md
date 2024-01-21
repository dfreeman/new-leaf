# new-leaf

## About this project

This project was created for the January 2024 Make-a-thon put together for/by a group of friends!

* Engine by @dfreeman
* Story by @pattra
* Soundtrack by [treehann](https://treehann.bandcamp.com/music)

Sources:

* Stormy Ocean by Jaroslaw Grudzinski
* The Storm on the Sea of Galilee by Rembrandt
* Sailing Ship--off Coast of Maine by William E. Norton
* [https://commons.wikimedia.org/wiki/File:Gale%C3%A3o_%22Santa_Luzia%22.jpg]
* [https://commons.wikimedia.org/wiki/File:Het_eerder_tijdens_een_storm_gestrande_schip_is_omgevallen,_Bestanddeelnr_926-8075.jpg]
* [https://commons.wikimedia.org/wiki/File:Grotta_dei_Fantasmi_calcite_retro_illuminata_adventrediving.it.jpg]
* [http://www.lazilong.com/apple_II/a2font/a2font.html]

Images are stock photos and paintings that were run through pixelation filters.

## Make It Go

Install dependencies:

```sh
pnpm i
```

Run dev server:

```sh
pnpm dev
```

Publish to GitHub pages:

```sh
pnpm release
```

<details>
<summary>Default README contents from the Vite template</summary>

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

</details>