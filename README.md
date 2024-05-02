# Project Setup Guide

THANKS FOR YOUR HELP! This guide will walk you through setting up your development environment and database using Supabase. Follow these steps carefully to ensure everything is set up correctly.

## Requirements

Before you begin, make sure you have the following:

- An account on [Supabase](https://supabase.com)
- Node.js installed on your local machine
- Your local development environment set up for a Next.js project

## Initial Setup

1. **Clone the Repository**  
   Start by cloning this repository to your local machine using:
   ```bash
   git clone https://github.com/swingislee/next-supbase-yjs.git
   ```

2. **Install Dependencies**
    Navigate to the project directory and install the required dependencies:
    ```bash
    npm install
    ```

3. **Configure Environment Variables**
  * Navigate to your project dashboard in Supabase.
  * Click the Connect button in the upper right corner, then select the App Frameworks tab.
  * Follow the instructions to locate the .env.local configuration.
   ![](/public/connect.png)
   ![](/public/env.local.png)
  * Copy the contents and add them to your local .env.local file in the root of your project.

4. **Set Up the Database**
  * Execute the following SQL commands in your Supabase SQL editor to set up your database:
  ```sql
    CREATE TABLE test_table (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      content TEXT
    );
    INSERT INTO test_table (id, content) VALUES ('123e4567-e89b-12d3-a456-426614174000', NULL);
  ```
5. **Run the Development Server**
  Launch your Next.js development server to see the setup page and verify that everything is configured correctly:
  ```bash
    npm run dev
  ```

6. **Enter the test page**
  You can now open two different test pages. You should be able to see that the different test pages can be edited together, and you can still get the latest edit content from the supabase database after refreshing the page, but the mouse awareness function cannot run correctly.

7. **test awareness function** 
  Keep two or more test pages open, then force refresh these two pages, then enter the IDE, insert any line breaks in utils\supabse\y-provider.ts, and then save y-provider.ts. At this time You should see awareness starting to work.
  

 **What I want to know is why and how can I set it up correctly, thanks for your help again.**
