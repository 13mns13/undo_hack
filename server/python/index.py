import statsmodels.api as sm
import random
from  flask import Flask, request
import flask_cors, json


app = Flask(__name__)
flask_cors.CORS(app)

@app.post("/test")
def index():
    data = json.loads(request.data)
    if len(data)<5:
        for i in range(10-len(data)):
            data.append(random.randint(min(data), max(data)))
    size = int(len(data) * 0.66)
    train, test = data[0:size], data[size:len(data)]
    history = [x for x in train]
    predictions = list()
    result = []
    for t in range(len(test)):
        model = sm.tsa.arima.ARIMA(history, order=(5,1,0))
        model_fit = model.fit()
        output = model_fit.forecast()
        yhat = output[0]
        predictions.append(yhat)
        obs = test[t]
        history.append(obs)
        result.append([yhat,obs])
    return {
        "data":result
    }

if __name__=="__main__":
    app.run(port=5000)