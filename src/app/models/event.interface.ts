export interface IEvent {
  id: number;
  name: string;
  owner: string;
  startDate: number;
  durationMinutes: number;
  address: {
    street: string;
    number: string;
    zipcode: string;
    city: string;
    country: string;
  };
  description: string;
}
