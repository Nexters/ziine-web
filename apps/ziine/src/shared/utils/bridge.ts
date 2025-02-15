export const bridgeFunction = (platform: 'iOS_App' | 'Android_App' | 'REGISTER_COMPLETE') => {
  if (platform === 'iOS_App') {
    console.log('iOS 앱에서 호출됨');
    // iOS
  } else if (platform === 'Android_App') {
    console.log('Android 앱에서 호출됨');
    // Android
  } else if (platform === 'REGISTER_COMPLETE') {
    console.log('등록 완료');
  }
};
