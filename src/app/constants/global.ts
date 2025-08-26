import { isPlatformBrowser } from '@angular/common';
// import { Geolocation } from '@capacitor/geolocation';

export const backToOnlineMessege: string = "You are back online. Please wait we are reloading this page.";
export const offlineMessege: string = "Connection lost! You are not connected to internet";


export const company = 'GPPL';

export function checkIsBlank(value: string): boolean {
  return value === "";
}

export function checkIsBlankOrNullOrUndefined(value: any): boolean {
  return value === "" || value === null || value === undefined || value === 0;
}

export const formatCurrency = (value: number): string => {
  return '₹ ' + Number(value).toLocaleString('en-IN');
}

export function checkEqualString(value: string, valueToBeChecked: string): boolean {
  return value.toLowerCase() === valueToBeChecked.toLowerCase();
}

export function convertISODate(date: string) {
  let parts: any[] = date.split("/");
  return parts[2] + "-" + parts[1] + "-" + parts[0];
}

export function convertToBoolean(value: any): boolean {
  if (typeof value === 'string' && value.toLowerCase() === 'true') {
    return true;
  }
  return Boolean(value);
}

export function getDetailsFromHostName() {
  return window.location.hostname === "localhost" ? "test-adjmcasgn24" : window.location.hostname.split(".")[0] ? window.location.hostname.split(".")[0] : "";
}

// export async function getGeolocation() {
//   const coordinates = await Geolocation.getCurrentPosition();
//   let locationObject = {
//     latitude: coordinates.coords.latitude,
//     longitude: coordinates.coords.longitude,
//     mapUrl: `https://maps.google.com/?q=${coordinates.coords.latitude},${coordinates.coords.longitude}`
//   }
//   return locationObject;
// }

export function getUTCString() {
  return new Date().toISOString();
}

export function getTimeDifference(startedOn: string, currentTime: string) {
  const date1: any = new Date(startedOn);
  const date2: any = new Date(currentTime);
  const differenceInMilliseconds = Math.abs(date1 - date2);
  const differenceInSeconds = differenceInMilliseconds / 1000;
  return differenceInSeconds < 0 ? 0 : differenceInSeconds;
}

export function getOS(platformId: Object): string | undefined | null {
  let os = 'Unknown';
  if (isPlatformBrowser(platformId as Object)) {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const mobilePlatforms = ['iPhone', 'iPad', 'iPod', 'Android'];
    if (mobilePlatforms.includes(platform)) {
      os = 'Mobile';
    } else if (/Mac/i.test(platform)) {
      os = 'Mac OS';
    } else if (/Win/i.test(platform)) {
      os = 'Windows';
    } else if (/Linux/i.test(platform)) {
      os = 'Linux';
    }
    return os;
  }
  return os;
}

export class getBrowser {
  browser = 'Unknown';

  constructor(platformId: Object) {
    if (isPlatformBrowser(platformId as Object)) {
      const userAgent = window.navigator.userAgent;
      if (/Edg/i.test(userAgent)) {
        this.browser = 'Edge';
      } else if (/Chrome/i.test(userAgent)) {
        this.browser = 'Chrome';
      } else if (/Firefox/i.test(userAgent)) {
        this.browser = 'Firefox';
      } else if (/Safari/i.test(userAgent)) {
        this.browser = 'Safari';
      } else if (/Opera|OPR\//i.test(userAgent)) {
        this.browser = 'Opera';
      }
    }
  }
}

export class DefaultDateRange {
  from: string = "";
  to: string = "";

  constructor() {
    this.from = new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString();
    this.to = new Date().toISOString();
  }
}

export const getMonthName = (monthCode: string): string => {
  const monthList = [
    { code: '01', name: 'January' },
    { code: '02', name: 'February' },
    { code: '03', name: 'March' },
    { code: '04', name: 'April' },
    { code: '05', name: 'May' },
    { code: '06', name: 'June' },
    { code: '07', name: 'July' },
    { code: '08', name: 'August' },
    { code: '09', name: 'September' },
    { code: '10', name: 'October' },
    { code: '11', name: 'November' },
    { code: '12', name: 'December' },
  ]
  const month = monthList.find(month => month.code === monthCode);
  return month?.name ?? '';
}

export class DateRangeStringConverter { }
// format

export interface ApiResponse {
  response_message?: string;
  [key: string]: any;
}

const secretKey = 123;

// Function to encrypt a string using XOR and return hexadecimal characters
export const encryptString = (string: string) => {
  let encrypted = '';
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i) ^ secretKey; // XOR with the key
    encrypted += charCode.toString(16).padStart(2, '0'); // Convert to hexadecimal
  }
  return encrypted;
};

// Function to decrypt the hexadecimal string and return original or parsed JSON
export const decryptString = (encryptedString: string) => {
  let decrypted = '';
  if (encryptedString && encryptedString.length > 0) {
    // Decrypt each pair of hexadecimal characters
    for (let i = 0; i < encryptedString.length; i += 2) {
      let hexChar = encryptedString.substr(i, 2); // Get each hexadecimal pair
      let charCode = parseInt(hexChar, 16) ^ secretKey; // Convert back from hex and XOR with the key
      decrypted += String.fromCharCode(charCode);
    }

    // Try to parse the decrypted string as JSON
    try {
      const parsed = JSON.parse(decrypted);
      return parsed; // Return the parsed object if it's valid JSON
    } catch (error) {
      return decrypted; // Return the original string if it's not valid JSON
    }
  }

};

export class CompanyDetails {
  company_code: string = company;
  user_id: string = "";
  constructor(user_id?: string) {
    this.user_id = user_id ?? "";
  }
}


export const connection: any = {};

export const NumberType_Registered = "Registered";
export const NumberType_Alternate = "Alternate";
