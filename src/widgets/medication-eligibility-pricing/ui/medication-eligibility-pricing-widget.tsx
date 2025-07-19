"use client";
import { useFormData } from "@/shared/hooks";
import { useOnboarding } from "@/features/onboarding-flow/hooks/use-onboarding";
import { FormType } from "@/shared/types/form-types";
import { GradientText } from "@/shared/ui/atoms/gradient-text";
import { MedicationKit } from "@/shared/ui/molecules/medication-kit";
import { QAPageTemplate } from "@/shared/ui/templates/qa-page-template";
import { useEffect, useState } from "react";

interface StripeProduct {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  currency: string | null;
  interval: string | null;
  priceId: string | null;
}

interface MedicationEligibilityPricingWidgetProps {
  className?: string;
}

export function MedicationEligibilityPricingWidget({}: MedicationEligibilityPricingWidgetProps) {
  const { next } = useOnboarding();
  const [products, setProducts] = useState<StripeProduct[]>([]);
  const { save } = useFormData();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/stripe/products");
      const data = await response.json();
      setProducts(data.data.products);
    };
    fetchProducts();
  }, []);

  return (
    <QAPageTemplate
      maxWidth="2xl"
      title=""
      showBackButton={false}
      actions={null}
    >
      <div className="mb-8">
        <p className="text-lg sm:text-[32px] font-normal text-black text-center">
          Based on your responses you may be eligible for:
        </p>
      </div>
      <div className="mb-8 w-full max-w-xl mx-auto px-2 sm:px-0">
        {products.map((product) => (
          <div className="mb-4" key={product.id}>
            <MedicationKit
              key={product.id}
              title={product.name}
              description={product.description}
              price={`$${product.price ? (product.price / 100).toFixed(2) : '0.00'}${product.interval ? ` / ${product.interval}` : ''}`}
              onClick={() => {
                console.log("Choose this plan", product);
                save(FormType.OFFERING, { product });
                next();
              }}
            />
          </div>
        ))}
      </div>
      <div>
        <p className="text-base sm:text-[24px] font-normal text-black text-center">
          A custom blend of{" "}
          <GradientText gradient="purple-blue">
            doctor-trusted ingredients
          </GradientText>
          , each shown to promote weight loss
        </p>
      </div>
    </QAPageTemplate>
  );
}
