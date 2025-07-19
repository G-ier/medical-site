import InternalPageTemplate from "@/shared/ui/templates/internal-page-template";
import { AppointmentWidget } from "@/shared/widgets/AppointmentWidget";
import React from "react";

export default function AppointmentsPage() {
  return (
    <InternalPageTemplate>
      <AppointmentWidget />
    </InternalPageTemplate>
  );
}
