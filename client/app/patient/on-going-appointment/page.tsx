"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { axiosFetchPatient } from '@/lib/axiosConfig';
import Link  from 'next/link';

export default function OngoingAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const token:any = localStorage.getItem('token');
      axiosFetchPatient(token).get('/get-patient-appointments')
        .then((response) => {
          console.log(response.data);
          const data = response.data;
          setAppointments(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
          console.log(error);
        });
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Ongoing Appointments</h1>
      {appointments.length === 0 ? (
        <p className="text-gray-600">No ongoing appointments found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {appointments.map((appointment:any) => (
            <div key={appointment._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                Doctor: {appointment.appointedDoctorId || 'Not Assigned'}
              </h2>
              <p className="text-gray-800 mb-3">{appointment.problem}</p>
              <div className="flex items-center mb-2 text-gray-600">
                <Calendar className="mr-2 h-5 w-5" />
                <span>{new Date(appointment.time).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center mb-4 text-gray-600">
                <Clock className="mr-2 h-5 w-5" />
                <span>{new Date(appointment.time).toLocaleTimeString()}</span>
              </div>
              <div className='flex flex-row justify-between'>
              <div className={`bg-${appointment.progress === 'ongoing' ? 'green' : 'yellow'}-100 text-${appointment.progress === 'ongoing' ? 'green' : 'yellow'}-800 px-3 py-1 rounded-full text-sm font-medium inline-block flex flex-row`}>
                {appointment.progress}
              </div>
              <Link className='bg-white ' href={"/chat/"+appointment._id}>Chat</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
