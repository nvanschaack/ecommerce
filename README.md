# Ecommerce Back End
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
- [Link to walkthrough video](https://drive.google.com/file/d/1p5Nc_EueAnxAbhYO9vGnyu514BvWhhLw/view)
## Description
This application is mimicking the back-end for an e-commerce site. It takes express.js and is configured to use sequelize to interact with the postgresql database that can all be initiated in the terminal. In this application, you can do numerous actions, including adding categories and products to inventory, update their names or Id's, and delete them from the inventory completely.

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)

## Installation
First, you'll want to open an integrated terminal for the application and another one in the "db" folder, short for database. In the db terminal, run "psql -U postgres" to begin the process with the username "postgres". Then, you'll want to establish the actual database; "\i schema.sql". Now you're done in this terminal. Go to the application's integrated terminal. Run "npm i" to install all dependencies. Once this process is complete, run "npm run seed" which, according to the package.json, runs the node seeds/index file. Your environment is set up, and now all you have left is to type "npm start" which will make your server go live. Next, go to insomnia and see the routes make their appropriate requests!

## Usage
In insomnia, you have to option to make several "get", "post", "put", and "delete" requests. Depending on if you want to find, update, create, or delete a product, category, or tag, the route will vary slightly. This is shown in the api folder within the routes subfolder.

## License
  
  This application is covered under the MIT license.

## Contributing

Using the git forking technique, you can help contribute to this repo!

## Credits

- Collaboration with tutor, Vinnie Lopez (jlopez@bootcampspot.com)
- [Sequelize Docs](https://sequelize.org/)

## Tests

n/a

## Questions

My GitHub username is [nvanschaack](https://github.com/nvanschaack).
You can reach me with additional questions at nellvanschaack@gmail.com.

