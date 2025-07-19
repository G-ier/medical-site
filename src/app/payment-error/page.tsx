import InternalPageTemplate from "@/shared/ui/templates/internal-page-template";
import Link from "next/link";

export default function PaymentErrorPage() {
  return (
    <InternalPageTemplate requireAuth={false}>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Payment Error</h1>
        </div>
        <div className="mb-4">
          <p className="text-gray-500">
            We were unable to process your payment. Please try again.
          </p>
        </div>
        <Link
          href="/onboarding/medication-eligibility-pricing"
          className="bg-purple-500 text-white px-4 py-2 rounded-md"
        >
          Try Again
        </Link>
      </div>
    </InternalPageTemplate>
  );
}
