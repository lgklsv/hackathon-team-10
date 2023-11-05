# Jun Hackathon 11/2023 (team 10) (frontend)

## Под капотом

- React / TS / RTK
- PostCSS (с плагинами для нестинга, custom-media, custom-units)
- [CVA](https://cva.style/docs/getting-started/variants) и [clsx](https://www.npmjs.com/package/clsx) для более удобной стилизации (чтобы можно было удобно комбинировать классы и делать вариации элементов)

## Развертывание проекта

Полезные плагины на VS Code для работы с проектом:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [PostCSS](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
- [PostCSS Intellisense](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-postcss) (чтобы вернуть поддержку подсказок VScode)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Также рекомендую поставить [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

Stylelint можно настроить так, чтобы при каждом сохранении файла CSS выполнялся автофикс. Для этого нужно найти в настройках пункт "Code Actions on Save" и в конфиге включить следующую настойку:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.stylelint": true
}
```

Проект использует пакетный менеджер `npm`.

### Перед тем как начать, установи зависимости

```shell
cd ./hackathon-team-10
npm i --frozen-lockfile
```

### Запуск проекта в Dev Mode

```shell
npm run dev
```

### Запуск проекта в Dev Mode для теста на телефоне

```shell
npm run dev:host
```

### Сборка проекта

```shell
npm run build
```

## Каталоги

Проект на FSD состоит из слоев (layers), каждый слой состоит из слайсов (slices) и каждый слайс состоит из сегментов (segments).

Слои стандартизированы во всех проектах и расположены вертикально. Модули на одном слое могут взаимодействовать лишь с модулями, находящимися на слоях строго ниже.

- **shared** — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса.(например, UIKit, libs, API)
- **entities (сущности)** — бизнес-сущности.(например, User, Product, Order)
- **features (фичи)** — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя.(например, SendComment, AddToCart, UsersSearch)
- **widgets (виджеты)** — композиционный слой для соединения сущностей и фич в самостоятельные блоки(например, IssuesList, UserProfile).
- **pages (страницы)** — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов.
- **app** — настройки, стили и провайдеры для всего приложения

В свою очередь, каждый слайс состоит из сегментов. Это маленькие модули, главная задача которых — разделить код внутри слайса по техническому назначению. Самые распространенные сегменты — ui, model (store, actions), api и lib (utils/hooks), но в вашем слайсе может не быть каких-то сегментов, могут быть другие, по вашему усмотрению.

Подробнее об FSD - https://feature-sliced.design/ru/
