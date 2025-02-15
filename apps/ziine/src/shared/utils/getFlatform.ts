export const getUserAgentPlatform = (): 'iOS_App' | 'Android_App' | null => {
  const userAgent = navigator.userAgent;

  if (userAgent.includes('iOS_App')) {
    return 'iOS_App';
  } else if (userAgent.includes('Android_App')) {
    return 'Android_App';
  }
  return null;
};
