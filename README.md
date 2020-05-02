# Personal Project List API

## About

This is an [API](https://personal-project-list.now.sh/) which users can fetch an array of side-projects along with the details of each which are belong to Peter (Ho Yeung) Chan.

### [THIS](https://github.com/peterhychan/peterhychan-page-fetch) is my old personal portfolio page which fetched info from this API.

### How it works

Users can fetch the response by using the native JavaScript function of `fetch` or by using third-party libraries such as `axios`. At this moment, it is a read-only API. 

## Features

- Node.js web server using [Express.js](https://npm.im/express)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html) middlesare for handling CORS issues.
- Deployed on [now.sh](https://personal-project-list.now.sh/)

## Set up

### Requirements

- [Node.js](https://nodejs.org/)

### Local development

After the above requirements have been met:

1. Clone this repository and `cd` into it

```bash
git clone https://github.com/peterhychan/personal-project-list
cd personal-project-list
```

2. Install dependencies
3. 
```bash
npm install
```

4. Run the application

```bash
npm start
```

5. Navigate to [http://localhost:5000](http://localhost:5000)

That's it!

## Contributing

This template is open source and welcomes contributions.
## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.
