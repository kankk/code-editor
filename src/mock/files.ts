const indexJs = `export default {
  data() {
    return {
    };
  },
  mounted() {

  },
  methods: {
    
  },
};
`;

const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
`;

const settingJson = `{

}`;

export const defaultFiles = [
  {
    name: 'index.js',
    content: indexJs,
  },
  {
    name: 'index.html',
    content: indexHtml,
  },
  {
    name: 'setting',
    children: [
      {
        name: 'setting.json',
        content: settingJson,
      },
    ],
  },
];
