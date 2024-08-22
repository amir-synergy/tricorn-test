// import React, { useEffect, useState } from 'react';
// import { FiUpload } from "react-icons/fi";
// import {GetProp, Image, message, Upload, UploadProps} from 'antd';
// import axios from "axios";
//
// const { Dragger } = Upload;
//
// type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
//
// interface FileUploaderProps {
//     assessmentId: string,
//     step: string,
//     name: string,
//     setError: (message: string) => void,
//     setIsLoading: (loading: boolean) => void,
// }
//
// const FileUploader = ({
//     assessmentId, step, name, setError, setIsLoading
// }: FileUploaderProps) => {
//     const [previewOpen, setPreviewOpen] = useState(false);
//     const [previewImage, setPreviewImage] = useState('');
//     const [fileList, setFileList] = useState<UploadProps['fileList']>([]);
//
//     useEffect(() => {
//         const fetchDefaultImages = async () => {
//             try {
//                 setIsLoading(true);
//                 const response = await axios.get(`/api/dashboard/imageResponses/${assessmentId}/${step}/${name}`);
//                 setFileList(response.data);
//             } catch (error) {
//                 // setError('Failed to fetch data');
//                 // console.error('Error fetching default images:', error);
//                 message.error('Failed to load default images');
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//
//         fetchDefaultImages().catch(() => setError('Failed to fetch default images'));
//     }, [assessmentId, step, name, setIsLoading, setError]);
//
//     const getBase64 = (file: FileType): Promise<string> =>
//         new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = () => resolve(reader.result as string);
//             reader.onerror = (error) => reject(error);
//         });
//
//     const props: UploadProps = {
//         name: 'file',
//         multiple: true,
//         action: `/api/dashboard/imageResponses/${assessmentId}/${step}`,
//         method: 'POST',
//         listType: 'picture',
//         accept: 'image/*',
//         openFileDialogOnClick: true,
//         fileList: fileList,
//         showUploadList: true,
//         data: { name: name },
//
//         onPreview: async (file) => {
//             if (!file.url && !file.preview) {
//                 file.preview = await getBase64(file.originFileObj as FileType);
//             }
//
//             setPreviewImage(file.url || (file.preview as string));
//             setPreviewOpen(true);
//         },
//
//         onChange(info) {
//             const { status } = info.file;
//             let newFileList = [...info.fileList];
//
//             if (status === 'done') {
//                 const uploadedFile = info.file.response.files.find((file: any) => file.fileName === info.file.name);
//                 if (uploadedFile) {
//                     info.file.uid = uploadedFile.id.toString();
//                 }
//                 message.success(`${info.file.name} file uploaded successfully.`).then(r => r);
//             } else if (status === 'error') {
//                 newFileList = newFileList.filter(file => file.uid !== info.file.uid);
//                 message.error(`${info.file.name} file upload failed.`).then(r => r);
//             }
//
//             setFileList(newFileList);
//         },
//
//         onRemove(file) {
//             return new Promise((resolve, reject) => {
//                 const removeFile = async () => {
//                     try {
//                         setIsLoading(true);
//                         await axios.delete(`/api/dashboard/imageResponses/${assessmentId}/${step}`, {
//                             data: { uid: file.uid }
//                         });
//                         setFileList(prevFileList => prevFileList!.filter(item => item.uid !== file.uid));
//                         resolve(true);
//                         message.success(file.name + ' removed successfully');
//                     } catch (error) {
//                         message.error('Failed to remove ' + file.name);
//                         resolve(false);
//                     } finally {
//                         setIsLoading(false);
//                     }
//                 };
//
//                 removeFile().catch(() => reject(false));
//             });
//         },
//
//         onDrop(e) {
//             console.log('Dropped files', e.dataTransfer.files);
//         },
//     };
//
//     return (
//         <div className='my-3'>
//             <Dragger {...props}>
//                 <p className="ant-upload-drag-icon flex justify-center">
//                     <FiUpload size={23} />
//                 </p>
//                 <p className="ant-upload-text">
//                     <span>Choose File</span>
//                     <span className='hidden sm:inline-block ps-1'>or Drag Here</span>
//                 </p>
//                 <p className="ant-upload-hint">
//                     Size limit: 10 MB
//                 </p>
//             </Dragger>
//
//             {previewImage && (
//                 <Image
//                     alt={'Preview'}
//                     wrapperStyle={{ display: 'none' }}
//                     preview={{
//                         visible: previewOpen,
//                         onVisibleChange: (visible) => setPreviewOpen(visible),
//                         afterOpenChange: (visible) => !visible && setPreviewImage(''),
//                     }}
//                     src={previewImage}
//                 />
//             )}
//         </div>
//     );
// }
//
// export default FileUploader;
'use client';

