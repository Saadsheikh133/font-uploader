import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";
const FontUploader = () => {

    const [uploadedFonts, setUploadedFonts] = useState([]);
    const [error, setError] = useState('');

    const handleSelectOrDropFont = (fileTypes) => {
        const ttfFiles = fileTypes.filter(file => file.name.endsWith('.ttf'));

        if (ttfFiles.length === 0) {
            setError("Please choose a valid TTF font file.");
        } else {
            setUploadedFonts(ttfFiles);
            setError('');

            const formData = new FormData();
            ttfFiles.forEach(file => {
                formData.append('fonts[]', file);
            });
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleSelectOrDropFont,
        accept: ".ttf",
    });
    console.log(uploadedFonts)

    return (
        <div>
            <div {...getRootProps()} className="w-3/4 mt-20 h-52 mx-auto py-28 rounded-lg border-dashed border-2 bg-slate-50 font-serif flex flex-col items-center cursor-pointer">
                <input {...getInputProps()} />
                <BsCloudUpload className="w-7 h-7 lg:w-[35px] lg:h-[35px] text-gray-400"></BsCloudUpload>
                <p className="text-gray-500 text-base"><span className="font-semibold text-gray-600">Click to upload</span> or drag and drop</p>
                <p className="text-gray-500 text-sm">Only TTF files are supported</p>
                <p className="text-md font-normal text-red-500 animate-pulse">{error}</p>
            </div>
        </div>
    );
};

export default FontUploader;