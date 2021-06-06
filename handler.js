'use strict';
const querystring = require('querystring')

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola ${event.pathParameters.name}`,
        input: event.name,
      },
      null,
      2
    ),
  };


};

module.exports.showUser = async (event) => {
    // const body1 = JSON.parse(event.body); // body with json body
    // console.log(body1);
    const body = querystring.parse(event.body) // body with urlencode
    console.log(body)
    const body2 = querystring.parse(event['body']) // body with urlencode
    console.log(body2)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `post request`,
        input: `Hola ${body.name} ${body.lastname}`,
          body: body,
          // body1: body1,
          body2: body2
      },
      null,
      2
    ),
  };


};
