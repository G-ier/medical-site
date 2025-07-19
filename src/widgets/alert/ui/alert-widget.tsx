import { QAPageTemplate } from "@/shared/ui/templates";
import { ContinueButton, GradientText } from "@/shared/ui/atoms";
import { useOnboarding } from "@/features/onboarding-flow/hooks/use-onboarding";

export const AlertWidget = ({ message, question, title }: { message: string, question?: string, title: string }) => {
    const { next } = useOnboarding();

    const handleContinue = () => {
        next();
    };

    return <QAPageTemplate
        title={<GradientText gradient="pink-yellow">{title}</GradientText>}
        question={question || ''}
        actions={<ContinueButton onClick={handleContinue} />}
    >
        <div>
            <p className="text-center text-[36px] font-medium">{message}</p>
        </div>
    </QAPageTemplate>;
};