"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string[]) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange([...value, result.info.secure_url]);
    },
    [onChange, value]
  );
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="c9rxv16m"
      options={{
        maxFiles: 5,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
            relative 
            flex 
            flex-col 
            items-center 
            justify-center
            w-50
            h-50
            bg-gray-100 
            rounded-lg 
            cursor-pointer
            hover:opacity-70
            gap-2
            p-4
            text-neutral-600
            border-2
            border-dashed
            transition
            border-neutral-300
            "
          >
            <TbPhotoPlus size={25} />
            <div className="font-semibold text-sm">Upload</div>
            {value.length > 0 && (
              <div className="absolute inset-0 w-50 h-50">
                <Image
                  alt="Upload"
                  fill
                  style={{ objectFit: "cover" }}
                  src={value[value.length - 1]}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
