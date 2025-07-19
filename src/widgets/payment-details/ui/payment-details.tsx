"use client";

import { useFormData } from "@/shared/hooks";
import { FormType } from "@/shared/types/form-types";
import { QAPageTemplate } from "@/shared/ui/templates";
import { PaymentCheckoutWidget } from "@/widgets/payment-checkout/ui";
import router from "next/router";
import { useCallback, useEffect, useState } from "react";

interface StripeProduct {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  currency: string | null;
  interval: string | null;
  priceId: string | null;
}

export function PaymentDetailsWidget() {
  const { get } = useFormData();
  const [product, setProduct] = useState<StripeProduct>({
    price: 0,
    currency: "usd",
    name: "",
    description: "",
    priceId: "",
    id: "",
    interval: null,
  });

  const getProduct = useCallback(async () => {
    const response = await get(FormType.OFFERING);
    const product = (response?.data as { formData: { product: any } }).formData
      .product;

    setProduct(product);
  }, [get]);

  const markOnboardingCompleted = useCallback(async () => {
    try {
      const sessionToken = localStorage.getItem("onboarding_session_token");
      if (!sessionToken) {
        console.error("Session token not found");
        return;
      }

      const response = await fetch("/api/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-session-token": sessionToken,
        },
        body: JSON.stringify({
          markAsCompleted: true,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("✅ Onboarding marked as completed successfully");
      } else {
        console.error(
          "❌ Failed to mark onboarding as completed:",
          result.error
        );
      }
    } catch (error) {
      console.error("❌ Error marking onboarding as completed:", error);
    }
  }, []);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <QAPageTemplate title="">
      <PaymentCheckoutWidget
        amount={product.price}
        currency={product.currency}
        planName={product.name}
        planDescription={product.description}
        productId={product.id}
        priceId={product.priceId}
        metadata={{
          stripe_product_id: product.id,
          planType: product.interval || "one_time",
          billingFrequency: product.interval || "one_time",
          productType: "weight_loss",
          plan_description: product.description || product.name,
          plan_name: product.name,
          test: process.env.NODE_ENV === "development" ? "true" : "false",
        }}
        onSuccess={async () => {
          console.log("success");
          await markOnboardingCompleted();
        }}
        onError={(error) => {
          if (error === "Unauthorized") {
            router.push("/auth/login");
            return;
          }
        }}
        redirectOnSuccess="/subscriptions"
      />
    </QAPageTemplate>
  );
}
