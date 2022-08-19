import { tasksRepo } from "../../../../helpers/api/database";  

export default (request, response) => {
    if (request.method === "GET") {
        response.json(tasksRepo.getAll());
    }
    else if (request.method === "POST"){
        const new_id = tasksRepo.create(request.body)
        response.json( {'id': new_id} );
    }
    else
        return response.status(404).json({status: false, message: 'Bad Request!'});
}

