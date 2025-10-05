// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import DialogBox from "../ui/dialogBox";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const AdminDashboard = () => {
  const [experts, setExperts] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loadingExperts, setLoadingExperts] = useState(false);
  const [loadingBookings, setLoadingBookings] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  // 🧭 Redirect if not logged in
  useEffect(() => {
    if (!token) navigate("/");
  }, [token, navigate]);

  // 🚪 Logout function
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  // Fetch all experts
  const fetchExperts = async () => {
    setLoadingExperts(true);
    try {
      const res = await fetch("http://localhost:5800/api/admin/experts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setExperts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching experts:", err);
    } finally {
      setLoadingExperts(false);
    }
  };

  // Fetch all bookings
  const fetchBookings = async () => {
    setLoadingBookings(true);
    try {
      const res = await fetch("http://localhost:5800/api/admin/bookings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setBookings(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    } finally {
      setLoadingBookings(false);
    }
  };

  // ✅ Update booking status
  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      const res = await fetch(
        `http://localhost:5800/api/admin/bookings/${bookingId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!res.ok) throw new Error("Failed to update status");
      const updatedBooking = await res.json();

      setBookings((prev) =>
        prev.map((b) => (b._id === updatedBooking._id ? updatedBooking : b))
      );
    } catch (err) {
      console.error("Error updating booking status:", err);
      alert("Failed to update booking status");
    }
  };

  // ✅ Expert approval functions
  const updateExpertApproval = async (id, status) => {
    try {
      const res = await fetch(
        `http://localhost:5800/api/admin/experts/${id}/approve`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ approved: status }),
        }
      );
      const updatedExpert = await res.json();
      setExperts((prev) =>
        prev.map((exp) => (exp._id === updatedExpert._id ? updatedExpert : exp))
      );
      setSelectedExpert(updatedExpert);
    } catch (err) {
      console.error("Error updating expert approval:", err);
    }
  };

  const approveExpert = (id) => updateExpertApproval(id, true);
  const disapproveExpert = (id) => updateExpertApproval(id, false);

  useEffect(() => {
    fetchExperts();
    fetchBookings();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* 🧭 Header with Logout */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-center w-full md:w-auto">
          Admin Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>

      <Tabs defaultValue="experts" className="w-full">
        <TabsList>
          <TabsTrigger value="experts">Experts</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
        </TabsList>

        {/* Experts Tab */}
        <TabsContent value="experts">
          {loadingExperts ? (
            <p>Loading experts...</p>
          ) : experts.length === 0 ? (
            <p className="text-center text-gray-500 mt-4">No experts available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {experts.map((expert) => (
                <div
                  key={expert._id}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                  onClick={() => setSelectedExpert(expert)}
                >
                  <img
                    src={expert.photoUrl || "https://via.placeholder.com/150"}
                    alt={expert.name}
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                  <h3 className="font-bold text-lg">{expert.name}</h3>
                  <p className="text-sm text-gray-600">{expert.email}</p>
                  <p className="text-sm text-gray-600">{expert.phone}</p>
                  <p className="text-sm text-gray-600">{expert.specialization}</p>
                  <p className="text-sm text-gray-600">
                    Approved: {expert.approved ? "Yes ✅" : "No ❌"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Bookings Tab */}
        <TabsContent value="bookings">
          {loadingBookings ? (
            <p>Loading bookings...</p>
          ) : bookings.length === 0 ? (
            <p className="mt-4 text-center text-gray-500">No bookings yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition border border-gray-200"
                >
                  <h3 className="font-bold text-lg mb-2 text-blue-700">
                    {booking.userName || "Unknown User"}
                  </h3>
                  <p className="text-sm">
                    <strong>Email:</strong> {booking.userEmail || "—"}
                  </p>
                  <p className="text-sm">
                    <strong>Phone:</strong> {booking.userPhone || "—"}
                  </p>

                  <div className="my-2 border-t border-gray-100"></div>

                  <p className="text-sm">
                    <strong>Expert:</strong>{" "}
                    {booking.careerExpert?.name || "Unknown"}
                  </p>
                  <p className="text-sm">
                    <strong>Specialization:</strong>{" "}
                    {booking.careerExpert?.specialization || "—"}
                  </p>

                  <div className="my-2 border-t border-gray-100"></div>

                  <p className="text-sm">
                    <strong>Session Type:</strong>{" "}
                    <span className="capitalize">
                      {booking.sessionType
                        ? booking.sessionType.replace("-", " ")
                        : "—"}
                    </span>
                  </p>
                  <p className="text-sm">
                    <strong>Date:</strong>{" "}
                    {booking.sessionDate
                      ? new Date(booking.sessionDate).toLocaleDateString()
                      : "—"}
                  </p>
                  <p className="text-sm">
                    <strong>Time:</strong> {booking.sessionTime || "—"}
                  </p>

                  <div className="my-2 border-t border-gray-100"></div>

                  <p className="text-sm">
                    <strong>Goals:</strong>{" "}
                    <span className="italic">
                      {booking.goals || "Not specified"}
                    </span>
                  </p>

                  {booking.experience && (
                    <p className="text-sm">
                      <strong>Experience:</strong>{" "}
                      <span className="italic">{booking.experience}</span>
                    </p>
                  )}

                  <div className="my-2 border-t border-gray-100"></div>

                  {/* 🧩 Dropdown for status update */}
                  <label className="text-sm font-semibold mr-2">Status:</label>
                  <select
                    value={booking.status}
                    onChange={(e) =>
                      handleStatusChange(booking._id, e.target.value)
                    }
                    className="border rounded px-2 py-1 text-sm"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>

                  <p className="text-xs text-gray-500 mt-2">
                    <strong>Created At:</strong>{" "}
                    {booking.createdAt
                      ? new Date(booking.createdAt).toLocaleString()
                      : "—"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Expert Dialog */}
      {selectedExpert && (
        <DialogBox
          expert={selectedExpert}
          onClose={() => setSelectedExpert(null)}
          onApprove={approveExpert}
          onDisapprove={disapproveExpert}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
