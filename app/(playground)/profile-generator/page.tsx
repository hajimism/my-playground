import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Form, Preview } from "./_components";

export default function Page() {
  return (
    <div className="container">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="form">Form</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="form">
          <Form />
        </TabsContent>

        <TabsContent value="preview">
          <Preview />
        </TabsContent>
      </Tabs>
    </div>
  );
}
