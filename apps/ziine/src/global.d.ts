declare global {
  interface Window {
    ziineApp?: {
      artworkRegisterSuccess: () => void;
    };
    webkit?: {
      messageHandlers?: {
        artworkRegisterSuccess?: {
          postMessage: (message: any) => void;
        };
      };
    };
  }
}

export {}; // 글로벌 타입 선언에서는 export 필수
