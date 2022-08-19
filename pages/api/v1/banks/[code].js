const https = require('https');

export default (request, response) => {
    if (request.method != "GET") return response.status(404).json({status: false, message: 'Bad Request!'});
    const code = request.query.code;
    https.get('https://brasilapi.com.br/api/banks/v1/'+code, (resp) => {
        let data = '';
      
        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk;
          console.log('chunk',chunk);
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          // console.log(JSON.parse(data));
          response.json( data );
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
    
}