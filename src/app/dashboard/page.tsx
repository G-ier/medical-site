import InternalPageTemplate from "@/shared/ui/templates/internal-page-template";
import { WelcomeMessage } from "@/shared/ui/molecules/welcome-message";

export default function Dashboard() {
  return (
    <InternalPageTemplate>
      <WelcomeMessage />
    </InternalPageTemplate>
  );
}