import { User } from '@/models/User';
import { UserApiResponse } from './types';

export const transformUserData = (data: UserApiResponse): User => {
  const user = data.results[0];
  return {
    gender: user.gender,
    name: {
      title: user.name.title,
      first: user.name.first,
      last: user.name.last,
    },
    location: {
      street: {
        number: user.location.street.number,
        name: user.location.street.name,
      },
      city: user.location.city,
      state: user.location.state,
      country: user.location.country,
      postcode: user.location.postcode,
      coordinates: {
        latitude: user.location.coordinates.latitude,
        longitude: user.location.coordinates.longitude,
      },
      timezone: {
        offset: user.location.timezone.offset,
        description: user.location.timezone.description,
      },
    },
    email: user.email,
    dob: {
      date: user.dob.date,
      age: user.dob.age,
    },
    registered: {
      date: user.registered.date,
      age: user.registered.age,
    },
    phone: user.phone,
    cell: user.cell,
    id: {
      name: user.id.name,
      value: user.id.value,
    },
    picture: {
      large: user.picture.large,
      medium: user.picture.medium,
      thumbnail: user.picture.thumbnail,
    },
    nat: user.nat,
  };
};
