from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np, pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "*"}})

songs = pd.read_pickle('./learning/songs.pkl')
similarity = np.load('./learning/similarity.npy')

vectorizer = TfidfVectorizer()
all_transform = vectorizer.fit_transform(songs['title'].tolist())

top_songs = songs.sort_values(by = "year").iloc[-50:].index.tolist()

def get_songs(indexes):
    result = []
    for index in indexes:
        result.append(songs.iloc[index].to_dict())
    return result

@app.route("/api/recommend/<song_id>")
def recommend(song_id):
    try:
        song_indexes = similarity[int(song_id)].tolist()
        return jsonify(get_songs(song_indexes))
    except Exception as e:
        print(e)
        return []

@app.route("/api/search/")
def simple_search():
    try:
        return jsonify(get_songs(top_songs))
    except Exception as e:
        print(e)
        return []


@app.route("/api/search/<query>")
def search(query):
    try:
        print(query)
        query_transform = vectorizer.transform([query])
        similar_songs = cosine_similarity(query_transform, all_transform)
        search_songs = np.argsort(-similar_songs[0]).tolist()[:50]
        return jsonify(get_songs(search_songs))
    except Exception as e:
        print(e)
        return []


if __name__ == '__main__':
    app.run(port=8080, debug=True)