import { demRepo } from "../../../../helpers/api/democracia";  

export default (request, response) => {
    if (request.method === "GET") {
        response.json(demRepo.getAll());
    }
    else if (request.method === "POST"){
        const new_id = demRepo.create(request.body)
        response.json( {'id': new_id} );
    }
    else
        return response.status(404).json({status: false, message: 'Bad Request!'});
}
