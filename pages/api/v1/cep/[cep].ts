import { NextApiRequest, NextApiResponse } from "next"; 

export default async (req:NextApiRequest, res:NextApiResponse) => {
    if (req.method != "GET") return res.status(404).json({status: false, message: 'Bad Request!'});
    const cep = req.query.cep;
    const result = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`, {method: req.method});

    return res.json( await result.json() );
}
