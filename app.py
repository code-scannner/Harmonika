from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api")
def hello_world():
    return jsonify({
        "title": "hello"
    })

if __name__ == '__main__':
    app.run(port=8080, debug=True)