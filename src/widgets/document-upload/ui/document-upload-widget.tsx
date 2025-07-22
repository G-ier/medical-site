// 'use client'
import { useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';
import { ContinueButton, GradientText } from '@/shared/ui/atoms';
import { CheckCircleIcon, ExclamationCircleIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import Image from 'next/image';

interface DocumentUploadWidgetProps {
    className?: string;
    title: string;
    question: string;
}

export function DocumentUploadWidget({ className, title, question }: DocumentUploadWidgetProps) {
    const [fileString, setFileString] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { save: saveFormData } = useFormData();
    const { next } = useOnboarding();

    // File preview logic
    const isImage = fileString.startsWith('data:image');
    const isPDF = fileString.startsWith('data:application/pdf');

    // Convert file to base64 data URL with compression
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        setResult(null);
        setError(null);
        if (f) {
            // Check file size (limit to 10MB)
            if (f.size > 10 * 1024 * 1024) {
                setError('File size must be less than 10MB');
                return;
            }

            if (f.type.startsWith('image/')) {
                // Compress image
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const img = new window.Image();
                
                img.onload = () => {
                    const MAX_WIDTH = 800;
                    const MAX_HEIGHT = 600;
                    let { width, height } = img;
                    
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height = (height * MAX_WIDTH) / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width = (width * MAX_HEIGHT) / height;
                            height = MAX_HEIGHT;
                        }
                    }
                    
                    canvas.width = width;
                    canvas.height = height;
                    ctx?.drawImage(img, 0, 0, width, height);
                    
                    // Convert to base64 with quality compression
                    const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
                    setFileString(compressedDataUrl);
                };
                
                img.onerror = () => {
                    setError('Failed to process image');
                };
                
                const reader = new FileReader();
                reader.onload = (ev) => {
                    img.src = ev.target?.result as string;
                };
                reader.readAsDataURL(f);
            } else {
                // For non-image files, use as is
                const reader = new FileReader();
                reader.onload = (ev) => {
                    setFileString(ev.target?.result as string);
                };
                reader.onerror = () => {
                    setError('Failed to read file');
                };
                reader.readAsDataURL(f);
            }
        } else {
            setFileString('');
        }
    };

    const handleSave = async () => {
        setLoading(true);
        setResult(null);
        setError(null);
        try {
            const response = await saveFormData(
                FormType.OHL_DOCUMENT_UPLOAD,
                {
                    file_string: fileString,
                    display_name: 'Current GLP-1 medication pen or vial',
                    include_in_charting: true,
                }
            );
            if (response.success) {
                setResult('Document saved successfully.');
                next();
            } else {
                setError(response.error || 'Save failed');
            }
        } catch (e: any) {
            setError(e.message || 'Unknown error');
        } finally {
            setLoading(false);
        }
    };

    const handleSkip = () => {
        next();
    };

    return (
        <QAPageTemplate
            title={<GradientText gradient="pink-yellow">{title}</GradientText>}
            question={question}
            questionClassName="text-[24px] font-light"
            className={className}
            actions={
                <div className="flex gap-3">
                    <button
                        onClick={handleSkip}
                        disabled={loading}
                        className="px-6 py-3 text-gray-600 bg-gray-100 rounded-full font-medium hover:bg-gray-200 transition-colors disabled:opacity-50"
                    >
                        Skip
                    </button>
                    <ContinueButton
                        onClick={handleSave}
                        disabled={!fileString || loading}
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                </svg>
                                Saving...
                            </span>
                        ) : (
                            'Save'
                        )}
                    </ContinueButton>
                </div>
            }
            maxWidth="md"
        >
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6">
                <div>
                    <h2 className="text-lg font-semibold mb-2">Upload a picture of your current GLP-1 medication pen or vial</h2>
                    <input
                        type="file"
                        accept="image/*,application/pdf"
                        onChange={handleFileChange}
                        className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>
                {fileString && (
                    <div className="flex flex-col items-center space-y-2">
                        <span className="text-gray-500 text-xs">Preview:</span>
                        {isImage && (
                            <Image
                                src={fileString}
                                alt="Preview"
                                width={300}
                                height={200}
                                className="max-h-48 rounded shadow border object-contain"
                            />
                        )}
                        {isPDF && (
                            <div className="flex flex-col items-center">
                                <DocumentIcon className="h-16 w-16 text-blue-400 mb-2" />
                                <span className="text-xs text-gray-500">PDF file selected</span>
                            </div>
                        )}
                        {!isImage && !isPDF && (
                            <span className="text-xs text-gray-400">File selected</span>
                        )}
                    </div>
                )}
                {error && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded px-3 py-2">
                        <ExclamationCircleIcon className="h-5 w-5" />
                        {error}
                    </div>
                )}
                {result && (
                    <div className="flex items-center gap-2 text-green-600 text-sm bg-green-50 rounded px-3 py-2">
                        <CheckCircleIcon className="h-5 w-5" />
                        {result}
                    </div>
                )}
            </div>
        </QAPageTemplate>
    );
} 