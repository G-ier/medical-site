import React from "react";

const STAGING_URL =
  "https://express.care-staging.openloophealth.com/book-appointment?appointmentTypeId=306938,306939&providerId=2186498";
const PROD_URL =
  "https://express.patientcare.openloophealth.com/book-appointment?appointmentTypeId=461800,461801&providerId=7138699";

// Use NEXT_PUBLIC_ENV to distinguish between staging and production deployments
const isProd = process.env.NEXT_PUBLIC_ENV === "production";
const APPOINTMENT_WIDGET_URL = isProd ? PROD_URL : STAGING_URL;

export const AppointmentWidget: React.FC = () => {
  console.log("sdfds");
  return (
    <div className="w-full max-w-3xl h-[80vh] overflow-hidden mx-auto">
      <iframe
        src={APPOINTMENT_WIDGET_URL}
        title="Book Appointment Widget"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
};
