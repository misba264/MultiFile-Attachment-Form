'use client';

import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import H6 from '@/components/UI/Headings/H6';
import FormWrapper from '@/components/UI/Wrappers/FormLayout';
import { AttachmentFormInfoSchema, AttachmentFormInfoInitialValues } from './validations/merchant/onBoarding/attachmentInfo';
import Button from '@/components/UI/Button/PrimaryButton';
import FileInput from '@/components/UI/Inputs/FileInput';

export default function Home() {
  const [selectedFiles, setSelectedFiles] = useState<Array<File | null>>(
    Array(5).fill(null),
  );
 

  const formData = new FormData();

  const attachmentsData = [
    {
      label: 'Account Maintainance Certificate',
      file: selectedFiles[0],
      name: 'accountMaintainanceCertificate',
    },
    {
      label: 'Your External Bank',
      file: selectedFiles[1],
      name: 'externalBank',
    },
    {
      label: ' Live Picture or Digital Photo',
      file: selectedFiles[2],
      name: 'livePicture',
    },
    {
      label: 'CNIC Front',
      file: selectedFiles[3],
      name: 'cnicFront',
    },
    {
      label: 'CNIC Back',
      file: selectedFiles[4],
      name: 'cnicBack',
    },
  ];

  const onSubmit = async (
    // values: AttachmentFormInfo,
    values: any,
    { setSubmitting }: any,
  ) => {
    const arrayValues = [values];
    console.log('arrayyyyyvalues', arrayValues);
  
    try {
      formData.append('files', arrayValues[0]?.accountMaintainanceCertificate);
      formData.append('files', arrayValues[0]?.externalBank);
      formData.append('files', arrayValues[0]?.livePicture);
      formData.append('files', arrayValues[0]?.cnicFront);
      formData.append('files', arrayValues[0]?.cnicBack);

      // Send Form Data In Api Call
      // const response: any = await 'https://xyz'.post(`merchant/upload`, formData);

      // if (response.data.responseCode === '009') {
      //   console.log('ATTACHMENT SUCCESS');
      // } else {
      //   console.log('ATTACHMENT fAILURE');
      // }
    } catch (e) {
      console.log(e, 'Error in submitting Attachment Form');
    }
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={AttachmentFormInfoInitialValues}
        validationSchema={AttachmentFormInfoSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <div className="flex flex-col pb-[120px]">
            <Form className="flex flex-col gap-5">
              <div className="hidden px-[24px] pt-[32px] text-sm font-semibold leading-5 text-secondary-600 sm:md-max:block">
                {`ATTACHMENT INFORMATION`}
              </div>
              <div className="flex flex-col gap-9">
                <div className="flex flex-col gap-6">
                  <FormWrapper>
                    <H6>
                      Upload Documents{' '}
                      <span className="font-normal leading-tight text-secondary-500">
                        (What would you like to integrate)
                      </span>
                    </H6>
                    {attachmentsData.map((item, index) => {
                      return (
                        <FileInput
                          key={index}
                          selectedFiles={selectedFiles}
                          setSelectedFiles={setSelectedFiles}
                          index={index}
                          formik={formik}
                          item={item}
                        />
                      );
                    })}
                  </FormWrapper>
                </div>
                <div className="sm:md-max:[24px] flex w-full items-center justify-end gap-9 px-[150px] sm:md-max:flex-col-reverse sm:md-max:gap-4">
                  <Button
                    label={`Save & Continue Later`}
                    type="button"
                    className={`button-secondary w-[260px] px-4 py-[19px] text-sm leading-tight transition duration-300`}
                  />
                  <Button
                    label={`Next`}
                    type="submit"
                    className={`button-primary w-[260px] px-4 py-[19px] text-sm leading-tight transition duration-300`}
                  />
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
