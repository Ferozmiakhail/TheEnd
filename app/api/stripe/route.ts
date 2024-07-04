import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe('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', {
  apiVersion: '2024-04-10',
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ["AT", "BE", "BG", "DK", "FI", "FR", "DE", "GR", "IE", "IT", "NL", "NO", "PL", "ES", "SE", "CH", "TR", "GB", "IN", "AU", "US", "CA"],
      },
      shipping_options: [
        { shipping_rate: 'shr_1NyYiqH8PI4bUNKLmllY2mU1' },
      ],
      line_items: body.map((item: any) => {
        const img = item.image[0];
        let newImage = img;

        if (img.asset && img.asset._ref) {
          newImage = img.asset._ref
            .replace('image-', 'https://cdn.sanity.io/images/vfxfwnaw/production/')
            .replace('-webp', '.webp');
        }

        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
              images: [newImage],
              description: `stock:${item.stock}, shoulder: number,
              sleeve:${item.sleeve},
              collar:${item.collar},
              chest:${item.chest},
              hip:${item.hip},
              last:${item.last},
              blouse:${item.blouse},
              dotpoint:${item.dotpoint},
              waistaround:${item.waistaround},
              BeltFit:${item.BeltFit},
              hipLine:${item.hipLine},
              pant:${item.pant},
              sizeslect:${item.sizeslect},
              sSkirt:${item.sSkirt},
              sleevee:${item.sleevee},
              collare:${item.collare},
              pocket:${item.pocket},
              pante:${item.pante},
              Cusian:${item.Cusian},
              color:${item.color},`,
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: item.productcategory === 'Cushion' ? 4 : 1,
          },
          quantity: item.quantity,
        };
      }),
      custom_fields: [{
        key: 'pnumber' ,
        label: { type: 'custom', custom: 'Phone number'},
        type: 'numeric'
       }],
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/canceled`,
    };

    const session = await stripe.checkout.sessions.create(params);

    return NextResponse.json(session);
  } catch (err: any) {
    console.error('Error creating Stripe session:', err);
    return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  }
}
