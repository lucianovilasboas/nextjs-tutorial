import { tasksRepo } from "../../../../helpers/api/database"; 

export default (request, response) => {
    if (request.method !== "POST") return response.status(404).json({status: false, message: 'Bad Request!'});
    tasksRepo.create(request.body)
    response.json( tasksRepo.getAll() );
}

