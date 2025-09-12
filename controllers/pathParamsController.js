import { startups } from '../data/data.js'


export const pathParamsController = (req, res)=>{
    
    let filteredData = startups

    const allowedFields = ['country', 'continent', 'industry']

    const {field, term}= req.params;

    if(allowedFields.includes(field)){
           filteredData = filteredData.filter(startup =>
        startup[field].toLowerCase() === term
           )
               res.json(filteredData)
    }
    else{
        return res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })
    }

}