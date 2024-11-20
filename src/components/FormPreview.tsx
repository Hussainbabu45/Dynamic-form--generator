import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormPreviewProps {
  schema: string;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  let formSchema;
  try {
    formSchema = JSON.parse(schema);
  } catch {
    return <div className="w-1/2 p-4 bg-gray-50">Invalid JSON Schema</div>;
  }

  return (
    <div className="w-1/2 p-4 bg-gray-50">
      <h2 className="text-lg font-bold mb-2">{formSchema?.formTitle || "Form Preview"}</h2>
      <p className="mb-4">{formSchema?.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {formSchema?.fields?.map((field: any) => (
          <div key={field.id} className="flex flex-col">
            <label className="font-bold mb-1">{field.label}</label>
            {field.type === "text" || field.type === "email" ? (
              <input
                type={field.type}
                {...register(field.id, { required: field.required })}
                placeholder={field.placeholder}
                className="p-2 border rounded"
              />
            ) : null}
            {errors[field.id] && (
              <span className="text-red-500 text-sm">{field.validation?.message || "This field is required"}</span>
            )}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default FormPreview;
