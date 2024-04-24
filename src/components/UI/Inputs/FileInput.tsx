import type { FormikProps } from 'formik';
import Image from 'next/image';
import React from 'react';

import AttachmentsIcon from '@/assets/icons/Attachments.svg';
import CrossIcon from '@/assets/icons/Cross.svg';

import B3 from '../Body/B3';
import FormikErrorMessage from '../Formik/ErrorHandling/FormikErrorMessage';
import H6 from '../Headings/H6';

export interface IFileInput {
  index: number;
  item: {
    label: string;
    file: File | null | undefined;
    name: string;
  };
  selectedFiles: Array<File | null>;
  formik?: FormikProps<any>;
  setSelectedFiles: React.Dispatch<React.SetStateAction<(File | null)[]>>;
}

function FileInput({
  index,
  item,
  selectedFiles,
  setSelectedFiles,
  formik,
}: IFileInput) {
  const handleUpload = async () => {
    if (selectedFiles) {
      console.log('Uploading file...');
      // const formData = new FormData();
      // formData.append("selectedFiles", selectedFiles);
    }
  };

  const handleFileChange = (index: number, e: any) => {
    const file = e.target.files?.[0];
    console.log('FILEEEEEE form input file:', file);

    if (file) {
      formik?.setFieldValue(item.name, file);
      setSelectedFiles((prevFiles: any) => {
        const newFiles = [...prevFiles];
        newFiles[index] = file;
        return newFiles;
      });
    } else {
      formik?.setFieldValue(item.name, null);
      setSelectedFiles((prevFiles: any) => {
        const newFiles = [...prevFiles];
        newFiles[index] = null;
        return newFiles;
      });
    }
  };
  return (
    <div className="flex flex-col gap-[6px]">
      <div
        className="flex h-[60px] items-center justify-between rounded-lg border-[1px] border-border-light bg-screen-white px-5 py-[10px]"
        key={index}
      >
        <div>
          <B3>{item.label}</B3>
          <H6 medium={true}>{item.file ? item.file.name : ''}</H6>
        </div>
        <div className="flex align-middle">
          {item.file ? (
            <Image
              src={CrossIcon}
              alt="cross-Icon"
              onClick={(e) => handleFileChange(index, e)}
            />
          ) : (
            <label>
              <input
                className="hidden w-full bg-primary-300 text-warning-300"
                type="file"
                name={item.name}
                onChange={(e: any) => handleFileChange(index, e)}
              />
              <Image
                src={AttachmentsIcon}
                alt="attachments-Icon"
                onClick={handleUpload}
              />
            </label>
          )}
        </div>
      </div>
      <FormikErrorMessage name={item.name} />
    </div>
  );
}

export default FileInput;
