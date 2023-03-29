# My simple node server for api

The server is a simple node server that returns a json object with a product or a list of products. All the data is stored in a json file and is made by [fakestoreapi.com](https://fakestoreapi.com).

## Installation

### Install node

```bash
sudo apt-get install nodejs
```
or on windows download from [nodejs.org](https://nodejs.org/en/)

### Install npm (only if you don't have it, it should be installed with node)
```bash
sudo apt-get install npm
```

### Install dependencies
```bash
npm install express
```
Do this in the folder where you have the server.js file

## Run the server
```bash
node server.js
```

## Test the server

Open a browser and go to the following links after you have run the server:

http://localhost:3000/fakestore/1

http://localhost:3000/fakestore/

http://localhost:3000/fakestore/category/electronics


