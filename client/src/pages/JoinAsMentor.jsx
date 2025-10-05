import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import MultiFileInput from "@/components/ui/multiFileInput"; // <-- new import
import { useNavigate } from "react-router-dom";

const JoinAsMentor = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    price: "",
    specialization: "",
    photoUrl: null,
    documents: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      if (name === "photoUrl") {
        setFormData({ ...formData, photoUrl: files[0] });
      } else if (name === "documents") {
        setFormData({ ...formData, documents: [...formData.documents, ...files] });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRemoveDocument = (index) => {
    const updated = [...formData.documents];
    updated.splice(index, 1);
    setFormData({ ...formData, documents: updated });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  console.log("Form Submitted:", formData);

  try {
    // 1️⃣ Upload profile photo
    let photoPath = null;
    
    if (formData.photoUrl) {
      const photoForm = new FormData();
      photoForm.append("fileName", formData.photoUrl.name);
      photoForm.append("folder", "photos");

      // Get signed URL from backend
      const photoRes = await fetch("http://localhost:5800/api/experts/upload-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName: formData.photoUrl.name, folder: "photos" }),
      });
      const photoData = await photoRes.json();
      photoPath = photoData.path;
      
      console.log(photoPath);
      


      // Upload file to signed URL
      await fetch(photoData.signedUrl, {
        method: "PUT",
        body: formData.photoUrl,
      });
    }

    // 2️⃣ Upload documents
    const documentPaths = [];
    for (const doc of formData.documents) {
      const docRes = await fetch("http://localhost:5800/api/experts/upload-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName: doc.name, folder: "documents" }),
      });
      const docData = await docRes.json();
      documentPaths.push(docData.path);

      await fetch(docData.signedUrl, {
        method: "PUT",
        body: doc,
      });
    }

    // 3️⃣ Register expert
    const registerRes = await fetch("http://localhost:5800/api/experts/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        bio: formData.bio,
        price: formData.price,
        specialization: formData.specialization,
        photoPath,
        documentPaths,
      }),
    });
    if (registerRes.ok) {

      const result = await registerRes.json();
      console.log("Server Response:", result);
      alert("Mentor Registered Successfully 🎉");
  // Navigate to home after 1 second so user sees the alert
  setTimeout(() => {
    navigate("/");
  }, 1000);
}


  } catch (err) {
    console.error("Error:", err);
    alert("Failed to register mentor ⚠️");
  } finally {
    setLoading(false); // stop loading
  }
  
};

  return (
    <section className="w-full py-20 min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-100 to-slate-200">
      <Card className="w-full max-w-3xl shadow-lg border-slate-200 rounded-2xl">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-slate-800">
            Join as a Career Expert
          </h2>
          <p className="text-center text-slate-600">
            Share your knowledge, shape careers 🌟
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Regular Inputs */}
            {[ 
              { label: "Full Name", name: "name", type: "text" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Phone Number", name: "phone", type: "tel" },
              { label: "Price", name: "price", type: "number" },
              { label: "Specialization", name: "specialization", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-sm font-medium text-slate-700">
                  {field.label}
                </label>
                <Input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            {/* Bio */}
            <div>
              <label className="text-sm font-medium text-slate-700">Brief Bio</label>
              <textarea
                name="bio"
                rows={4}
                value={formData.bio}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="text-sm font-medium text-slate-700">
                Upload Profile Photo
              </label>
              <input
                type="file"
                name="photoUrl"
                accept=".jpg,.jpeg,.png"
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg p-2"
              />
            </div>

            {/* 🗂️ Multi-file Upload */}
            <MultiFileInput
              label="Upload Documents (Resume, Certificates, etc.)"
              name="documents"
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              files={formData.documents}
              onChange={handleChange}
              onRemove={handleRemoveDocument}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full mt-6 gap-2 border-blue-500 text-blue-500 hover:bg-blue-50 flex justify-center items-center"
              variant="outline"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : (
                <>
                  <Calendar className="h-4 w-4" />
                  Submit & Join the Platform
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default JoinAsMentor;
