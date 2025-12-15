#! /bin/bash

curl -X PUT http://localhost:3000/profiles/c864853b-f76f-4fd5-a5d3-8cd50fa3c779 \
	-H "Content-type: application/json" \
	-d '{
			"description": "Some random text"
}' | jq '.'