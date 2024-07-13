from flask import Flask, jsonify
import numpy as np, pandas as pd

app = Flask(__name__)

songs = pd.read_pickle('./learning/songs.pkl')
similarity = np.load('./learning/similarity.npy')

@app.route("/api/recommend/<song_id>")
def recommend(song_id):
    try:
        song_indexes = similarity[int(song_id)].tolist()
        result = []
        for index in song_indexes:
            result.append(songs.iloc[index].to_dict())
        return jsonify(result)
    except Exception as e:
        print(e)
        return []

if __name__ == '__main__':
    app.run(port=8080, debug=True)