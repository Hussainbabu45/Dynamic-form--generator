import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormPreview from "./components/FormPreview";

const App: React.FC = () => {
  const [schema, setSchema] = useState<string>("");

  return (
    <div className="flex h-screen">
      <JSONEditor schema={schema} setSchema={setSchema} />
      <FormPreview schema={schema} />
    </div>
  );
};

export default App;
