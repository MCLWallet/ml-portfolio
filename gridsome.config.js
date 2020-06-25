// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Marcell Lanczos",
  plugins: [{
    use: '@gridsome/source-airtable',
    options: {
      apiKey: process.env.AIRTABLE_KEY, // required
      base: process.env.AIRTABLE_BASE, // required
      tables: [
        {
          name: 'Timeline', // required
          typeName: 'Firma', // required
        },
        {
          name: 'Skills', // required
          typeName: 'Skill', // required
        },
      ],
      tableName: 'CV', // required
    },
  }, ],
  templates: {
    Firma: '/firma/:id', // optional
    Skill: '/skill/:id' // optional
  },
}
