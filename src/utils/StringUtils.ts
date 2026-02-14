import uuid from 'react-native-uuid';

export const getRandomUUID = (): string => {
  const generatedUUID = uuid.v4();
  console.log('generatedUUID==>', generatedUUID);
  return generatedUUID.toString();
};

export const capitalizeWords = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const compareVersions = (
  currentVersionValue: string,
  newVersionValue: string
): number => {
  const currentVersion = currentVersionValue.split('.').map(Number);
  const newVersion = newVersionValue.split('.').map(Number);

  for (let i = 0; i < Math.max(currentVersion.length, newVersion.length); i++) {
    const currentVersionPart = currentVersion[i] || 0;
    const newVersionPart = newVersion[i] || 0;

    if (currentVersionPart < newVersionPart) {
      return -1;
    }

    if (currentVersionPart > newVersionPart) {
      return 1;
    }
  }

  return 0;
};

export const hasValidText = (value: string): boolean =>
  typeof value === 'string' && value.trim().length > 0;
