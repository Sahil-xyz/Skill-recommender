from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend connection

# Load dataset
df = pd.read_csv("jobs.csv")

# Precompute vectorizer + job vectors (IMPORTANT for performance)
vectorizer = TfidfVectorizer()
job_vectors = vectorizer.fit_transform(df["skills"].tolist())

# Recommendation function
def recommend_jobs(user_input):
    user_vector = vectorizer.transform([user_input])
    
    similarity = cosine_similarity(user_vector, job_vectors)
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
    
    if not data or "skills" not in data:
        return jsonify({"error": "Please provide skills"}), 400
    
    user_input = data.get("skills", "")
    
    results = recommend_jobs(user_input)
    
    return jsonify(results[:5])

# Root route (for testing on browser)
@app.route("/")
def home():
    return "Skill Recommender API is running 🚀"

# Run app (Render-compatible)
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)