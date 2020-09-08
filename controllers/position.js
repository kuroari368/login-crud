const Position = require("../models/Position")
const errorHandler = require('../utils/errorHandler')

module.exports.allPositions = async function(req, res){
    try{
        const positions = await Position.find({})
        res.status(200).json(positions)
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports.createPosition = async function(req, res){
    try{
        const position = await new Position({
            name: req.body.name
        }).save()
        res.status(201).json(position)
    } catch(e)
    {
        errorHandler(res, e)
    }
}

module.exports.updateById = async function(req, res){
    try{
        const position = await Position.findByIdAndUpdate(
            {_id: req.params.id,},
            {$set: req.body},
            {new: true}
        )
        res.status(200).json(position)
    } catch(e){
        errorHandler(res, e)
    }
}

module.exports.deleteById = async function(req, res){
    try{
        await Position.remove({_id: req.params.id})
        res.status(200).json({
            message: 'element deleted'
        })
    } catch(e){
        errorHandler(res, e)
    }
}
