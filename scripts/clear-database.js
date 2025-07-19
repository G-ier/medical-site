/**
 * Clear Database Script
 * Removes all data from database tables in correct order (respecting foreign keys)
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function clearDatabase() {
  try {
    console.log('🗑️  Starting database cleanup...\n');

    // Get counts before deletion
    const beforeCounts = {
      formSubmissions: await prisma.formSubmission.count(),
      medicalRecords: await prisma.medicalRecord.count(),
      formData: await prisma.formData.count(),
      patients: await prisma.patient.count(),
      progressSessions: await prisma.progressSession.count(),
      users: await prisma.user.count()
    };

    console.log('📊 Data before cleanup:');
    Object.entries(beforeCounts).forEach(([table, count]) => {
      console.log(`   ${table}: ${count}`);
    });
    console.log('');

    // Delete in correct order (respecting foreign keys)
    console.log('🔄 Deleting data in correct order...\n');

    // 1. Delete form submissions (references form_data)
    console.log('1️⃣ Deleting form submissions...');
    const deletedFormSubmissions = await prisma.formSubmission.deleteMany();
    console.log(`   ✅ Deleted ${deletedFormSubmissions.count} form submissions`);

    // 2. Delete medical records (references patients)
    console.log('2️⃣ Deleting medical records...');
    const deletedMedicalRecords = await prisma.medicalRecord.deleteMany();
    console.log(`   ✅ Deleted ${deletedMedicalRecords.count} medical records`);

    // 3. Delete form data (references progress_sessions)
    console.log('3️⃣ Deleting form data...');
    const deletedFormData = await prisma.formData.deleteMany();
    console.log(`   ✅ Deleted ${deletedFormData.count} form data entries`);

    // 4. Delete patients (references users)
    console.log('4️⃣ Deleting patients...');
    const deletedPatients = await prisma.patient.deleteMany();
    console.log(`   ✅ Deleted ${deletedPatients.count} patients`);

    // 5. Delete progress sessions (references users)
    console.log('5️⃣ Deleting progress sessions...');
    const deletedProgressSessions = await prisma.progressSession.deleteMany();
    console.log(`   ✅ Deleted ${deletedProgressSessions.count} progress sessions`);

    // 6. Delete users (no foreign key dependencies)
    console.log('6️⃣ Deleting users...');
    const deletedUsers = await prisma.user.deleteMany();
    console.log(`   ✅ Deleted ${deletedUsers.count} users`);

    console.log('\n🔄 Resetting ID sequences...');

    // Reset sequences for auto-incrementing IDs
    await prisma.$executeRaw`ALTER SEQUENCE "form_submissions_id_seq" RESTART WITH 1;`;
    await prisma.$executeRaw`ALTER SEQUENCE "medical_records_id_seq" RESTART WITH 1;`;
    await prisma.$executeRaw`ALTER SEQUENCE "form_data_id_seq" RESTART WITH 1;`;
    await prisma.$executeRaw`ALTER SEQUENCE "patients_id_seq" RESTART WITH 1;`;
    await prisma.$executeRaw`ALTER SEQUENCE "progress_sessions_id_seq" RESTART WITH 1;`;
    await prisma.$executeRaw`ALTER SEQUENCE "users_id_seq" RESTART WITH 1;`;

    console.log('   ✅ ID sequences reset to start from 1');

    // Verify cleanup
    console.log('\n🔍 Verifying cleanup...');
    const afterCounts = {
      formSubmissions: await prisma.formSubmission.count(),
      medicalRecords: await prisma.medicalRecord.count(),
      formData: await prisma.formData.count(),
      patients: await prisma.patient.count(),
      progressSessions: await prisma.progressSession.count(),
      users: await prisma.user.count()
    };

    console.log('📊 Data after cleanup:');
    Object.entries(afterCounts).forEach(([table, count]) => {
      console.log(`   ${table}: ${count}`);
    });

    const totalDeleted = Object.values(beforeCounts).reduce((sum, count) => sum + count, 0);
    const totalRemaining = Object.values(afterCounts).reduce((sum, count) => sum + count, 0);

    console.log(`\n✅ Database cleanup completed successfully!`);
    console.log(`📊 Total records deleted: ${totalDeleted}`);
    console.log(`📊 Total records remaining: ${totalRemaining}`);

    if (totalRemaining === 0) {
      console.log('🎉 Database is completely clean!');
    } else {
      console.log('⚠️  Some records remain in the database');
    }

  } catch (error) {
    console.error('❌ Error during database cleanup:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script if called directly
if (require.main === module) {
  clearDatabase()
    .then(() => {
      console.log('\n✅ Database cleanup script completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n❌ Database cleanup script failed:', error);
      process.exit(1);
    });
}

module.exports = { clearDatabase }; 