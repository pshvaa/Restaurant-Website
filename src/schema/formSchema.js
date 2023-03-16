import { object, string, number, date } from 'yup';

export const formScheama = object({
  name: string().required("Adınızı daxil edin"),
  phone: number().required("Telefon nömrənizi daxil edin").positive().integer().min(10),
  email: string().email(),
  website: string().url().nullable(),

  createdOn: date().default(() => new Date()),
});