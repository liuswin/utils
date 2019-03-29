global.fetch = require('node-fetch')
const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();
Object.assign(fetchMock.config, nodeFetch, {
  fetch: nodeFetch
});
const ponyfill = require('fetch-ponyfill')();
fetchMock.config = Object.assign(fetchMock.config, {
    Headers: ponyfill.Headers,
    Request: ponyfill.Request,
    Response: ponyfill.Response,
    fetch: ponyfill
})
global.Headers = ()=>{}
module.exports = fetchMock;
