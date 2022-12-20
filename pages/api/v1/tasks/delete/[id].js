import { tasksRepo } from "../../../../../helpers/api/database"; 

export default (request, response) => {
    if (request.method !== "DELETE") return response.status(404).json({status: false, message: 'Bad Request!'});
    const id_ = request.query.id;
    tasksRepo.delete(id_);
    response.json(tasksRepo.getAll());
}

