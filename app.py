from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():

    data = request.json
    stock = data['stock']

    prediction = 123.45

    return jsonify({
        "prediction": prediction
    })

if __name__ == '__main__':
    app.run()