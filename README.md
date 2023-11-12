# Jun Hackathon 11/2023 (команда 10)

# Игра лабиринт

Простая игра-лабиринт, в которой родители (игрок) должны пройти по лабиринту и найти ребенка.

## Команда

Олег - https://t.me/helgiology

Станислав - https://t.me/st_ermilov

Марат - https://t.me/devsalakh

## Основные функции

- Генерация рандомных лабиринтов на каждую игру

<img width="1552" alt="image" src="https://github.com/lgklsv/hackathon-team-10/assets/101424508/347822f2-bd53-441e-bf90-5cb6c44e2979">

- Инструкция к игре (как в нее играть) управление "родителем" с клавиатуры стрелочками

<img width="1552" alt="image" src="https://github.com/lgklsv/hackathon-team-10/assets/101424508/062e0c4f-ba9d-4b2d-80ad-1b50f74aa35d">

- Реализован алгоритм самой игры: "родитель" не может проходить сквозь стены лабиринта;

- Возможность сбросить игру к начальному значению (без потери конфигурации лабиринта);

<img width="145" alt="image" src="https://github.com/lgklsv/hackathon-team-10/assets/101424508/cc453fd3-96b8-4d59-a7fc-bbc77b86be69">

- возможность "завершить" раунд и увидеть визуализацию правильного пути (дальше - рестарт партии с новым лабиринтом);

<img width="119" alt="image" src="https://github.com/lgklsv/hackathon-team-10/assets/101424508/0a8c8e94-9035-4cf7-876e-43927a60e346">

<img width="1552" alt="image" src="https://github.com/lgklsv/hackathon-team-10/assets/101424508/15df1691-64a6-41ac-b08a-cde585995c3e">

- кнопка включения подсказки, которая не завершает игру, но помогает пройти лабиринт
<img width="193" alt="image" src="https://github.com/lgklsv/hackathon-team-10/assets/101424508/eb072c5b-8422-4f4d-9bde-e98165f1915d">

- экран поздравления с окончанием игры;
<img width="1552" alt="image" src="https://github.com/lgklsv/hackathon-team-10/assets/101424508/7ae5a6b7-9919-45e2-9735-1a55bf83e0c4">

- возможность выбрать уровень сложности лабиринта (легкая, средня, тяжелая)
<img width="1552" alt="image" src="https://github.com/lgklsv/hackathon-team-10/assets/101424508/d6dba438-1780-4f08-9349-44079b2f0d1a">

- возможность играть с мобильного устройства/планшета
<img width="1440" alt="image" src="https://github.com/lgklsv/hackathon-team-10/assets/101424508/956571d1-0dcc-4a85-9cdc-980a7290973f">


## Cтек технологий

- React
- Redux Toolkit / RTK Query
- postCSS
- Vite

## Как запустить локально

Чтобы запустить проект локально, вам нужен [Git](https://git-scm.com) и [Node.js](https://nodejs.org/en/download/) и (с которым идет [npm](http://npmjs.com))

Далее в командной строке терминала вашего компьютера

```bash
# Склонируйте репозиторий
$ git clone https://github.com/lgklsv/shelfie.git

# Зайдите в папку репозитория
$ npm install

# Установите зависимости
$ npm install

# Для запуска проекта в режиме разработки используйте (запустится на localhost:5173)
$ npm run dev

# Для сборки проекта используйте
$ npm run build

# После сборки вы можете запустить собранный проект в режиме продакшн (запустится на localhost:3000)
$ npm start
```
