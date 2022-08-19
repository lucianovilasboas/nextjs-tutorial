import { demRepo } from "../../../../helpers/api/democracia";  

export default (request, response) => {
    if (request.method === "GET") {
        response.json(demRepo.findLast());
    }
    else
        return response.status(404).json({status: false, message: 'Bad Request!'});
}
