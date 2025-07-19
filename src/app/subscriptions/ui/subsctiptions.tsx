"use client";

import { useCallback, useEffect, useState } from "react";
import { ConfirmDialog } from '@/shared/ui/molecules/confirm-dialog/confirm-dialog';
import Link from "next/link";

type Subscription = {
  id: number;
  planName: string;
};

export default function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pendingCancelId, setPendingCancelId] = useState<number | null>(null);

  const fetchSubscriptions = useCallback(async () => {
    const res = await fetch(`/api/subscriptions/my`, {
      cache: "no-store",
    });
    console.log("res", res);
    const data = await res.json();
    console.log("data", data);
    setSubscriptions(data.data.subscriptions || []);
  }, []);

  const handleCancelClick = (id: number) => {
    setPendingCancelId(id);
    setDialogOpen(true);
  };

  const handleDialogConfirm = async () => {
    if (pendingCancelId == null) return;
    try {
      const res = await fetch(`/api/subscriptions/${pendingCancelId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'cancel' }),
      });
      if (!res.ok) throw new Error('Failed to cancel subscription');
      fetchSubscriptions();
    } catch (e) {
      console.error('Error cancelling subscription', e);
      alert('Error cancelling subscription');
    } finally {
      setDialogOpen(false);
      setPendingCancelId(null);
    }
  };

  const handleDialogCancel = () => {
    setDialogOpen(false);
    setPendingCancelId(null);
  };

  useEffect(() => {
    fetchSubscriptions();
  }, [fetchSubscriptions]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12">Subscriptions</h1>
      <div className="bg-white rounded-3xl shadow-md p-4 sm:p-8 w-full max-w-md sm:max-w-3xl flex flex-col items-center">
        <div className="text-lg sm:text-xl font-medium text-center mb-4 sm:mb-6">
          My subscriptions
        </div>
        <div className="w-full mb-4 sm:mb-6">
          {subscriptions.length === 0 ? (
            <div className="text-center text-gray-400 py-6 sm:py-10 text-base sm:text-lg flex flex-col items-center gap-4">
              <span>No subscriptions found.</span>
              <Link
                href="/onboarding/medication-eligibility-pricing"
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#CAB8FF] to-[#6F69AC] text-white rounded-xl font-medium shadow hover:scale-105 hover:shadow-lg transition-all duration-200 mt-2"
              >
                Explore Medication Eligibility & Pricing
              </Link>
            </div>
          ) : (
            subscriptions.map((sub) => (
              <div
                key={sub.id}
                className="w-full rounded-2xl py-6 sm:py-10 px-4 sm:px-8 text-white text-lg sm:text-3xl font-medium bg-gradient-to-r from-[#CAB8FF] to-[#6F69AC] mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between group"
              >
                <span className="break-words max-w-full">{sub.planName || "No plan name"}</span>
                <button
                  className="mt-2 sm:mt-0 ml-0 sm:ml-4 p-0 bg-transparent border-none text-gray-800 text-base font-normal hover:underline focus:outline-none cursor-pointer opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 sm:focus:opacity-100"
                  onClick={() => handleCancelClick(sub.id)}
                >
                  Cancel
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <ConfirmDialog
        open={dialogOpen}
        title="Cancel subscription?"
        description="Are you sure you want to cancel this subscription? This action cannot be undone."
        confirmText="Yes, cancel"
        cancelText="No, keep"
        onConfirm={handleDialogConfirm}
        onCancel={handleDialogCancel}
      />
    </div>
  );
}
