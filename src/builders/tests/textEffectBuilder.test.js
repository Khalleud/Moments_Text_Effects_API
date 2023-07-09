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
})
