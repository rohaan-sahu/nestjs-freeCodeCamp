#!/bin/bash

curl -X POST -i http://localhost:3000/profiles/ \
   -H "Content-type: application/json" \
   -d '{
	"name": "Ka",
	"description": "This javascript coder is a master of syntax, a weaver of the web, and a connoisseur of coffee. In the morning, I like to make a wheatgrass juice and set aside an hour to read up the latest JS releases before starting my day. There is just something electric about a fresh npm install, you know? Want to contribute to a new universe together?"
	}'
