from flask import Flask, request
from os import getenv
import csv

app = Flask(__name__)
app.config["CORS_HEADERS"] = "Content-Type"


@app.after_request
def after_request(response):
    # cors
    origin = "*"

    response.headers.add(
        "Access-Control-Allow-Origin",
        origin,
    )
    response.headers.add(
        "Access-Control-Allow-Headers", "Content-Type,Authorization,X-Requested-With"
    )
    response.headers.add("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
    response.headers.add("Access-Control-Allow-Credentials", "true")

    return response


@app.route("/store", methods=["POST", "OPTIONS"])
def store_score():
    print('here')
    if request.method == "OPTIONS":
        return ""
    data = request.get_json()
    score = data.get("score")
    with open("scores.csv", "a", newline="") as file:
        writer = csv.writer(file)
        writer.writerow([score])
    print(score)
    return "Score stored successfully"


if __name__ == "__main__":
    app.run(debug=True)
