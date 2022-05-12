// console.log("HII Zeek");
//node js download click about and then copy paste the code.
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo Selectors and more designing</title>
      <style>
      #cont1{color: red;
              background-color: #fff8b6;
              width: 700px;
              margin:40px 300px;
              padding:2px 10px;
              border: #0eea0e solid 3px;
              border-radius: 14px;}
      
      h3{color: darkblue;}
  
      .btn:hover{background-color: rgb(173, 173, 255);
                color: brown;}
      a:visited{background-color: rgb(255, 205, 113);
              color: rgba(24, 17, 0, 0.493);}
      a:active{background-color: rgb(255, 206, 190);
         }
  
      .btn{background-color: #d0ff99;
          border-radius: 5px;
           padding: 2px;
          border: none;
           color: darkred;
          text-decoration: none;
        cursor: pointer;
         font-size: 16px;}
      </style>
  </head>
  <body>
      <div id="cont1" class="container">
          <h3 >This is my heading</h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis accusantium error repellendus adipisci deleniti, non assumenda fugiat nobis voluptatum excepturi, minus nemo ab provident culpa a consectetur? Laborum quaerat ducimus molestias porro neque excepturi voluptas minima vel rem, delectus laudantium! Itaque, rem voluptate.</p>
          <P>For hovering backgroud colour is light blue.For visited backgroud colour is light yellow.For active backgroud colour is light pink. </P>
      
          <a href="https://google.com"class="btn"target="_blank">Read More</a>
      
          <button id="myButton"class="btn">Contact us</button>
      </div>
    
  </body>
  </html>`);
});

 server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
