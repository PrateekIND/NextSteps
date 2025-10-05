// src/ui/dialogBox.jsx
import React, { useState } from "react";

const DialogBox = ({ expert, onClose, onApprove, onDisapprove }) => {
  const [zoomedDoc, setZoomedDoc] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);

  const handleWheel = (e) => {
    e.preventDefault();
    setZoomScale((prev) => {
      let newScale = prev + e.deltaY * -0.001; // adjust zoom sensitivity
      if (newScale < 0.5) newScale = 0.5;
      if (newScale > 5) newScale = 5;
      return newScale;
    });
  };

  const resetZoom = () => setZoomScale(1);

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

        {/* Approve / Disapprove Button */}
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
                  className="border rounded overflow-hidden relative cursor-pointer"
                >
                  <img
                    src={doc}
                    alt={`doc-${idx}`}
                    className="w-full h-32 object-cover"
                    onClick={() => {
                      setZoomedDoc(doc);
                      resetZoom();
                    }}
                  />
                  <a
                    href={doc}
                    download
                    className="absolute bottom-1 right-1 bg-white text-gray-700 px-1 rounded text-xs"
                  >
                    ⬇
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Zoomed Document Modal */}
        {zoomedDoc && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onWheel={handleWheel}
          >
            <button
              onClick={() => setZoomedDoc(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              ×
            </button>
            <img
              src={zoomedDoc}
              alt="zoomed doc"
              style={{ transform: `scale(${zoomScale})` }}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded transition-transform"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DialogBox;
