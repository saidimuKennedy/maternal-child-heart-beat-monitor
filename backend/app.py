from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson import ObjectId
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes to allow cross-origin requests

# Configure MongoDB connection using pymongo
client = MongoClient("mongodb://localhost:27017/")
db = client["hospital_db"]
patient_collection = db["patients"]


# Route to add a new patient
@app.route("/add_patient", methods=["POST"])
def add_patient():
    try:
        patient_data = request.json
        patient = {
            "patients": patient_data["patients"],
            "age": int(patient_data["age"]),
            "gender": patient_data["gender"],
            "temp": float(patient_data["temp"]),
            "pressure": patient_data["pressure"],
        }
        result = patient_collection.insert_one(patient)
        patient["_id"] = str(
            result.inserted_id
        )  # Convert ObjectId to string for JSON compatibility
        return (
            jsonify({"message": "Patient added successfully", "patient": patient}),
            201,
        )
    except Exception as e:
        return jsonify({"error": str(e)}), 400


# Route to get all patient data
@app.route("/patients", methods=["GET"])
def get_patients():
    try:
        patients = list(patient_collection.find())
        for patient in patients:
            patient["_id"] = str(patient["_id"])  # Convert ObjectId to string for JSON
        return jsonify(patients), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Route to get an individual patient
@app.route("/patient/<id>", methods=["GET"])
def get_patient(id):
    try:
        patient = patient_collection.find_one({"_id": ObjectId(id)})
        if patient:
            patient["_id"] = str(patient["_id"])  # why is this line here
            return jsonify(patient), 200
        return jsonify({"message": "Patient not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 400


# Route to edit a patient's data
@app.route("/edit_patient/<id>", methods=["PUT"])
def edit_patient(id):
    try:
        patient_data = request.json
        updated_data = {
            "patients": patient_data["patients"],
            "age": int(patient_data["age"]),
            "gender": patient_data["gender"],
            "temp": float(patient_data["temp"]),
            "pressure": patient_data["pressure"],
        }
        result = patient_collection.update_one(
            {"_id": ObjectId(id)}, {"$set": updated_data}
        )
        if result.matched_count > 0:
            return jsonify({"message": "Patient updated successfully"}), 200
        return jsonify({"message": "Patient not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 400


# Route to delete a patient
@app.route("/delete_patient/<id>", methods=["DELETE"])
def delete_patient(id):
    try:
        result = patient_collection.delete_one({"_id": ObjectId(id)})
        if result.deleted_count > 0:
            return jsonify({"message": "Patient deleted successfully"}), 200
        return jsonify({"message": "Patient not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    app.run(debug=True)
