export enum DeviceType {
  Mobile = 'mobile',
  Desktop = 'desktop',
}

export function detectDevice(): DeviceType {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return DeviceType.Desktop;
  }

  const userAgent: string =
    navigator.userAgent || navigator.vendor || (window as any).opera;

  // List of mobile user agent strings to match against
  const mobileRegex =
    /android|avantgo|blackberry|bb|meego|ipad|ipod|iphone|iemobile|opera mini|opera mobi|windows phone|mobi|palm|symbian|webos|tablet|phone/i;

  if (mobileRegex.test(userAgent)) {
    return DeviceType.Mobile;
  } else {
    return DeviceType.Desktop;
  }
}
