"use client";

import { cn } from "@/shared/lib/utils";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "../..";

export interface MedicationKitProps {
  price: string;
  title: string;
  description: string;
  fsaEligible?: boolean;
  imageSrc?: string;
  className?: string;
  onClick?: () => void;
}

export function MedicationKit({
  price,
  title,
  fsaEligible = true,
  imageSrc = "/drugs.png",
  className,
  onClick,
}: MedicationKitProps) {
  return (
    <div
      className={cn(
        "bg-white font-infer w-full max-w-[650px] mx-auto rounded-2xl sm:rounded-[38px] relative overflow-hidden",
        className
      )}
    >
      {/* FSA/HSA Eligibility */}
      {fsaEligible && (
        <div className="flex items-center justify-center gap-2 rounded-t-2xl sm:rounded-t-[24px] py-2 sm:py-4">
          <CheckCircle className="w-6 h-6 text-black fill-black" />
          <span className="text-black text-base sm:text-[20px] font-bold">
            FSA/HSA eligible for reimbursement
          </span>
        </div>
      )}
      <div className="rounded-t-2xl sm:rounded-t-[38px] py-6 px-4 sm:py-[57px] sm:px-[72px] w-full h-full bg-gradient-to-r from-[#BAABDA] to-[#D6E5FA]">
        {/* Price Tag */}
        <div className="mb-6">
          <div className="inline-block bg-black rounded-[12px] px-4 py-2 sm:px-6 sm:py-3">
            <span className="text-white text-xs sm:text-[13px] font-bold">{price}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-black text-xl sm:text-[36px] font-normal">{title}</h3>

        {/* Medication Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[300px] h-[180px] sm:w-[400px] sm:h-[300px]">
            <Image
              src={imageSrc}
              alt="Medication pills"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Plus Icon and Description */}
        <div className="flex flex-col items-start gap-4">
          <Button variant="outline" className="w-full" onClick={onClick}>
            Choose this plan
          </Button>
        </div>
      </div>
    </div>
  );
}
