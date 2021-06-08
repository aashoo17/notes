var express = require('express')		//create express server
var app = express()
var jwt = require('jsonwebtoken')		//jsonwebtoken module import

var payload = {					//creating an payload it can be any object
	id: 1,						//make sure to make it as small as possible to reduce the transfer overhead
	name: 'Ashutosh Singh',
	age: 25
}
app.get('/api',verifyToken,(req,res)=>{		//get request with middleware function verifyToken
	res.json(payload)
})

app.post('/login',(req,res)=>{				//post request to login route
	jwt.sign(payload,'secretkey',(err,token)=>{		//sign method to create hashed jsonwebtoken (async method sign)
		console.log(token)
		res.json(token)								//sending jsomwebtoken as reposnse
	})
})

function verifyToken(req,res,next){				//middleware to check if jsonwebtoken has valid signature
	var token = req.get('token')				//since i am making request using postman app i am passing header with key 'token and value received 'jsonwebtoken', can access it using req.get('token')
	jwt.verify(token,'secretkey',(err,decoded)=>{	//verify method to verify the signature (async method verify)
		if(err){
			res.sendStatus(403)					//if err received forbidd the route and send forbidden response
		}else{
			console.log('successful match')
			next()								//else continue
		}
	})
}

app.listen(3000)							//server running on port 3000