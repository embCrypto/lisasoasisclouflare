import React, { createContext, useContext, useState, useEffect } from 'react';

const CountryContext = createContext();

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};

export const CountryProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(true);
  const [locationError, setLocationError] = useState(null);

  // Geolocation detection
  useEffect(() => {
    const detectUserLocation = async () => {
      try {
        setLocationLoading(true);
        setLocationError(null);
        
        // First try IP-based geolocation (more reliable)
        const response = await fetch('https://ipapi.co/json/');
        
        if (!response.ok) {
          throw new Error('IP geolocation service unavailable');
        }
        
        const data = await response.json();
        
        if (data.country_code) {
          const countryCode = data.country_code.toLowerCase();
          
          // Define regions
          const usaCodes = ['us'];
          const europeCodes = [
            'at', 'be', 'bg', 'hr', 'cy', 'cz', 'dk', 'ee', 'fi', 'fr',
            'de', 'gr', 'hu', 'ie', 'it', 'lv', 'lt', 'lu', 'mt', 'nl',
            'pl', 'pt', 'ro', 'sk', 'si', 'es', 'se', 'gb', 'ch', 'no',
            'is', 'li', 'mc', 'sm', 'va', 'ad', 'by', 'md', 'ua', 'ru'
          ];
          
          let locationData;
          
          if (usaCodes.includes(countryCode)) {
            locationData = {
              region: 'usa',
              country: data.country_name,
              countryCode: countryCode.toUpperCase(),
              currency: '$',
              currencySymbol: '$',
              measurementSystem: 'imperial',
              timezone: data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
              detectionMethod: 'ip'
            };
          } else if (europeCodes.includes(countryCode)) {
            locationData = {
              region: 'europe',
              country: data.country_name,
              countryCode: countryCode.toUpperCase(),
              currency: '€',
              currencySymbol: '€',
              measurementSystem: 'metric',
              timezone: data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
              detectionMethod: 'ip'
            };
          } else {
            // Default to international
            locationData = {
              region: 'international',
              country: data.country_name,
              countryCode: countryCode.toUpperCase(),
              currency: '$',
              currencySymbol: '$',
              measurementSystem: 'metric',
              timezone: data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
              detectionMethod: 'ip'
            };
          }
          
          setUserLocation(locationData);
          
          // Store in localStorage for future sessions
          localStorage.setItem('userLocation', JSON.stringify(locationData));
          
        } else {
          throw new Error('No country data received');
        }
      } catch (error) {
        console.log('IP geolocation failed, trying fallback methods...', error);
        
        // Fallback to timezone-based detection
        try {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          
          // US timezones
          const usTimezones = [
            'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
            'America/Anchorage', 'Pacific/Honolulu', 'America/Phoenix', 'America/Detroit'
          ];
          
          // European timezones
          const europeTimezones = [
            'Europe/London', 'Europe/Berlin', 'Europe/Paris', 'Europe/Rome', 'Europe/Madrid',
            'Europe/Amsterdam', 'Europe/Vienna', 'Europe/Brussels', 'Europe/Prague',
            'Europe/Warsaw', 'Europe/Budapest', 'Europe/Bucharest', 'Europe/Athens',
            'Europe/Stockholm', 'Europe/Helsinki', 'Europe/Oslo', 'Europe/Copenhagen',
            'Europe/Dublin', 'Europe/Lisbon', 'Europe/Zurich'
          ];
          
          let fallbackLocation;
          
          if (usTimezones.some(tz => timezone.includes(tz.split('/')[1]))) {
            fallbackLocation = {
              region: 'usa',
              country: 'United States',
              countryCode: 'US',
              currency: '$',
              currencySymbol: '$',
              measurementSystem: 'imperial',
              timezone: timezone,
              detectionMethod: 'timezone'
            };
          } else if (europeTimezones.some(tz => timezone.includes(tz.split('/')[1]))) {
            fallbackLocation = {
              region: 'europe',
              country: 'Europe',
              countryCode: 'EU',
              currency: '€',
              currencySymbol: '€',
              measurementSystem: 'metric',
              timezone: timezone,
              detectionMethod: 'timezone'
            };
          } else {
            fallbackLocation = {
              region: 'international',
              country: 'International',
              countryCode: 'XX',
              currency: '$',
              currencySymbol: '$',
              measurementSystem: 'metric',
              timezone: timezone,
              detectionMethod: 'timezone'
            };
          }
          
          setUserLocation(fallbackLocation);
          localStorage.setItem('userLocation', JSON.stringify(fallbackLocation));
          
        } catch (timezoneError) {
          console.error('Timezone detection also failed:', timezoneError);
          
          // Final fallback
          const defaultLocation = {
            region: 'unknown',
            country: 'Unknown',
            countryCode: 'XX',
            currency: '$',
            currencySymbol: '$',
            measurementSystem: 'metric',
            timezone: 'UTC',
            detectionMethod: 'default'
          };
          
          setUserLocation(defaultLocation);
          setLocationError('Location detection failed');
        }
      } finally {
        setLocationLoading(false);
      }
    };

    // Check if we have cached location data first
    const cachedLocation = localStorage.getItem('userLocation');
    if (cachedLocation) {
      try {
        const parsedLocation = JSON.parse(cachedLocation);
        setUserLocation(parsedLocation);
        setLocationLoading(false);
        
        // Still detect in background for accuracy, but don't show loading
        setTimeout(() => {
          detectUserLocation();
        }, 1000);
      } catch (e) {
        // If cached data is corrupted, detect fresh
        detectUserLocation();
      }
    } else {
      detectUserLocation();
    }
  }, []);

  // Helper function to get localized currency for specific countries
  const getLocalizedCurrency = () => {
    if (!userLocation) return '$';
    
    // Special cases for specific countries
    if (userLocation.countryCode === 'RO') return ' lei';
    if (userLocation.countryCode === 'GB') return ' £';
    if (userLocation.countryCode === 'CH') return ' CHF';
    if (userLocation.countryCode === 'NO') return ' kr';
    if (userLocation.countryCode === 'SE') return ' kr';
    if (userLocation.countryCode === 'DK') return ' kr';
    if (userLocation.countryCode === 'PL') return ' zł';
    if (userLocation.countryCode === 'CZ') return ' Kč';
    if (userLocation.countryCode === 'HU') return ' Ft';
    
    // Default regional currencies
    return userLocation.currency;
  };

  // Helper function to get temperature unit
  const getTemperatureUnit = () => {
    if (!userLocation) return '°C';
    return userLocation.measurementSystem === 'imperial' ? '°F' : '°C';
  };

  // Helper function to get volume unit
  const getVolumeUnit = () => {
    if (!userLocation) return 'ml';
    return userLocation.measurementSystem === 'imperial' ? 'fl oz' : 'ml';
  };

  // Helper function to get weight unit
  const getWeightUnit = () => {
    if (!userLocation) return 'g';
    return userLocation.measurementSystem === 'imperial' ? 'oz' : 'g';
  };

  // Helper function to convert temperatures
  const convertTemperature = (celsius) => {
    if (!userLocation || userLocation.measurementSystem === 'metric') {
      return `${celsius}°C`;
    }
    const fahrenheit = Math.round((celsius * 9/5) + 32);
    return `${fahrenheit}°F`;
  };

  // Helper function to convert volumes (from ml)
  const convertVolume = (milliliters) => {
    if (!userLocation || userLocation.measurementSystem === 'metric') {
      return `${milliliters}ml`;
    }
    const fluidOunces = Math.round((milliliters * 0.033814) * 10) / 10;
    return `${fluidOunces} fl oz`;
  };

  // Helper function to convert weights (from grams)
  const convertWeight = (grams) => {
    if (!userLocation || userLocation.measurementSystem === 'metric') {
      return `${grams}g`;
    }
    const ounces = Math.round((grams * 0.035274) * 10) / 10;
    return `${ounces} oz`;
  };

  // Helper function to get location-based welcome message
  const getLocationWelcomeMessage = (messages) => {
    if (!userLocation || locationLoading) return null;
    
    switch (userLocation.region) {
      case 'usa':
        return messages.usa;
      case 'europe':
        return messages.europe;
      case 'international':
        return messages.international?.replace('{country}', userLocation.country);
      default:
        return messages.unknown;
    }
  };

  const value = {
    userLocation,
    locationLoading,
    locationError,
    getLocalizedCurrency,
    getTemperatureUnit,
    getVolumeUnit,
    getWeightUnit,
    convertTemperature,
    convertVolume,
    convertWeight,
    getLocationWelcomeMessage
  };

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  );
};