export type School = {
  Id: number;
  Name: string;
  Caption: string;
  Location: Location;
}

export type Location = {
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  CountryCode: string;
  CountryId: number;
  CountryName: string;
  Latitude: string;
  LocationId: number;
  Longitude: string;
  SchoolId: number;
  State: string;
  StateId: number;
}

export type PopularSchools = {
  getpopularschools: School[];
}