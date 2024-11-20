import React from "react";

interface JSONEditorProps {
  schema: string;
  setSchema: (schema: string) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ schema, setSchema }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSchema(e.target.value);
  };

  return (
    <div className="w-1/2 p-4 bg-gray-100">
      <h2 className="text-lg font-bold mb-2">JSON Editor</h2>
      <textarea
        className="w-full h-full p-2 border rounded"
        value={schema}
        onChange={handleChange}
        placeholder="Enter JSON schema here"
      />
    </div>
  );
};

export default JSONEditor;
