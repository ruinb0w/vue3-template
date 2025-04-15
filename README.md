# vue3-template

## install
```bash
yarn
```

## start dev
```
yarn dev
```

## build application
```bash
yarn build
```

## rules


### project structure

```
project
├── public/
|   └── config.json
├── src
|   ├── assets/
|   |   ├── fonts/
|   |   ├── styles/
|   |   └── imgs/
|   ├── components/                   # Put reusable components here
|   |   └── AppHeader/
|   |       ├── AppHeader.vue
|   |       ├── type.d.ts
|   |       ├── lib.ts                # Functions used only by HomePage
|   |       └── hook.ts               # Hooks used only by AppHeader
|   ├── constants/                    # Put constants here
|   |   └── app.ts                    # Some common used constants, like app version, etc.
|   ├── plugins/                      # Contains plugins for vue plugin system
|   ├── libs/                         # Contains only reusable functions, no state, you can add more files here if needed
|   |   ├── common.ts                 # Some common used functions, like debouce, throttle, etc.
|   |   ├── formatter.ts              # Some common used format functions, like formatDate, formatNumber, etc.
|   |   ├── request.ts                # Some common used request functions, like get, post, etc.
|   |   └── apis/                     # Contains api functions, slipted by modules, based on api url
|   |       └── user.ts
|   ├── hooks/                        # Contains state and methods, all hook instances are independent
|   |   └── order/
|   |       ├── order.ts
|   |       ├── type.d.ts
|   |       └── lib.ts
|   ├── store/                        # Contains state and methods, all instances share the same state, use pinia to manage state
|   |   └── userStore/
|   |       ├── userStore.ts
|   |       ├── type.d.ts
|   |       └── lib.ts
|   ├── router/                       # Contains state and methods, all instances share the same state
|   |   └── index.ts                  # Main router file
|   |   └── routes/                   # Contains all routes
|   ├── views                         # Components related to routes
|   |   └── HomePage
|   |       ├── HomePage.vue
|   |       ├── lib.ts                # Functions used only by HomePage
|   |       ├── hook.ts               # Hooks used only by HomePage
|   |       └── components/           # Components used only by HomePage
|   ├── types                         # Put reusable types here
|   |   └── global.d.ts
|   ├── App.ts
|   ├── style.scss
|   └── main.ts
├── index.html
├── package.json
├── yarn.lock
├── README.md
├── vite.config.ts
├── .gitignore
└── tsconfig.json
```
### library

> If you want to use a library with functions similar to those listed below, you must notify other developers.

Use `pinia` as the global state management library
Use `vue-router` as the routing library
Use `vite` as the build tool
Use `typescript` as the scripting language
Use `scss` as the style language
Use `vue-i18n` as the internationalization library
Use `lightweight-charts` as the chart library
Use `vant4` as the mobile UI library
Use `element-plus` as the admin UI library

### configuration

Use `public/config.json` as the single source of configuration

> Note: `config.json` is just a template. The server will replace it with the actual configuration from the server side.

### websocket

The WebSocket implementation is located in `store/wsStore/wsStore.ts`. Make sure it shares the same state with other hook instances.verview.html#project-setup).

### package manager

Use yarn as package manager, make sure yarn.lock is working great, server side will build project via yarn.
