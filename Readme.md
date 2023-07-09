## Install App

- clone app
- run   ```
        $ npm install
        ```

## Run App
- run with   ```
                 $ npm run dev
                 ```

## Run tests

- run  ```
         $ npm run test
         ```

## you can also run a test via Postman after running app


- try 	``` POST 	http://localhost:8080/textEffect```

- fill body with json data like this:

```

{

"video":{

"Input video path" :"test_input1.mp4",

"Duration": "60.0 s",

"Resolution": "1920 x 1080",

"Output video path": "test_output1.mp4"

},

  

"text":{

"Text String": "I’m sOoOo good at this game! xD",

"X, Y": "200, 100",

"Font Size": "64",

"Font Color": "0xFFFFFF",

"Start Time": "23.0 s",

"End Time": "30.0 s"}

}
```