class Command {
    constructor(){
            this.str = 'ffmpeg -i '
        }
    toString(){
        return this.str
    }
}
class textEffectCommandBuilder{
    constructor(){
        this.command = new Command()
    }

    setVideoInput(videoInput){
        if (typeof videoInput == 'undefined'){
            throw new Error('Video input is not defined')
        }
        this.command.videoInput = videoInput
        this.command.str = this.command.str + videoInput + ' -vf '
        return this
    }
    setVideoOutput(videoOutput){
        if (typeof videoOutput == 'undefined'){
            throw new Error('Video output is not defined')
        }
        this.command.videoOutput = videoOutput
        this.command.str = this.command.str + videoOutput
        return this
    }
    setTextString(textString){
        if (typeof textString == 'undefined'){
                    throw new Error('Text string is not defined')
                }
        this.command.textString = textString
        this.command.str = this.command.str + ':text=\'' + textString +'\''
        return this
    }
    setFontSize(fontSize){
        if (typeof fontSize == 'undefined'){
                    throw new Error('Font size is not defined') }
        this.command.fontSize = fontSize
        this.command.str = this.command.str + ':fontsize='+ fontSize + ' '
        return this
    }

    setFontColor(fontColor){
        if (typeof fontColor == 'undefined'){
                    throw new Error('Font color is not defined') }
        this.command.str = this.command.str + ':fontsize='+ fontColor
        this.command.fontColor = fontColor
        return this
    }
    setStartTime(startTime, endTime) {   
        if (typeof startTime == 'undefined'){
            throw new Error('Start time is not defined')
        }
        if (typeof endTime == 'undefined'){
                    throw new Error('End time is not defined')
        }
        this.command.startTime = startTime
        this.command.endTime = endTime
        this.command.str = this.command.str + 'drawtext=\"enable=\'between(t,'+ startTime + ',' + endTime + ')\''
        return this
    }
    
    setXY(x,y){
        if (typeof x == 'undefined'){
            throw new Error('X is not defined')
        }
        if (typeof y == 'undefined'){
                    throw new Error('Y is not defined')
        }
        if (typeof x == 'undefined' && typeof y == 'undefined'){
            throw new Error('X and Y are not defined')
        }
        this.command.x = x
        this.command.y = y
        this.command.str = this.command.str + ':x='+ x +':y='+ y +'" '
        return this
    }
    build(){    
        return this.command
    }
}

module.exports.textEffectCommandBuilder = textEffectCommandBuilder;