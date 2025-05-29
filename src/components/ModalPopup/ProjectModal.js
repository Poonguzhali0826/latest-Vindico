import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

export default function ProjectModal({ open, onOpenChange,title }) {
  if (!open) return null;
  const steps = [
    { step: '1', label: 'MEP Documents' },
    { step: '2', label: 'Architecture Documents' },
    { step: '3', label: 'Design Guideline Documents' }
  ];

  // Sample: currentStep from state (you can manage it based on form validation later)
  const [currentStep, setCurrentStep] = useState(0);

  const getStepStatus = (index) => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'active';
    return 'upcoming';
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Modal Container */}
      <div className="w-full max-w-3xl h-[95vh] sm:h-auto overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(0,174,217,0.5)_0.5%,#0D1117_30%)] text-white rounded-lg shadow-lg border border-[#1B1F27] p-6 relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-2 gap-4">
          <h2 className="text-xl font-normal">{title}</h2>
          <X className="h-6 w-6 cursor-pointer" onClick={() => {onOpenChange(false)}} />
        </div>
        <p className="text-gray-400 text-sm mb-4">Figma ipsum component variant main layer. Text.</p>

        {/* Steps */}
        <div className="flex space-x-6 mb-6">
          {steps.map(({ step, label }, index) => {
            const status = getStepStatus(index);
            const isActive = status === 'active';
            const isCompleted = status === 'completed';
            const isUpcoming = status === 'upcoming';

            return (
              <div className="flex items-center space-x-2" key={label}>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium
            ${isActive ? 'border border-vindico-blue text-vindico-blue' : ''}
            ${isCompleted ? 'bg-vindico-blue text-white' : ''}
            ${isUpcoming ? 'border border-gray-500 text-gray-500' : ''}`}
                >
                  {step}
                </div>
                <span
                  className={`text-sm font-medium 
            ${isActive || isCompleted ? 'text-vindico-blue' : 'text-gray-500'}`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Form Grid */}
        {currentStep === 0 && (
          // MEP Documents Step
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-sm">
            <div>
              <label className="text-xs text-gray-400">Title</label>
              <input className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 mt-1" />
            </div>
            <div>
              <label className="text-xs text-gray-400">Design Type</label>
              <select className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 mt-1">
                <option hidden></option>
                <option className="bg-gray-900 text-white">Residential</option>
                <option className="bg-gray-900 text-white">Commercial</option>
                <option className="bg-gray-900 text-white">Industrial</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400">Country</label>
              <select className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 mt-1">
                <option hidden></option>
                <option className="bg-gray-900 text-white">United States</option>
                <option className="bg-gray-900 text-white">United Kingdom</option>
                <option className="bg-gray-900 text-white">Canada</option>
                <option className="bg-gray-900 text-white">Australia</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400">State</label>
              <select className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 mt-1">
                <option hidden></option>
                <option className="bg-gray-900 text-white">New York</option>
                <option className="bg-gray-900 text-white">California</option>
                <option className="bg-gray-900 text-white">Texas</option>
                <option className="bg-gray-900 text-white">Florida</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400">City</label>
              <select className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 mt-1">
                <option hidden></option>
                <option className="bg-gray-900 text-white">New York City</option>
                <option className="bg-gray-900 text-white">Los Angeles</option>
                <option className="bg-gray-900 text-white">Chicago</option>
                <option className="bg-gray-900 text-white">Miami</option>
              </select>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          // Architecture Documents Step — hide Design Type
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
            <div>
              <label className="text-xs text-gray-400">Title</label>
              <input className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 mt-1" />
            </div>
            <div>
              <label className="text-xs text-gray-400">Country</label>
              <select className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 mt-1">
                <option hidden></option>
                <option className="bg-gray-900 text-white">United States</option>
                <option className="bg-gray-900 text-white">United Kingdom</option>
                <option className="bg-gray-900 text-white">Canada</option>
                <option className="bg-gray-900 text-white">Australia</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400">State</label>
              <select className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 mt-1">
                <option hidden></option>
                <option className="bg-gray-900 text-white">New York</option>
                <option className="bg-gray-900 text-white">California</option>
                <option className="bg-gray-900 text-white">Texas</option>
                <option className="bg-gray-900 text-white">Florida</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400">City</label>
              <select className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 mt-1">
                <option hidden></option>
                <option className="bg-gray-900 text-white">New York City</option>
                <option className="bg-gray-900 text-white">Los Angeles</option>
                <option className="bg-gray-900 text-white">Chicago</option>
                <option className="bg-gray-900 text-white">Miami</option>
              </select>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          // Design Guideline Documents Step — only Brand Name
          <div className="text-sm mt-4">
            <label className="text-xs text-gray-400">Brand Name</label>
            <input className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 mt-1" />
          </div>
        )}

        {/* Description */}
        {currentStep !== 2 && (
          <div className="mt-6">
            <label className="text-xs text-gray-400">Description</label>
            <textarea
              className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 mt-1"
              rows="2" // reduced height
            ></textarea>
          </div>
        )}

        {/* File Upload */}
        <div className="mt-6">
          <label className="text-xs text-gray-400">Attach Files</label>
          <div className="border-2 border-dashed border-gray-700 bg-[#25282e] rounded-md p-4 flex flex-col items-center justify-center space-y-2">
            <img src="/assets/images/upload.png" alt="Upload" className="w-6 h-6 mb-2" />
            <p className="text-sm text-gray-400 text-center">Click to upload and drop a Project</p>
            <p className="text-xs text-gray-500 text-center">Max. File size: 100MB</p>
            <button className="mt-3 bg-vindico-blue text-white text-xs px-4 py-1.5 rounded flex items-center gap-2">
              <Search className="h-4 w-4" /> Browse File
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-between sm:flex-row gap-4 sm:gap-0 sm:items-center sm:sticky sm:bottom-0 sm:bg-[#0D1117] sm:py-4">
          <button
            className="text-xs px-4 py-2 w-32 rounded border border-gray-700 text-white hover:bg-gray-800"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </button>
          <button
            className="text-xs px-4 py-2 w-32 rounded bg-vindico-blue text-white"
            onClick={() => {
              if (currentStep < 2) {
                setCurrentStep((prev) => prev + 1);
              } else {
                // Handle form submission
              }
            }}
          >
            {currentStep === 2 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
