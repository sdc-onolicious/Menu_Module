# SDC

## CRUD OPERATIONS
- #### Create:
  - endpoint: `/addToMenu`
  - purpose: Allows user to add a restaurant and its corresponding menu;
- #### Update
   - endpoint: `/UpdateMenu`
   - purpose: Allows user to update a restaurants menu;
- #### Read
  - endpoint: `/getMenu`
  - purpose: Allows user to see a resturant and its corresponding menu;
- #### Delete
  - endpoint: `/deleteMenu`
  - purpose: Allows user to delete a resturant and its corresponding menu;

# FEC

## Related Projects

  - https://github.com/freeseats/exzerone-search-bar
  - https://github.com/freeseats/matthewjdiaz1-photo-service
  - https://github.com/freeseats/slhodak-fec
  - https://github.com/freeseats/wfong-service-reservations

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions
1. $ npm install
> Run Scripts
1. $ npm run react-dev
1. $ npm run server-dev

> Change db connection
>> user, and password if you have one

> For mySQL
1. Run command mysql -u root -p < schema.sql to create Database and tables
1. Run command mysql -u root -p to log into mysql
1. USE complete_menu database
1. Run command SELECT * FROM menu INNER JOIN menu_items ON menu.id

> For Test Suites
1. Run npm test
## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- mySQL

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

