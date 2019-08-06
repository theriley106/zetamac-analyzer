from __future__ import print_function
import boto3
import base64
from json import loads
import time
import json

g = boto3.Session()


dynamodb_client = g.resource('dynamodb')


def get_id_name():
	try:
		# Gets the newest ID name from the DB
		#dynamodb = session.resource("dynamodb")
		table = dynamodb.Table("allInventory")
		#print(table.creation_date_time)
		response = table.scan()
		#print response["Items"]
		return max([x['id'] for x in response["Items"]]) + 1
	except:
		return 0

def lambda_handler(event, context):
	#return "WORKING"
	table = dynamodb_client.Table("zetamac")
	#print(table.creation_date_time)
	type_of_request = event.get('httpMethod', "GET")
	toReturn = {}
	#return {'idVal':11}
	if type_of_request == "POST":
		print("AYY")
		information = json.loads(event['body'])
		
		response = table.scan()
		try:
			idVal = max([x['idVal'] for x in response["Items"]]) + 1
		except:
			idVal = 0
		print({'idVal': int(idVal)})
		table.put_item(
			Item={"idVal": idVal, "score": information.get("score", None), "time": int(time.time())}
			)
		#print('Successfully delivered {0} records, failed to deliver {1} records'.format(success, failure))
		return {
			'statusCode': '200',
			'body': json.dumps({'idVal': int(idVal)}),
			'headers': {
				'Content-Type': 'application/json',
			},
		}
	else:
		a = []
		for x in table.scan()["Items"]:
			a.append({"idVal": int(x['idVal']), "score": int(x["score"]), "time": int(x["time"])})
		return {
			'statusCode': '200',
			'body': json.dumps(a),
			'headers': {
				'Content-Type': 'application/json',
			},
		}
