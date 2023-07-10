const express = require('express');
const textEffectRouter = express.Router();
const {timeParser, resolutionParser, coordinatesParser} = require('../utils/Parser');
const {textEffectCommandBuilder} = require('../builders/textEffectBuilder')


const validateParams = (req, res, next) => {
    const video_params = req.body.video;
    const text_params = req.body.text;
    
    /** check time */
        if ( timeParser(text_params['End Time']) > timeParser(video_params['Duration'])){
            return res.status(400).send({
                'message': 'Invalid End Time',
                'status': 'ERROR'
        });
        }
    /** check coordinates */
        let resolution = resolutionParser(video_params['Resolution']);
        let coordinates = coordinatesParser(text_params['X, Y']);
        let x = coordinates[0];
        let y = coordinates[1];
        let length = resolution[0]
        let width = resolution[1]
        if (x < 0 || x > length || y < 0 || y > width){
            return res.status(400).send({
               'message': 'Invalid X,Y coordinate',
               'status': 'ERROR'
        });
        }
    next();
};

textEffectRouter.post('/', validateParams , (req, res) => {
    
    
    const video = req.body.video;
    const text = req.body.text;
    try {
    let textEffectCommand = new textEffectCommandBuilder()
        .setVideoInput(video['Input video path'])
        .setStartTime(timeParser(text['Start Time']), timeParser(text['End Time']) )
        .setTextString(text['Text String'])
        .setFontColor(text['Font Color'])
        .setFontSize(text['Font Size'])
        .setXY(coordinatesParser(text['X, Y'])[0], coordinatesParser(text['X, Y'])[1])
        .setVideoOutput(video['Output video path'])
        .build()
    console.log(textEffectCommand);
    console.log(textEffectCommand.toString());
    res.status(200).send({
        'status': 'SUCCESS',
        'command': textEffectCommand.toString()
    })
    } catch (error) {
        return res.status(400).send({
            'message': error.message,
            'status': 'ERROR'
        });
    }   
});



module.exports = textEffectRouter;