'use strict';

module.exports.variables = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            variable: `The vale of the variable is: ${process.env.OTHER_API_KEY}`
        })
    }
};
