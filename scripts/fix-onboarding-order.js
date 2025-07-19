const fs = require('fs');
const path = require('path');

/**
 * Script for automatically fixing the order of steps in onboarding config
 * Usage: node scripts/fix-onboarding-order.js
 */

const configPath = path.join(__dirname, '..', 'src', 'entities', 'onboarding', 'model', 'config.ts');

console.log('🔧 Starting onboarding steps order fix...\n');

function fixOnboardingOrder() {
  console.log('🔧 Starting onboarding steps order fix...\n');

  // Read the file
  let content = fs.readFileSync(configPath, 'utf8');

  // Find all steps with their order and fix numbering
  const steps = [];
  const stepRegex = /{\s*id:\s*'([^']+)',[\s\S]*?order:\s*(\d+),[\s\S]*?}/g;
  let match;

  // Collect all steps
  while ((match = stepRegex.exec(content)) !== null) {
    steps.push({
      id: match[1],
      order: parseInt(match[2]),
      fullMatch: match[0],
      index: match.index
    });
  }

  // Sort by current order
  steps.sort((a, b) => a.order - b.order);

  console.log(`📊 Found steps: ${steps.length}`);
  console.log('📋 Current order:', steps.map(s => `${s.id}: ${s.order}`).join(', '));

  // Fix order to sequential numbers starting from 1
  let newContent = content;
  const replacements = [];

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const newOrder = i + 1;
    
    if (step.order !== newOrder) {
      // Find specific order occurrence for this step
      const stepStart = newContent.indexOf(`id: '${step.id}'`);
      if (stepStart !== -1) {
        const orderMatch = newContent.substring(stepStart).match(/order:\s*(\d+),/);
        if (orderMatch) {
          const orderStart = stepStart + newContent.substring(stepStart).indexOf(orderMatch[0]);
          const orderEnd = orderStart + orderMatch[0].length;
          
          replacements.push({
            start: orderStart,
            end: orderEnd,
            oldValue: orderMatch[0],
            newValue: `order: ${newOrder},`,
            stepId: step.id,
            oldOrder: step.order,
            newOrder: newOrder
          });
        }
      }
    }
  }

  // Apply replacements in reverse order (from end to beginning)
  replacements.sort((a, b) => b.start - a.start);

  if (replacements.length > 0) {
    console.log('\n🔄 Applying changes:');
    for (const replacement of replacements) {
      console.log(`   ${replacement.stepId}: order ${replacement.oldOrder} -> ${replacement.newOrder}`);
      newContent = newContent.substring(0, replacement.start) + 
                   replacement.newValue + 
                   newContent.substring(replacement.end);
    }

    // Save the file
    fs.writeFileSync(configPath, newContent, 'utf8');

    console.log('\n✅ Changes applied successfully!');
    console.log(`📈 Updated ${replacements.length} steps`);
  } else {
    console.log('\n✅ Step order is already correct!');
  }

  // Check the result
  console.log('\n🔍 Checking result:');
  const finalContent = fs.readFileSync(configPath, 'utf8');
  const finalSteps = [];
  const finalRegex = /{\s*id:\s*'([^']+)',[\s\S]*?order:\s*(\d+),[\s\S]*?}/g;
  let finalMatch;

  while ((finalMatch = finalRegex.exec(finalContent)) !== null) {
    finalSteps.push({
      id: finalMatch[1],
      order: parseInt(finalMatch[2])
    });
  }

  finalSteps.sort((a, b) => a.order - b.order);
  
  // Check sequence
  let isSequential = true;
  for (let i = 0; i < finalSteps.length; i++) {
    if (finalSteps[i].order !== i + 1) {
      isSequential = false;
      console.log(`❌ Error: step ${finalSteps[i].id} has order ${finalSteps[i].order}, expected ${i + 1}`);
    }
  }

  if (isSequential) {
    console.log(`✅ Sequence is correct: 1-${finalSteps.length}`);
  }

  console.log('\n🎉 Fix completed!');
}

// Run the script
if (require.main === module) {
  try {
    fixOnboardingOrder();
  } catch (error) {
    console.error('❌ Error executing script:', error.message);
    process.exit(1);
  }
}

module.exports = { fixOnboardingOrder }; 