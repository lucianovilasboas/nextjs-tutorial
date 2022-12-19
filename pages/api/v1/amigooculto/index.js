import { amigo } from "../../../../helpers/api/oculto";  

export default (request, response) => {

    if (request.method === "POST") {
        const sorteio = amigo.sortear(request.body)
        response.json( {'sorteio': sorteio} );
    }
    else
        return response.status(404).json({status: false, message: 'Bad Request!'});
        
}

