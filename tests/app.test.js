const app = require("../")
const supertest = require('supertest')
const request = supertest(app)


describe('POST /textEffect', () => {
    //should return 200
    // should return ffmpeg command
    it('should return 200 & ffmpeg command', async () => {
         const response = await request.post('/textEffect').send({
            "video": {
                "Input video path" :"test_input1.mp4", 
                "Duration": "60.0 s", 
                "Resolution": "1920 x 1080", 
                "Output video path": "test_output1.mp4"},

            "text":{
                "Text String": 'I\’m sOoOo good at this game! xD', 
                "X, Y": "200, 100", 
                "Font Size": "64",
                "Font Color": "0xFFFFFF", 
                "Start Time": "23.0 s", 
                "End Time": "30.0 s"}
        
        })
        expect(response.status).toBe(200)
        expect(response.body.status).toBe('SUCCESS')
    })


    // it should return 400
    // it should return status ERROR
    // it should return message Invalid End Time

    it('End time of text is above video end time', async () => {
        const response = await request.post('/textEffect').send({
           "video": {
               "Input video path" :"test_input1.mp4", 
               "Duration": "60.0 s", 
               "Resolution": "1920 x 1080", 
               "Output video path": "test_output1.mp4"},

           "text":{
               "Text String": 'I\’m sOoOo good at this game! xD', 
               "X, Y": "200, 100", 
               "Font Size": "64",
               "Font Color": "0xFFFFFF", 
               "Start Time": "23.0 s", 
               "End Time": "70.0 s"}
       
       })
       expect(response.status).toBe(400)
       expect(response.body.status).toBe('ERROR')
       expect(response.body.message).toBe('Invalid End Time')
    })

    // it should return 400
    // it should return status ERROR
    // it should return message Invalid X,Y coordinate 
    it('End time of text is above video end time', async () => {
        const response = await request.post('/textEffect').send({
           "video": {
               "Input video path" :"test_input1.mp4", 
               "Duration": "60.0 s", 
               "Resolution": "1920 x 1080", 
               "Output video path": "test_output1.mp4"},

           "text":{
               "Text String": 'I\’m sOoOo good at this game! xD', 
               "X, Y": "200, 9999", 
               "Font Size": "64",
               "Font Color": "0xFFFFFF", 
               "Start Time": "23.0 s", 
               "End Time": "40.0 s"}
       
       })
       expect(response.status).toBe(400)
       expect(response.body.status).toBe('ERROR')
       expect(response.body.message).toBe('Invalid X,Y coordinate')
    })

    // it should return 400
    // it should return status ERROR
    // it should return message Text string is not defined

    it('Text object without string text field', async () => {
        const response = await request.post('/textEffect').send({
           "video": {
               "Input video path" :"test_input1.mp4", 
               "Duration": "60.0 s", 
               "Resolution": "1920 x 1080", 
               "Output video path": "test_output1.mp4"},

           "text":{
               "X, Y": "200, 100", 
               "Font Size": "64",
               "Font Color": "0xFFFFFF", 
               "Start Time": "23.0 s", 
               "End Time": "40.0 s"}
       
       })
       expect(response.status).toBe(400)
       expect(response.body.status).toBe('ERROR')
       expect(response.body.message).toBe('Text string is not defined')
    })

    // it should return 400
    // it should return status ERROR
    // it should return message Video input is not defined

    it('Video object without Video input path', async () => {
        const response = await request.post('/textEffect').send({
           "video": {
               "Duration": "60.0 s", 
               "Resolution": "1920 x 1080", 
               "Output video path": "test_output1.mp4"},

           "text":{
               "X, Y": "200, 100", 
               "Font Size": "64",
               "Font Color": "0xFFFFFF", 
               "Start Time": "23.0 s", 
               "End Time": "40.0 s"}
       
       })
       expect(response.status).toBe(400)
       expect(response.body.status).toBe('ERROR')
       expect(response.body.message).toBe('Video input is not defined')
    })
        
})