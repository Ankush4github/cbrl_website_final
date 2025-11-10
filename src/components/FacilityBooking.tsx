'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import jsPDF from 'jspdf';

interface BookingFormData {
  name: string;
  email: string;
  mobileNumber: string;
  departmentName: string;
  supervisorName: string;
  facility: string;
  date: Date | null;
  startTime: string;
  duration: string;
  purpose: string;
}

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', 
  '14:00', '15:00', '16:00', '17:00'
];

const durationOptions = [
  '1 hour', '2 hours', '3 hours', '4 hours', 'Full day'
];

const facilities = [
  'Waters Mass Spectrometry - Xevo G3 QTof',
  'Agilent HPLC',
  'Malvern Zetasizer (Nano Series)',
  'Agilent FTIR Imaging',
  'Agilent LDIR Imaging'
];

// Add custom CSS for dark mode DatePicker
const darkModeDatePickerStyles = `
  .dark .react-datepicker {
    background-color: #1f2937;
    border-color: #374151;
  }
  .dark .react-datepicker__header {
    background-color: #111827;
    border-bottom-color: #374151;
  }
  .dark .react-datepicker__current-month,
  .dark .react-datepicker__day-name,
  .dark .react-datepicker__day {
    color: #e5e7eb;
  }
  .dark .react-datepicker__day:hover {
    background-color: #374151;
  }
  .dark .react-datepicker__day--selected {
    background-color: #2563eb;
    color: white;
  }
  .dark .react-datepicker__day--disabled {
    color: #6b7280;
  }
  .dark .react-datepicker__navigation-icon::before {
    border-color: #e5e7eb;
  }
  .dark .react-datepicker__today-button {
    background-color: #374151;
    border-top-color: #4b5563;
    color: #e5e7eb;
  }
`;

export default function FacilityBooking() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    mobileNumber: '',
    departmentName: '',
    supervisorName: '',
    facility: '',
    date: null,
    startTime: '',
    duration: '',
    purpose: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  const generateBookingReference = () => {
    const dateStr = format(new Date(), 'yyyyMMdd');
    const randomStr = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `CBRL-${dateStr}-${randomStr}`;
  };

  const generatePDF = (bookingRef: string) => {
    const doc = new jsPDF();
    
    // Add CBRL header
    doc.setFontSize(22);
    doc.setTextColor(0, 51, 102); // Dark blue color
    doc.text('CBRL Facility Booking Receipt', 105, 20, { align: 'center' });
    
    // Add booking details
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    const details: [string, string][] = [
      ['Booking Reference:', bookingRef],
      ['Name:', formData.name],
      ['Email:', formData.email],
      ['Mobile Number:', formData.mobileNumber || '-'],
      ['Department:', formData.departmentName || '-'],
      ['Supervisor:', formData.supervisorName || '-'],
      ['Facility:', formData.facility],
      ['Date:', formData.date ? format(formData.date, 'dd/MM/yyyy') : ''],
      ['Time:', formData.startTime],
      ['Duration:', formData.duration],
      ['Purpose:', formData.purpose]
    ];

    let yPos = 40;
    details.forEach(([label, value]) => {
      doc.setFont('helvetica', 'bold');
      doc.text(label, 20, yPos);
      doc.setFont('helvetica', 'normal');
      doc.text(value, 70, yPos);
      yPos += 10;
    });

    // Add footer
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    doc.text('Clinical Biomarkers Research Laboratory (CBRL)', 105, 270, { align: 'center' });
    doc.text('Please keep this receipt for your records', 105, 275, { align: 'center' });

    // Save the PDF
    doc.save(`CBRL_Booking_${bookingRef}.pdf`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBookingRef = generateBookingReference();
    setBookingReference(newBookingRef);
    setIsSubmitted(true);
    generatePDF(newBookingRef);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData(prev => ({ ...prev, date }));
  };

  if (isSubmitted) {
    return (
      <>
        <style>{darkModeDatePickerStyles}</style>
        <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl shadow-sm dark:shadow-gray-800 border border-green-100 dark:border-green-900/30">
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Your booking reference number is: <span className="font-bold text-gray-900 dark:text-white bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">{bookingReference}</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            A PDF receipt has been generated and downloaded to your device.
            Please keep this reference number for your records.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                mobileNumber: '',
                departmentName: '',
                supervisorName: '',
                facility: '',
                date: null,
                startTime: '',
                duration: '',
                purpose: ''
              });
            }}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 dark:hover:bg-primary/80 transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/20 active:transform active:scale-95"
          >
            Make Another Booking
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{darkModeDatePickerStyles}</style>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm dark:shadow-gray-900 transition-colors duration-300 border border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-primary dark:text-primary/90 mb-6">Book a Facility</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-primary/40 dark:placeholder-gray-400 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 focus:shadow-lg dark:focus:shadow-primary/10"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-primary/40 dark:placeholder-gray-400 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 focus:shadow-lg dark:focus:shadow-primary/10"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="mobileNumber">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                required
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-primary/40 dark:placeholder-gray-400 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 focus:shadow-lg dark:focus:shadow-primary/10"
                placeholder="Enter your mobile number"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="departmentName">
                Department Name
              </label>
              <input
                type="text"
                id="departmentName"
                name="departmentName"
                required
                value={formData.departmentName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-primary/40 dark:placeholder-gray-400 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 focus:shadow-lg dark:focus:shadow-primary/10"
                placeholder="Enter your department name"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="supervisorName">
                Supervisor Name
              </label>
              <input
                type="text"
                id="supervisorName"
                name="supervisorName"
                required
                value={formData.supervisorName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-primary/40 dark:placeholder-gray-400 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 focus:shadow-lg dark:focus:shadow-primary/10"
                placeholder="Enter your supervisor's name"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="facility">
              Select Facility
            </label>
            <select
              id="facility"
              name="facility"
              required
              value={formData.facility}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-primary/40 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 focus:shadow-lg dark:focus:shadow-primary/10"
            >
              <option value="">Select a facility...</option>
              {facilities.map(facility => (
                <option key={facility} value={facility}>
                  {facility}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="date">
                Date
              </label>
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-primary/40 dark:placeholder-gray-400 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 focus:shadow-lg dark:focus:shadow-primary/10"
                placeholderText="Select date..."
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="startTime">
                Start Time
              </label>
              <select
                id="startTime"
                name="startTime"
                required
                value={formData.startTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-primary/40 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 focus:shadow-lg dark:focus:shadow-primary/10"
              >
                <option value="">Select time...</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="duration">
                Duration
              </label>
              <select
                id="duration"
                name="duration"
                required
                value={formData.duration}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-primary/40 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 focus:shadow-lg dark:focus:shadow-primary/10"
              >
                <option value="">Select duration...</option>
                {durationOptions.map(duration => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="purpose">
              Purpose of Use
            </label>
            <textarea
              id="purpose"
              name="purpose"
              required
              value={formData.purpose}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-primary/40 dark:placeholder-gray-400 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 focus:shadow-lg dark:focus:shadow-primary/10 resize-none"
              placeholder="Please describe the purpose of your facility booking..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 dark:hover:bg-primary/80 transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/20 active:transform active:scale-95 font-semibold"
          >
            Book Facility
          </button>
        </form>
      </div>
    </>
  );
} 