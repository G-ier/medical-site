import InternalPageTemplate from '@/shared/ui/templates/internal-page-template';
import ProfileClient from './ProfileClient'   

export default function ProfilePage() {
  return (
    <InternalPageTemplate>
      <div className="flex flex-col items-center justify-center min-h-[80vh] py-12">
        <h1 className="text-5xl font-bold text-center mb-12">Profile</h1>
        <ProfileClient />
      </div>
    </InternalPageTemplate>
  );
} 