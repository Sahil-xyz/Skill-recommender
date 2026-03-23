from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

# Load dataset
df = pd.read_csv("jobs.csv")

# Recommendation function
def recommend_jobs(user_input):
    corpus = df["skills"].tolist()
    
    vectorizer = TfidfVectorizer()
    vectors = vectorizer.fit_transform(corpus + [user_input])
    
    similarity = cosine_similarity(vectors[-1], vectors[:-1])
    scores = similarity.flatten()
    
    results = []
    for i, score in enumerate(scores):
        job_skills = set(df.iloc[i]["skills"].split())
        user_skills = set(user_input.lower().split())
        
        missing = list(job_skills - user_skills)
        
        results.append({
            "job": df.iloc[i]["job_title"],
            "match_score": round(score * 100, 2),
            "missing_skills": missing
        })
    
    return sorted(results, key=lambda x: x["match_score"], reverse=True)

# API route
@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json()
    user_input = data.get("skills", "")
    
    results = recommend_jobs(user_input)
    
    return jsonify(results[:5])  # top 5 jobs

if __name__ == "__main__":
    app.run(debug=True)