import React, { useEffect, useState } from 'react';
import { FiUpload } from "react-icons/fi";
import {GetProp, Image, message, Upload, UploadProps} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import axios from "axios";

const { Dragger } = Upload;

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

interface Navigator {
    msSaveOrOpenBlob?: (blob: Blob, defaultName?: string) => boolean;
}

interface FileUploaderProps {
    assessmentId: string,
    step: string,
    name: string,
    setError: (message: string) => void,
    setIsLoading: (loading: boolean) => void,
}

const FileUploader = ({
    assessmentId, step, name, setError, setIsLoading
}: FileUploaderProps) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadProps['fileList']>([]);

    useEffect(() => {
        const fetchDefaultImages = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`/api/dashboard/imageResponses/${assessmentId}/${step}/${name}`);
                setFileList(response.data);
            } catch (error) {
                // setError('Failed to fetch data');
                // console.error('Error fetching default images:', error);
                message.error('Failed to load default images');
            } finally {
                setIsLoading(false);
            }
        };

        fetchDefaultImages().catch(() => setError('Failed to fetch default images'));
    }, [assessmentId, step, name, setIsLoading, setError]);

    // const handleDownload = () => {
    //     const link = document.createElement('a');
    //     link.href = previewImage;
    //     link.download = Date.now().toString();
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

    const handleDownload = () => {
        fetch(previewImage)
            .then((res) => res.blob())
            .then((blob) => {
                const navigator = window.navigator as Navigator;
                if (navigator.msSaveOrOpenBlob) {
                    navigator.msSaveOrOpenBlob(blob);
                } else {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = Date.now().toString();
                    a.click();
                    window.URL.revokeObjectURL(url);
                }

                message.success('Image downloaded successfully');
            });
    }

    const getBase64 = (file: FileType): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: `/api/dashboard/imageResponses/${assessmentId}/${step}`,
        method: 'POST',
        listType: 'picture',
        accept: 'image/*',
        openFileDialogOnClick: true,
        fileList: fileList,
        showUploadList: true,
        data: { name: name },

        onPreview: async (file) => {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj as FileType);
            }

            setPreviewImage(file.url || (file.preview as string));
            setPreviewOpen(true);
        },

        onChange(info) {
            const { status } = info.file;
            let newFileList = [...info.fileList];

            if (status === 'done') {
                const uploadedFile = info.file.response.files.find((file: any) => file.fileName === info.file.name);
                if (uploadedFile) {
                    info.file.uid = uploadedFile.id.toString();
                }
                message.success(`${info.file.name} file uploaded successfully.`).then(r => r);
            } else if (status === 'error') {
                newFileList = newFileList.filter(file => file.uid !== info.file.uid);
                message.error(`${info.file.name} file upload failed.`).then(r => r);
            }

            setFileList(newFileList);
        },

        onRemove(file) {
            return new Promise((resolve, reject) => {
                const removeFile = async () => {
                    try {
                        setIsLoading(true);
                        await axios.delete(`/api/dashboard/imageResponses/${assessmentId}/${step}`, {
                            data: { uid: file.uid }
                        });
                        setFileList(prevFileList => prevFileList!.filter(item => item.uid !== file.uid));
                        resolve(true);
                        message.success(file.name + ' removed successfully');
                    } catch (error) {
                        message.error('Failed to remove ' + file.name);
                        resolve(false);
                    } finally {
                        setIsLoading(false);
                    }
                };

                removeFile().catch(() => reject(false));
            });
        },

        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <div className='my-3'>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon flex justify-center">
                    <FiUpload size={23} />
                </p>
                <p className="ant-upload-text">
                    <span>Choose File</span>
                    <span className='hidden sm:inline-block ps-1'>or Drag Here</span>
                </p>
                <p className="ant-upload-hint">
                    Size limit: 10 MB
                </p>
            </Dragger>

            {previewImage && (
                <Image
                    alt={'Preview'}
                    wrapperStyle={{ display: 'none' }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),

                        toolbarRender: (actions) => (
                            <>
                                {actions}
                                <button
                                    className='block mt-4 text-lg bg-[rgba(0,0,0,0.1)] w-[40px] h-[40px] text-center rounded-full'
                                    onClick={handleDownload}
                                >
                                    <DownloadOutlined />
                                </button>
                            </>
                        ),
                    }}
                    src={previewImage}
                />
            )}
        </div>
    );
}

export default FileUploader;