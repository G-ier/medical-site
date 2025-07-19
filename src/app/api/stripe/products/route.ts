import { NextResponse } from 'next/server';
import { stripe } from '@/shared/lib/stripe';

export async function GET() {
  try {
    // Fetch all active products
    const products = await stripe.products.list({ active: true, limit: 100 });
    console.log('products', products)
    // Fetch all active prices
    const prices = await stripe.prices.list({ active: true, limit: 100 });

    // Map prices by product id
    const priceMap: Record<string, any[]> = {};
    for (const price of prices.data) {
      if (!price.product) continue;
      const productId = typeof price.product === 'string' ? price.product : price.product.id;
      if (!priceMap[productId]) priceMap[productId] = [];
      priceMap[productId].push(price);
    }

    // Build product list with price info, filtering out healthie_offering_ products
    const result = products.data
      .map(product => {
        const productPrices = priceMap[product.id] || [];
        // Pick the first price (or null)
        const price = productPrices[0] || null;
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          price: price ? price.unit_amount : null,
          currency: price ? price.currency : null,
          interval: price && price.recurring ? price.recurring.interval : null,
          priceId: price ? price.id : null,
        };
      });

    return NextResponse.json({ success: true, data: { products: result } });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
} 