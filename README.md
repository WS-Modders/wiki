<div align="center">
  <p><img width="256" src="https://media.discordapp.net/attachments/1219888807919358002/1294905045174849647/logo.png?ex=670cb5cc&is=670b644c&hm=ba2140dcff5ea8995d832f4d2d3b321f35cd3b13bee471d78756ecc8253bc7c9&=&format=webp&quality=lossless"/></p>
</div>
<div align="center">
  <img src="https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff">
</div>
<hr />

# War Selection Unofficial Wiki

- **[Demo](https://corp-wswiki-7b20de-5457f5-91-108-122-37.traefik.me)**
- [Special Thanks](#special-thanks)
- [Contribute](#contributors)

This website is built using [NextJS](https://nextjs.org/), the React framework for the Web.

<h2 align="center">Contributors</h2>

This project exists thanks to all the people who contribute. [[Contribute]](https://github.com/WS-Modders/wiki/blob/master/.github/CONTRIBUTING.md).
<a href="https://github.com/WS-Modders/wiki/graphs/contributors"></a>

## Getting Started

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
> About [npm commands](https://docs.npmjs.com/cli/v10/commands)

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build
```bash
npm run build
```

This command generates static content into the `build` or `dist` directory and can be served using any static contents hosting service.

## FSD (Feature-Sliced Design)
FSD is architectural methodology for frontend projects
> About [FSD with NextJS](https://feature-sliced.design/docs/guides/tech/with-nextjs)

Below is the description of terms from the documentation:

### Layers
The first level of abstraction - according to the scope of influence.

```
└── ws-wiki
    └── public
        └── images
        └── fonts
    └── src
        └── app - application initialization (init, styles, etc.);
            └── [...slug]
            └── layout.tsx
            └── styles
                └── custom.css
                └── materialdesignicons.min.css
        └── entities - business entities (viewer, order, etc.);
        └── shared - reusable infrastructure code (UIKit, libs, API, etc.).
            └── libs
            └── ui
```
