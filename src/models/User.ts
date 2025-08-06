export interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  dob: DateInfo;
  registered: DateInfo;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number | string;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Street {
  number: number;
  name: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface DateInfo {
  date: string;
  age: number;
}

interface ID {
  name: string;
  value: string | null;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
