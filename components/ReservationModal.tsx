"use client";
import Image from "next/image";
import { useState } from "react";
import { 
  MdLocationOn, 
  MdPerson, 
  MdChildCare, 
  MdCalendarToday, 
  MdAccessTime, 
  MdPhone, 
  MdEmail, 
  MdComment 
} from 'react-icons/md';
import ConfirmationStep from './ConfirmationStep';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
    location: string;
    adults: string;
    children: string;
    date: string;
    time: string;
    phone: string;
    email: string;
    comment: string;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    location: "",
    adults: "",
    children: "",
    date: "",
    time: "",
    phone: "",
    email: "",
    comment: "",
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleConfirm = () => {
    console.log("Reservation Confirmed:", formData);
    onClose();
  };

  // Handle click outside to close modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderProgress = () => (
    <div className="px-8 py-3 border-t border-b">
      <div className="flex items-center justify-center space-x-6">
        <div className="flex items-center">
          <div style={{ 
              backgroundColor: step === 1 ? '#F9C100' : 'transparent',
              borderColor: '#F9C100',
              color: step === 1 ? 'white' : '#F9C100' 
            }}
            className="border-2 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs"
          >
            1
          </div>
          <span className={`ml-3 font-semibold text-sm ${step === 1 ? 'text-gray-800' : 'text-gray-500'}`}>Reservation</span>
        </div>
        <span className="text-2xl text-gray-300">→</span>
        <div className="flex items-center">
          <div style={{ 
              backgroundColor: step === 2 ? '#F9C100' : 'transparent',
              borderColor: '#F9C100',
              color: step === 2 ? 'white' : '#F9C100' 
            }}
            className="border-2 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs"
          >
            2
          </div>
          <span className={`ml-3 font-semibold text-sm ${step === 2 ? 'text-gray-800' : 'text-gray-500'}`}>Confirmation</span>
        </div>
      </div>
    </div>
  );

  const renderReservationForm = () => (
    <div className="px-8 py-6">
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        {renderFormField('Location', formData.location, true, false, 'location')}
        <div className="grid grid-cols-2 gap-x-8">
            {renderFormField('Adults', '', true, true, 'adults', 'number')}
            {renderFormField('Children', '', false, true, 'children', 'number')}
        </div>
        <div className="grid grid-cols-2 gap-x-8">
            {renderFormField('Date', '', true, true, 'date', 'date')}
            {renderFormField('Time', '', true, true, 'time', 'time')}
        </div>
        <div className="grid grid-cols-2 gap-x-8">
            {renderFormField('Phone Number', '', true, true, 'phone', 'tel')}
            {renderFormField('Email', '', true, true, 'email', 'email')}
        </div>
        {renderFormField('Comment', '', false, true, 'comment', 'textarea')}
        
        <button type="button" onClick={handleNext} style={{ backgroundColor: '#F9C100' }} className="w-full text-gray-900 font-bold py-3 px-6 rounded-full text-lg hover:opacity-90 transition-opacity duration-300 mt-4">
          Next
        </button>
      </form>
    </div>
  );

  const icons: { [key: string]: React.ReactNode } = {
    Location: <MdLocationOn />,
    Adults: <MdPerson />,
    Children: <MdChildCare />,
    Date: <MdCalendarToday />,
    Time: <MdAccessTime />,
    'Phone Number': <MdPhone />,
    Email: <MdEmail />,
    Comment: <MdComment />
  };

  const renderFormField = (label: string, value: string, required: boolean, isInput: boolean, name: keyof FormData, type: string = 'text') => (
    <div>
      <label className="flex items-center text-gray-600 font-medium text-sm mb-1">
        <span style={{ color: '#F9C100' }} className="w-5 h-5 mr-2">
          {icons[label]}
        </span>
        {label}: 
        {!isInput && <span className="text-gray-400 ml-1">{value}</span>}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {isInput ? (
        type === 'textarea' ? (
            <textarea name={name} value={formData[name]} onChange={handleInputChange} rows={1} style={{ borderColor: '#F9C100' }} className="w-full bg-transparent border-b-2 py-1 focus:outline-none resize-none text-sm text-gray-900"></textarea>
        ) : (
            <input name={name} type={type} value={formData[name]} onChange={handleInputChange} style={{ borderColor: '#F9C100' }} className="w-full bg-transparent border-b-2 py-1 focus:outline-none text-sm text-gray-900" min={type === 'number' ? (name === 'adults' ? 1 : 0) : undefined} />
        )
      ) : <div style={{ borderColor: '#F9C100' }} className="border-b-2 pb-1"></div>}
    </div>
  );

  return (
    <div 
      className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[95vh] overflow-y-auto border border-gray-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="relative h-40 rounded-t-lg overflow-hidden">
          <Image src="/restaurant3.jpg" alt="Restaurant" fill className="object-cover" />
        </div>

        <div className="px-8 py-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">
                <span style={{ color: '#F9C100' }}>Chaom Chau</span> <span className="text-black">Restaurant</span>
            </h2>
            <select className="border-none bg-transparent text-gray-700 focus:outline-none text-sm">
                <option value="en">English</option>
            </select>
        </div>

        {renderProgress()}

        {step === 1 ? renderReservationForm() : (
          <ConfirmationStep 
            formData={formData} 
            onConfirm={handleConfirm} 
          />
        )}

      </div>
    </div>
  );
}