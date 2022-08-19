import { tasksRepo } from "../../../../../helpers/database"; 

export default (request, response) => {
    if (request.method !== "PATCH") return response.status(404).json({status: false, message: 'Bad Request!'});
    const id_ = request.query.id;
    const params_ = request.body;
    tasksRepo.update(id_, params_);
    response.json(tasksRepo.getById(id_));
}

