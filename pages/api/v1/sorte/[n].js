export default function Sorte (request, response) {

    if (request.method != "GET") return response.status(404).json({status: false, message: 'Bad Request!'});

    const n = request.query.n;
    let numbers = Array.from({length: 60}, (_, i) => i + 1);
    numbers = numbers.sort( () => .5 - Math.random() );
    const sortable = numbers.slice(0, n).sort( (a, b) => a - b );
    console.log(sortable);
    response.json(sortable);
}