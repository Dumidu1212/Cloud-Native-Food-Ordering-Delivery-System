// Simple logging utility for shared use across services

export const logInfo = (message) => {
  console.info(`[INFO] ${new Date().toISOString()} - ${message}`);
};

export const logError = (message) => {
  console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
};
