import { auth0 } from "@/shared/lib/auth0";
import Image from "next/image";

export default async function AuthTestPage() {
  const session = await auth0.getSession();

  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Auth0 Authentication Test
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please sign in to test the authentication
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="/auth/login?screen_hint=signup"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </a>
            <a
              href="/auth/login"
              className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome, {session.user.name}!
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            You are successfully authenticated
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">User Information</h3>
            <div className="space-y-2">
              <p><strong>Name:</strong> {session.user.name}</p>
              <p><strong>Email:</strong> {session.user.email}</p>
              <p><strong>Picture:</strong> {session.user.picture && (
                <Image src={session.user.picture} alt="User" width={32} height={32} className="w-8 h-8 rounded-full inline ml-2" />
              )}</p>
            </div>
          </div>
          <a
            href="/auth/logout"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </a>
        </div>
      </div>
    </main>
  );
}