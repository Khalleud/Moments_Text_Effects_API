const express = require('express');
const textEffectRouter = express.Router();
const textEffectController = require('../controllers/textEffectController');
const {timeParser, resolutionParser, coordinatesParser} = require('../utils/Parser');


const translateToCommand = () =>{
    console.log(1);
}

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
    const command = 'ffmpeg -i ' + video['Input video path'] + ' -vf \
     drawtext=\"enable=\'between(t,'+timeParser(text['Start Time'])+','+ timeParser(text['End Time']) + ')\' \
     :text=\' ' + text['Text String'] + ' \' \
     :fontsize='+ text['Font Color'] +':fontsize='+ text['Font Size']+':\
     x='+ coordinatesParser(text["X, Y"])[0] +':y='+ coordinatesParser(text["X, Y"])[1] +'" '+ video['Output video path']+''
    
    res.status(200).send({
        'status': 'SUCCESS',
        'command': command
    })
});



module.exports = textEffectRouter;