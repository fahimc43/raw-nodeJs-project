// Not Found Handler //
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(404, {
        message: 'Your requested Url was not found',
    });
};

module.exports = handler;
