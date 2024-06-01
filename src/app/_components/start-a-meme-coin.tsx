"use client";
import { useState } from "react";
import { FaTwitter, FaDiscord, FaGlobe } from 'react-icons/fa';

interface FormData {
    name: string;
    ticker: string;
    description: string;
    image: File | null;
    website?: string;
    twitter?: string;
    discord?: string;
  }
  
  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState<FormData>({
      name: '',
      ticker: '',
      description: '',
      image: null,
      website: '',
      twitter: '',
      discord: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files && e.target.files[0];
      setFormData({
        ...formData,
        image: file || null
      });
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Your backend processing function
      processFormData(formData);
      onClose();
    };
  
    const processFormData = (data: FormData) => {
      // Placeholder function for backend processing
      console.log("Processing form data:", data);
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 w-full max-w-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-white">Create New Coin</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="ticker">
                Ticker Name <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                type="text"
                id="ticker"
                name="ticker"
                value={formData.ticker}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="description">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="image">
                Image <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                accept="image/*"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="website">
                <div className="flex items-center">
                  <FaGlobe className="text-gray-400 mr-2" />
                  Website
                </div>
              </label>
              <input
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="twitter">
                <div className="flex items-center">
                  <FaTwitter className="text-gray-400 mr-2" />
                  Twitter
                </div>
              </label>
              <input
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                type="text"
                id="twitter"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="discord">
                <div className="flex items-center">
                  <FaDiscord className="text-gray-400 mr-2" />
                  Discord
                </div>
              </label>
              <input
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                type="text"
                id="discord"
                name="discord"
                value={formData.discord}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-red-600 text-white p-2 rounded mr-2 hover:bg-red-700"
                onClick={onClose}
              >
                Cancel
              </button>
              <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  


export const StartANewCoinButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return(
        <>
        <style jsx>{`
            @keyframes grow-shrink {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.2);
            }
            }
            .animate-grow-shrink {
            animation: grow-shrink 1s infinite;
            }
        `}</style>
        <div className="flex justify-center mb-8">
            <button className="px-2 py-1 bg-indigo-400 text-white rounded-lg animate-grow-shrink" onClick={handleOpenModal}>
            Start a New Coin
            </button>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
    );
}