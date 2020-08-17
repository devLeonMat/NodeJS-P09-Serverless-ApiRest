'use strict';

module.exports.hello = async event => {
    if (event.queryStringParameters && event.queryStringParameters.name) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `Hello ${event.queryStringParameters.name}, nice to meet you!!`
            }),
        }
    }
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Serverless function get!',
                input: event,
            },
            null,
            2
        ),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


module.exports.client = async event => {
    let json = JSON.parse(event.body);
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Hi I have received a JSON object from you!',
                object: json
            },
            null,
            2
        ),
    };
};
