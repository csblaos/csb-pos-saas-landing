export const analyticsConfig = {
  // Set PUBLIC_GA_MEASUREMENT_ID in env to override this value per environment.
  gaMeasurementId: import.meta.env.PUBLIC_GA_MEASUREMENT_ID || 'G-FXXCYMEJG3',
  enabled: true,
} as const;

