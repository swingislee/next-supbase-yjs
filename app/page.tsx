// This ensures the file is used within the client-side only context
"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function PromptPage() {
    const [copySuccess, setCopySuccess] = useState('');

    const sqlCode = `CREATE TABLE test_table (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content TEXT
);
INSERT INTO test_table (id, content) VALUES ('123e4567-e89b-12d3-a456-426614174000', NULL);`;

    function copyToClipboard() {
      navigator.clipboard.writeText(sqlCode)
          .then(() => setCopySuccess('Copied!'))
          .catch(err => setCopySuccess('Failed to copy!'));
    }

    return (
        <div className="max-w-4xl mx-auto p-10">
            <h1 className="text-2xl font-bold">Thanks for your help</h1>
            <p className="mt-4">Please follow the instructions below to set up your database and environment:</p>
            <ol className="list-decimal list-inside">
                <li>Log in to your <strong>Supabase</strong> account.</li>
                <li>Navigate to your project dashboard in Supabase.</li>
                <li>Find the <strong>Connect</strong> button in the upper right corner, click it and then select the <strong>App Frameworks</strong> tab.</li>
                <Image src="/connect.png" width={400} height={200} alt="connect"/>
                <Image src="/env.local.png" width={400} height={200} alt="connect"/>
                <li>Copy the contents provided under <code>.env.local</code> and add them to your local <code>.env.local</code> file in your project.</li>
                <li>Execute the following SQL commands to set up your database:</li>
                <div className="relative p-4 mt-2 bg-gray-400 rounded-md">
                    <pre className="text-sm text-slate-600 font-mono">{sqlCode}</pre>
                    <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 text-white bg-slate-500 rounded cursor-pointer hover:bg-slate-600">
                        Copy
                    </button>
                    {copySuccess && <span className="absolute bottom-2 right-2 text-sm text-white">{copySuccess}</span>}
                </div>
            </ol>
            <p className="mt-4">After completing these steps, you can proceed to the test environment.</p>
            <a href="/test" target="_blank" className="inline-block mt-5 px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600">
                Go to Test Page
            </a>
        </div>
    );
}
