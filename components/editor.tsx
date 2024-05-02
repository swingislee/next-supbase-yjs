"use client";

import { useEffect, useState } from "react";

import {
  BlockNoteView,
  useCreateBlockNote
} from "@blocknote/react";
import "@blocknote/react/style.css";

import { useYDoc } from "@/hooks/use-yDoc";

import { createClient } from "@/utils/supabase/client";
import SupabaseProvider from "@/utils/supabase/y-provider";

// CREATE TABLE test_table (
//   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//   content TEXT
// );

//INSERT INTO test_table (id, content) VALUES ('123e4567-e89b-12d3-a456-426614174000', NULL);

const Editor = () => {
  const supabase = createClient();

  const [provider, setProvider] = useState<SupabaseProvider | null>(null);
  const doc = useYDoc();
  const testId = '123e4567-e89b-12d3-a456-426614174000'

  useEffect(() => {
    const config = {
      channel: "Test-BlockNote",
      id: testId,
      tableName: "test_table", 
      columnName: "content",      
      resyncInterval: 60000, // Optional: Adjust as necessary
    };
    const supabaseProvider = new SupabaseProvider(doc, supabase, config);
    setProvider(supabaseProvider);
    return () => {
      supabaseProvider.destroy();
    };
  },[doc, supabase])

  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    collaboration: {
      provider,
      fragment: doc.getXmlFragment("document-store"),
      user: {
        name: `TEST Name`,
        color: "#ff0000",
        },
      },  
  }); 

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      editor={editor}
    />
  );
}

export default Editor;
