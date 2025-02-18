declare global {
  interface Window {
    ziineApp?: {
      artworkRegisterSuccess: () => void;
    };
    webkit?: {
      messageHandlers?: {
        artworkRegisterSuccess?: {
          postMessage: (message: string | Record<string, unknown>) => void;
        };
      };
    };
  }
}

export {};
