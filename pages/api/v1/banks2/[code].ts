import { NextApiRequest, NextApiResponse } from "next";


export default async (req:NextApiRequest, res: NextApiResponse) => {
    if (req.method != "GET") return res.status(404).json({status: false, message: 'Bad Request!'});
    const code = req.query.code;
    const bank = await fetch(`https://brasilapi.com.br/api/banks/v1/${code}`, {method: req.method});

    return res.json( await bank.json() );
}
