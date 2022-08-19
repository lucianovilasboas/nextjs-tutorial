import { tasksRepo } from "../../../../helpers/api/database";

export default (request, response) => {
    const id_ = request.query.id;
    if (request.method === "GET"){
        const oneTask = tasksRepo.getById(id_);
        response.status(200).json(oneTask == undefined ? {id: id_, task: "not found"} : oneTask);
    }
    else if (request.method === "PATCH" || request.method === "PUT"){
        const params_ = request.body;
        tasksRepo.update(id_, params_);
        response.status(200).json(tasksRepo.getById(id_));
    }
    else if (request.method === "DELETE"){
        tasksRepo.delete(id_);
        response.status(200).json(tasksRepo.getAll());
    }
    else {
        return response.status(404).json({status: false, message: 'Bad Request!'});
    }
}

