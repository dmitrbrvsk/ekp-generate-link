# AGENTS.md

## Cursor Cloud specific instructions

### Overview
**ekp-generate-link** — клиентское React-приложение (Create React App / react-scripts 4.x) для генерации deep-ссылок на анкету ЕКП Альфа-Банка. Бэкенда и БД нет; всё работает в браузере.

### Registry gotcha
`.npmrc` указывает на приватный Artifactory (`http://binary/artifactory/...`), недоступный в облачной среде. При установке зависимостей необходимо временно переименовать `.npmrc` и `yarn.lock` (в нём также зашиты Artifactory-URLs), установить через `npm install --registry https://registry.npmjs.org`, затем восстановить оригинальные файлы. Update-скрипт делает это автоматически.

### Node.js / OpenSSL
react-scripts 4.x несовместим с OpenSSL 3+ (Node 17+). Для всех команд (`start`, `build`, `test`) требуется:
```
NODE_OPTIONS=--openssl-legacy-provider
```

### Основные команды
| Действие | Команда |
|---|---|
| Установка зависимостей | см. update script (обходит .npmrc) |
| Dev-сервер (порт 3000) | `NODE_OPTIONS=--openssl-legacy-provider npx react-scripts start` |
| Тесты | `CI=true NODE_OPTIONS=--openssl-legacy-provider npx react-scripts test --env=jsdom` |
| Билд | `NODE_OPTIONS=--openssl-legacy-provider npx react-scripts build` |

### Lint
В проекте нет отдельного lint-скрипта; ESLint встроен в react-scripts и запускается при `build` и `start`. Ошибки линтинга будут видны в выводе билда/дев-сервера.
