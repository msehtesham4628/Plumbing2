import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidIndianPhoneNumber,
  isValidEmail,
  validateContactForm,
  normalizeIndianPhoneNumber,
  generateWhatsAppUrl,
} from './validation';

test('isValidIndianPhoneNumber validates standard Indian mobile numbers', () => {
  assert.equal(isValidIndianPhoneNumber('9700189654'), true);
  assert.equal(isValidIndianPhoneNumber('+91 97001 89654'), true);
  assert.equal(isValidIndianPhoneNumber('+919700189654'), true);
  assert.equal(isValidIndianPhoneNumber('09700189654'), true);
  assert.equal(isValidIndianPhoneNumber('8885551234'), true);
  assert.equal(isValidIndianPhoneNumber('7200112233'), true);
  assert.equal(isValidIndianPhoneNumber('6300998877'), true);

  // Invalid numbers
  assert.equal(isValidIndianPhoneNumber('12345'), false);
  assert.equal(isValidIndianPhoneNumber('5555512345'), false); // Starts with 5
  assert.equal(isValidIndianPhoneNumber(''), false);
  assert.equal(isValidIndianPhoneNumber('abcd970018'), false);
});

test('normalizeIndianPhoneNumber extracts standard 12-digit Indian phone code', () => {
  assert.equal(normalizeIndianPhoneNumber('9700189654'), '919700189654');
  assert.equal(normalizeIndianPhoneNumber('+91 97001 89654'), '919700189654');
});

test('isValidEmail validates formats or empty optional', () => {
  assert.equal(isValidEmail(''), true); // optional
  assert.equal(isValidEmail('ehtesham@example.com'), true);
  assert.equal(isValidEmail('not-an-email'), false);
  assert.equal(isValidEmail('missing@domain'), false);
});

test('validateContactForm checks all required fields', () => {
  const invalid = validateContactForm({
    fullName: '',
    phoneNumber: '',
    serviceRequired: '',
    propertyLocation: '',
    problemDescription: '',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.phoneNumber);
  assert.ok(invalid.errors.serviceRequired);
  assert.ok(invalid.errors.propertyLocation);
  assert.ok(invalid.errors.problemDescription);

  const valid = validateContactForm({
    fullName: 'Venkat Rao',
    phoneNumber: '+91 97001 89654',
    email: 'venkat@example.com',
    serviceRequired: 'Bathroom Leakage Detection',
    propertyLocation: 'Jubilee Hills, Hyderabad',
    problemDescription: 'Water seepage observed on adjacent bedroom wall behind shower area.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('generateWhatsAppUrl builds valid URL with prefilled text', () => {
  const defaultUrl = generateWhatsAppUrl();
  assert.ok(defaultUrl.includes('https://wa.me/919700189654'));
  assert.ok(defaultUrl.includes('Hello'));

  const customUrl = generateWhatsAppUrl({
    fullName: 'Rajesh',
    serviceRequired: 'Concealed Pipeline Leakage',
    propertyLocation: 'Gachibowli',
  });
  assert.ok(customUrl.includes('Rajesh'));
  assert.ok(customUrl.includes('Gachibowli'));
});
