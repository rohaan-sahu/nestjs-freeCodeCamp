#! /bin/bash

curl -X PUT http://localhost:3000/profiles/efd6980d-c1ac-4261-a201-56418407c139 \
	-H "Content-type: application/json" \
	-d '{
			"name": "Ka",
			"description": "Hello  World"
}' | jq '.'