
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, X, Camera } from 'lucide-react';

interface ImageUploadProps {
  label: string;
  value?: string;
  onChange: (file: File | null) => void;
  preview?: string;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  label,
  value,
  onChange,
  preview,
  className = ''
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [currentPreview, setCurrentPreview] = useState(preview || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCurrentPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      onChange(file);
    }
  };

  const removeImage = () => {
    setCurrentPreview('');
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      
      <div className="relative">
        {currentPreview ? (
          <div className="relative inline-block">
            <img
              src={currentPreview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200"
            />
            <Button
              type="button"
              variant="destructive"
              size="sm"
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
              onClick={removeImage}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ) : (
          <div
            className={`
              relative border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer
              ${dragActive 
                ? 'border-[#D4AF37] bg-[#D4AF37]/5' 
                : 'border-gray-300 hover:border-[#D4AF37]'
              }
            `}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="space-y-2">
              <div className="mx-auto h-12 w-12 text-gray-400">
                <Upload className="h-full w-full" />
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium text-[#D4AF37]">Click to upload</span>
                {' or drag and drop'}
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, JPEG, WEBP up to 5MB
              </p>
            </div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
