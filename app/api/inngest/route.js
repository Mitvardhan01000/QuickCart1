import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserdeletion, syncUserUpdation } from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: Inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserdeletion
  ],
});