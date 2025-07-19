"use client";
import { useEffect, useState } from 'react';

interface UserProfile {
  name?: string;
  email?: string;
  phone?: string;
  // birthday?: string; // Remove birthday from user profile
}

interface PaymentMethod {
  id: string;
  card: {
    brand: string;
    last4: string;
    exp_month: number;
    exp_year: number;
  };
}

interface Patient {
  address?: {
    line1?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  dateOfBirth?: string; // Add birthday to patient
  phoneNumber?: string;
}

export default function ProfileClient() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [pmLoading, setPmLoading] = useState(true);
  const [pmError, setPmError] = useState<string | null>(null);

  const [patient, setPatient] = useState<Patient | null>(null);
  const [patientLoading, setPatientLoading] = useState(true);
  const [patientError, setPatientError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/auth/profile');
        if (!res.ok) throw new Error('Not authenticated');
        const data = await res.json();
        setUser(data);
      } catch (e: any) {
        setError(e.message || 'Failed to load profile');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      setPmLoading(true);
      setPmError(null);
      try {
        const res = await fetch('/api/stripe/payment-methods');
        const data = await res.json();
        if (res.ok) {
          setPaymentMethods(data.paymentMethods || []);
        } else {
          setPmError(data.error || 'Failed to load payment methods');
        }
      } catch (e: any) {
        setPmError(e.message || 'Failed to load payment methods');
        setPaymentMethods([]);
      } finally {
        setPmLoading(false);
      }
    };
    fetchPaymentMethods();
  }, []);

  useEffect(() => {
    const fetchPatient = async () => {
      setPatientLoading(true);
      setPatientError(null);
      try {
        const res = await fetch('/api/patients/my');
        const data = await res.json();
        if (res.ok) {
          setPatient(data.patient || null);
        } else {
          setPatientError(data.error || 'Failed to load patient');
        }
      } catch (e: any) {
        setPatientError(e.message || 'Failed to load patient');
        setPatient(null);
      } finally {
        setPatientLoading(false);
      }
    };
    fetchPatient();
  }, []);

  return (
    <div className="w-full max-w-2xl flex flex-col gap-10">
      {/* Account Details */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-lg">Account Details</span>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 min-h-[120px] flex flex-col justify-center">
          {loading ? (
            <div className="text-gray-400">Loading...</div>
          ) : error ? (
            <div className="text-red-500">{error}</div>
          ) : user ? (
            <>
              <div className="mb-2"><span className="text-gray-500 text-sm">Name</span><div>{user.name || '-'}</div></div>
              <div className="mb-2"><span className="text-gray-500 text-sm">Email</span><div>{user.email || '-'}</div></div>
              <div className="mb-2"><span className="text-gray-500 text-sm">Phone</span><div>{patientLoading ? 'Loading...' : patient && patient.phoneNumber ? patient.phoneNumber   : '-'}</div></div>
              <div><span className="text-gray-500 text-sm">Birthday</span><div>{patientLoading ? 'Loading...' : patient && patient.dateOfBirth ? patient.dateOfBirth : '-'}</div></div>
            </>
          ) : (
            <div className="text-gray-400">No user data</div>
          )}
        </div>
      </div>

      {/* Payment Method */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-lg">Payment method</span>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 min-h-[60px] flex flex-col justify-center">
          {pmLoading ? (
            <div className="text-gray-400">Loading...</div>
          ) : pmError ? (
            <div className="text-red-500">{pmError}</div>
          ) : paymentMethods.length === 0 ? (
            <div className="text-gray-400">No payment methods found.</div>
          ) : (
            paymentMethods.map(pm => (
              <div key={pm.id} className="flex items-center gap-4 mb-4">
                <span className="capitalize font-medium">{pm.card.brand}</span>
                <span className="tracking-widest">•••• {pm.card.last4}</span>
                <span className="text-xs text-gray-500 ml-2">Exp: {pm.card.exp_month}/{pm.card.exp_year}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Shipping Address */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-lg">Shipping address</span>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 min-h-[60px] flex flex-col justify-center">
          {patientLoading ? (
            <div className="text-gray-400">Loading...</div>
          ) : patientError ? (
            <div className="text-red-500">{patientError}</div>
          ) : patient && patient.address ? (
            <>
              <div className="mb-2"><span className="text-gray-500 text-sm">Address</span><div>{patient.address.line1 || '-'}</div></div>
              <div className="mb-2"><span className="text-gray-500 text-sm">City</span><div>{patient.address.city || '-'}</div></div>
              <div className="mb-2"><span className="text-gray-500 text-sm">State</span><div>{patient.address.state || '-'}</div></div>
              <div><span className="text-gray-500 text-sm">Zip code</span><div>{patient.address.zip || '-'}</div></div>
            </>
          ) : (
            <div className="text-gray-400">No address data</div>
          )}
        </div>
      </div>
    </div>
  );
} 