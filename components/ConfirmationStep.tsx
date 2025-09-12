"use client";
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

interface ConfirmationStepProps {
  formData: FormData;
  onConfirm: () => void;
}

export default function ConfirmationStep({ formData, onConfirm }: ConfirmationStepProps) {
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

  const renderConfirmationField = (label: string, value: string, required: boolean) => (
    <div>
      <label className="flex items-center text-gray-600 font-medium text-sm mb-1">
        <span style={{ color: '#F9C100' }} className="w-5 h-5 mr-2">
          {icons[label]}
        </span>
        {label}: 
        <span className="text-gray-900 ml-2 font-normal">{value}</span>
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div style={{ borderColor: '#F9C100' }} className="border-b-2 pb-1"></div>
    </div>
  );

  return (
    <div className="px-8 py-6">
      <div className="space-y-5">
        {renderConfirmationField('Location', formData.location, true)}
        <div className="grid grid-cols-2 gap-x-8">
          {renderConfirmationField('Adults', formData.adults, true)}
          {renderConfirmationField('Children', formData.children, false)}
        </div>
        <div className="grid grid-cols-2 gap-x-8">
          {renderConfirmationField('Date', formData.date, true)}
          {renderConfirmationField('Time', formData.time, true)}
        </div>
        <div className="grid grid-cols-2 gap-x-8">
          {renderConfirmationField('Phone Number', formData.phone, true)}
          {renderConfirmationField('Email', formData.email, true)}
        </div>
        {renderConfirmationField('Comment', formData.comment, false)}

        <button 
          type="button" 
          onClick={onConfirm} 
          style={{ backgroundColor: '#F9C100' }} 
          className="w-full text-white font-bold py-3 px-6 rounded-full text-lg hover:opacity-90 transition-opacity duration-300 mt-4"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}