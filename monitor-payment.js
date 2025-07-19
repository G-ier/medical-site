const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function monitorPayment() {
  console.log('🔍 Starting payment monitoring...');
  console.log('📱 Go complete the payment on frontend now!');
  console.log('⏱️  Checking every 3 seconds...\n');
  
  let lastStatus = '';
  let lastInvoiceId = '';
  
  const checkStatus = async () => {
    try {
      const subscription = await prisma.subscription.findFirst({
        orderBy: { createdAt: 'desc' },
        include: {
          payments: { orderBy: { createdAt: 'desc' }, take: 1 }
        }
      });
      
      if (subscription && subscription.payments.length > 0) {
        const payment = subscription.payments[0];
        const currentStatus = `${subscription.status}|${payment.status}|${payment.healthieInvoiceId || 'none'}`;
        
        if (currentStatus !== lastStatus) {
          console.log(`📊 [${new Date().toLocaleTimeString()}] Status Update:`);
          console.log(`   Subscription: ${subscription.status}`);
          console.log(`   Payment: ${payment.status}`);
          console.log(`   Healthie Invoice: ${payment.healthieInvoiceId || 'NOT CREATED'}`);
          console.log(`   Healthie Status: ${payment.healthieInvoiceStatus || 'N/A'}`);
          
          if (subscription.status === 'active' && payment.status === 'SUCCEEDED') {
            if (payment.healthieInvoiceId) {
              console.log('\n🎉 SUCCESS! Payment completed and Healthie invoice created!');
              console.log(`✅ Healthie Invoice ID: ${payment.healthieInvoiceId}`);
              process.exit(0);
            } else {
              console.log('\n⚠️  Payment succeeded but Healthie invoice not created yet...');
            }
          }
          
          lastStatus = currentStatus;
          console.log('');
        }
      }
    } catch (error) {
      console.error('❌ Error monitoring:', error.message);
    }
  };
  
  // Check immediately and then every 3 seconds
  await checkStatus();
  const interval = setInterval(checkStatus, 3000);
  
  // Stop after 5 minutes
  setTimeout(() => {
    clearInterval(interval);
    console.log('⏰ Monitoring stopped after 5 minutes');
    process.exit(0);
  }, 300000);
}

monitorPayment().catch(console.error); 