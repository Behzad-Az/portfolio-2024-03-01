import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const status = useFormStatus();
  return (
    <button 
      type="submit" 
      disabled={status.pending}
      className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-800 rounded-full outline-none transition-all text-white hover:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10">
        {
          status.pending ? <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div> : (
            <>
              Submit 
              <FaPaperPlane className="text-sm opacity-70 transition-all" />
            </>
          )
        }
      </button>
  )
}
