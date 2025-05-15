import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

const JoinAsMentor = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <section className="w-full py-20 min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-100 to-slate-200">
      <Card className="w-full max-w-3xl shadow-lg border-slate-200 rounded-2xl">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-slate-800">
            Join as a Mentor
          </h2>
          <p className="text-center text-slate-600">
            Share your knowledge. Shape someone’s journey ✨
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Text fields */}
            {[
              { label: "Full Name", name: "fullName", type: "text" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Phone Number", name: "phone", type: "tel" },
              { label: "Current Job Title", name: "jobTitle", type: "text" },
              { label: "Company Name", name: "company", type: "text" },
              { label: "Total Years of Experience", name: "experience", type: "number" },
              { label: "Industry/Field of Expertise", name: "expertise", type: "text" },
              { label: "LinkedIn Profile URL", name: "linkedin", type: "url" },
              { label: "Areas of Guidance", name: "guidance", type: "text" },
              { label: "Availability (Days/Time Slots)", name: "availability", type: "text" },
            ].map((field) => (
              <div key={field.name} className="space-y-1">
                <label className="text-sm font-medium text-slate-700">
                  {field.label}
                </label>
                <Input
                  type={field.type}
                  name={field.name}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            {/* Bio */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Brief Bio</label>
              <textarea
                name="bio"
                rows={4}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* File uploads */}
            {[
              {
                label: "Upload Resume/CV",
                name: "resume",
                accept: ".pdf,.doc,.docx",
              },
              {
                label: "Upload Professional ID Proof",
                name: "idProof",
                accept: ".pdf,.png,.jpg,.jpeg",
              },
              {
                label: "Upload Certifications (optional)",
                name: "certifications",
                accept: ".pdf,.docx",
              },
            ].map((fileField) => (
              <div key={fileField.name} className="space-y-1">
                <label className="text-sm font-medium text-slate-700">
                  {fileField.label}
                </label>
                <input
                  type="file"
                  name={fileField.name}
                  accept={fileField.accept}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg p-2"
                />
              </div>
            ))}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full mt-6 gap-2 border-blue-500 text-blue-500 hover:bg-blue-50"
              variant="outline"
            >
              <Calendar className="h-4 w-4" />
              Submit and Book a Session
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default JoinAsMentor;
