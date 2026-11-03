import { ContactFormData, ValidationErrors } from '../types/index';

/**
 * Validates Indian phone numbers (10 digits starting with 6-9, with optional +91 or 0 prefix)
 */
export function isValidIndianPhoneNumber(phone: string): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  // Matches +91XXXXXXXXXX, 91XXXXXXXXXX, 0XXXXXXXXXX, or XXXXXXXXXX where X is 6-9 followed by 9 digits
  const indianPhoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  return indianPhoneRegex.test(cleaned);
}

/**
 * Normalizes phone numbers to standard format for WhatsApp API: 919700189654
 */
export function normalizeIndianPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `91${digits}`;
  }
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits;
  }
  return digits;
}

/**
 * Validates email address format
 */
export function isValidEmail(email?: string): boolean {
  if (!email || email.trim() === '') return true; // Optional field
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Comprehensive client-side form validator
 */
export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: ValidationErrors } {
  const errors: ValidationErrors = {};

  // Full Name validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters)';
  } else if (!/^[a-zA-Z\s.'-]+$/.test(data.fullName.trim())) {
    errors.fullName = 'Name should contain letters only';
  }

  // Phone validation
  if (!data.phoneNumber || data.phoneNumber.trim().length === 0) {
    errors.phoneNumber = 'Phone number is required for diagnostic dispatch';
  } else if (!isValidIndianPhoneNumber(data.phoneNumber)) {
    errors.phoneNumber = 'Please enter a valid 10-digit Indian mobile number';
  }

  // Email validation (optional)
  if (data.email && !isValidEmail(data.email)) {
    errors.email = 'Please provide a valid email address or leave blank';
  }

  // Service Required validation
  if (!data.serviceRequired || data.serviceRequired.trim() === '') {
    errors.serviceRequired = 'Please select the required inspection or plumbing service';
  }

  // Property Location validation
  if (!data.propertyLocation || data.propertyLocation.trim().length < 3) {
    errors.propertyLocation = 'Please provide the property locality in Hyderabad (e.g. Jubilee Hills, Gachibowli)';
  }

  // Problem Description validation
  if (!data.problemDescription || data.problemDescription.trim().length < 8) {
    errors.problemDescription = 'Please briefly describe the leak or plumbing issue (min 8 characters)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates official WhatsApp enquiry link
 */
export function generateWhatsAppUrl(data?: Partial<ContactFormData>): string {
  const defaultMessage = 'Hello, I am interested in thermal water leakage detection services. Please contact me.';
  
  if (!data || (!data.fullName && !data.serviceRequired && !data.propertyLocation)) {
    return `https://wa.me/919700189654?text=${encodeURIComponent(defaultMessage)}`;
  }

  const parts = [
    `*HydroScan Diagnostic Booking Request*`,
    `Name: ${data.fullName || 'Not specified'}`,
    `Phone: ${data.phoneNumber || 'Not specified'}`,
    `Service: ${data.serviceRequired || 'Thermal Leakage Detection'}`,
    `Location: ${data.propertyLocation || 'Hyderabad'}`,
    `Details: ${data.problemDescription || 'Please contact me for inspection scheduling.'}`,
  ];

  return `https://wa.me/919700189654?text=${encodeURIComponent(parts.join('\n'))}`;
}
