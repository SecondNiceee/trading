declare global {
  interface Window {
    __AUTH_TOKEN__?: string;
    __USER_EMAIL__?: string;
  }
}

export {};
