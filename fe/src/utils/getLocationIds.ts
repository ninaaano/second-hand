import { LocationData } from '@Types/index';

export const getLocationIds = (
  primaryLocation: LocationData,
  secondaryLocation: LocationData,
) => ({
  primaryLocationId: primaryLocation.locationId,
  ...(secondaryLocation && {
    secondaryLocationId: secondaryLocation.locationId,
  }),
});
