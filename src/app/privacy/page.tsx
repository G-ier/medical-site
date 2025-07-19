import { getLegalPageBySlug } from '@/shared/lib/getLegalPageBySlug';
import { LegalRichText } from '@/shared/ui/atoms/legal-rich-text';

export default async function PrivacyPage() {
  const data = await getLegalPageBySlug('privacy');
  if (!data) return <div className="p-8">Not found</div>;
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
      <LegalRichText value={data.content} />
    </main>
  );
} 