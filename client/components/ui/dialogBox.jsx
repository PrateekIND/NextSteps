// src/ui/dialogBox.jsx
import React from "react";
import { FileText, Download } from "lucide-react";

const DialogBox = ({ expert, onClose, onApprove, onDisapprove }) => {
  const isPdf = (url) => url?.toLowerCase().endsWith(".pdf");
  const isImage = (url) =>
    url?.toLowerCase().endsWith(".png") ||
    url?.toLowerCase().endsWith(".jpg") ||
    url?.toLowerCase().endsWith(".jpeg");

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-full overflow-y-auto relative p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-red-500 font-bold text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4">{expert.name}</h2>
        <p><strong>Email:</strong> {expert.email}</p>
        <p><strong>Phone:</strong> {expert.phone}</p>
        <p><strong>Specialization:</strong> {expert.specialization}</p>
        <p><strong>Price:</strong> {expert.price}</p>
        <p><strong>Bio:</strong> {expert.bio}</p>
        <p><strong>Approved:</strong> {expert.approved ? "Yes ✅" : "No ❌"}</p>

        {/* Approve / Disapprove */}
        {expert.approved ? (
          <button
            onClick={() => onDisapprove(expert._id)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Disapprove Expert
          </button>
        ) : (
          <button
            onClick={() => onApprove(expert._id)}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Approve Expert
          </button>
        )}

        {/* Documents */}
        {expert.documents && expert.documents.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Documents:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {expert.documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="border rounded overflow-hidden relative flex flex-col items-center justify-center p-2"
                >
                  {isImage(doc) ? (
                    <a 
                    href={doc}
                    className="w-full h-32 object-cover mb-1">
                      <img
                      src={doc}
                      alt={`doc-${idx}`}
                      className="w-full h-32 object-cover mb-1"
                    />
                    </a>
                  ) : isPdf(doc) ? (
                    <>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <FileText className="text-red-500 w-10 h-10" />
                      <span className="text-sm font-medium">PDF Document</span>
                    </div>
                    <a
                    href={doc}
                    download
                    className="mt-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs flex items-center gap-1 hover:bg-gray-300 transition"
                  >
                    <Download className="w-3 h-3" /> Download
                  </a>
                  </>
                  ) : (
                    <img
                      src="https://via.placeholder.com/150"
                      alt="placeholder"
                      className="w-full h-32 object-cover mb-1"
                    />
                  )}

                  {/* Download button for all docs */}
                  
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DialogBox;
