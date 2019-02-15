# Figma

[Source](https://www.figma.com/file/JDAMhYaQ9pStIBndyZUCcY4A/Webapp)

Auto generttes `theme.json` DO NOT EDIT DIRECTLY, use Figma to update

Automatic generate colors, fonts, typography from figma design

### Installtion

- add FIGMA_TOKEN=< Figma token> to `.env` file
- add to `package.json`

  - ```json
    "figma-generate": "figma-theme <project id> --out-dir src/Theme/Figma",

    "figma-update": "yarn figma-generate && yarn build"
    ```

### Commands

get latest theme.json

```sh
yarn figma-generate
```

update local theme

```sh
yarn figma-update
```
