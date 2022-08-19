import { numbersRepo } from "../../../../helpers/api/numbers";

export default (request, response) => {
    if (request.method != "GET") return response.status(404).json({status: false, message: 'Bad Request!'});
    let sortable = numbersRepo.draw(6); 
    // console.log("=>", sortable);
    response.json(sortable);
}
