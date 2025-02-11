"use client";

import Button from "@/components/ui/Button";
import { FC, useState} from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import Image from "next/image";        
import Link from "next/link";                                                                                     

const Page: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast.error("Something went wrong with your login.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-slate-100 flex items-center justify-center ">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl mx-auto">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-center text-4xl font-semibold mt-4 mb-4">Sign into Gapshap</h1>
            <Image src="/comm.png" alt="Logo" width={360} height={360} />
          </div>
            <Button
              isLoading={isLoading}
              type="button"
              className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
              onClick={loginWithGoogle}
            >
              {isLoading? "Logging in..." : "Continue with google"}
            </Button>
            <div className="mt-6 text-center">
            <Link
              href="https://github.com/Vineet933/Gapshap"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Visit my GitHub
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
