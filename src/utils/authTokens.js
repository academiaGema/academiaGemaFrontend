const ACCESS_TOKEN_KEY = 'club_gema_access_token';
const REFRESH_TOKEN_KEY = 'club_gema_refresh_token';

const canUseSessionStorage = () => typeof globalThis !== 'undefined' && !!globalThis.sessionStorage;

export const saveAuthTokens = ({ accessToken, refreshToken }) => {
  if (!canUseSessionStorage()) return;
  if (typeof accessToken === 'string' && accessToken.trim().length > 0) {
    globalThis.sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  }
  if (typeof refreshToken === 'string' && refreshToken.trim().length > 0) {
    globalThis.sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }
};

export const getAccessToken = () => {
  if (!canUseSessionStorage()) return null;
  return globalThis.sessionStorage.getItem(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = () => {
  if (!canUseSessionStorage()) return null;
  return globalThis.sessionStorage.getItem(REFRESH_TOKEN_KEY);
};

export const clearAuthTokens = () => {
  if (!canUseSessionStorage()) return;
  globalThis.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  globalThis.sessionStorage.removeItem(REFRESH_TOKEN_KEY);
};

export const hasAuthTokens = () => Boolean(getAccessToken() && getRefreshToken());
