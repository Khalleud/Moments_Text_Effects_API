const {textEffectCommandBuilder} = require('../textEffectBuilder')


describe('testing textEffectCommandBuilder', () => {

    it('should return a textEffectCommand with no arguments', () => {
        let textEffectCommand = new textEffectCommandBuilder()
            .build()
        expect(textEffectCommand.toString()).toEqual('ffmpeg -i ')
    })

    it('should return a textEffectCommand with input video path', () => {
        let textEffectCommand = new textEffectCommandBuilder()
            .setVideoInput('input.mp4')
            .build()
        expect(textEffectCommand.toString()).toEqual('ffmpeg -i input.mp4 -vf ')
    })
    // should return an error, input video path undefined
    it('should return an arror indicating input video path not defined', () => {
        
        try{
            let textEffectCommand = new textEffectCommandBuilder()
                .setVideoInput()
                .build()
        } catch(error){
            expect(error.message).toEqual('Video input is not defined')
            expect(error).toBeInstanceOf(Error)
        }
    })
    // return command with text string
    it('add Text String in the command', () => {
        let textEffectCommand = new textEffectCommandBuilder()
            .setVideoInput('input.mp4')
            .setStartTime('20.0', '30.0' )
            .setTextString('Hello world!')
            .build()
        expect(textEffectCommand.toString()).toEqual('ffmpeg -i input.mp4 -vf drawtext="enable=\'between(t,20.0,30.0)\':text=\'Hello world!\'')

    })

    // return command with text string
    it('add Text String in the command', () => {
        try{let textEffectCommand = new textEffectCommandBuilder()
            .setVideoInput('input.mp4')
            .setStartTime('20.0', '30.0' )
            .setTextString()
            .build()}
        catch(error){
            expect(error.message).toEqual('Text string is not defined')
            expect(error).toBeInstanceOf(Error)
        }

    })


})
