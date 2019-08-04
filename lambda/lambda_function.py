import json


def lambda_handler(event, context):
	type_of_request = event['httpMethod']
	toReturn = {}
	if type_of_request == "POST":
	    information = json.loads(event['body'])
	    toReturn['finalScore'] = information['score']
	return {
		'statusCode': '200',
		'body': json.dumps(toReturn),
		'headers': {
			'Content-Type': 'application/json',
		},
	}