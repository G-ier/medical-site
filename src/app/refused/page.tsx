import { LinkButton } from "@/shared/ui/atoms";

export default function RefusedPage() {
    return <div className="flex flex-col items-center justify-center h-screen px-4">
        <h1 className="text-lg sm:text-2xl font-bold text-center">Sorry, you are not eligible for this treatment.</h1>
        <p className="text-xs sm:text-sm text-gray-500 text-center">Please contact your doctor for more information.</p>
        <div className="mt-4">
            <LinkButton href="/" variant="outline">Go to main page</LinkButton>
        </div>
    </div>
}


