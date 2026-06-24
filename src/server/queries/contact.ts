

export type ContactProps = {
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode?: string;
    };
    phoneNumbers: {
      main: string;
      sales?: string;
    };
    emailAddresses: {
      info: string;
      sales?: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (_accountIdArg?: bigint): ContactProps | null => {
  return {
  "title": "Contáctanos",
  "subtitle": "Estamos aquí para ayudarte",
  "messageForm": true,
  "address": true,
  "phone": true,
  "mail": true,
  "schedule": true,
  "map": true,
  "offices": [{
  "id": "office-1",
  "name": "Oficina Santa Cruz de Tenerife",
  "address": {
  "street": "Rambla de Santa Cruz, 100, Local 3",
  "city": "Santa Cruz de Tenerife",
  "state": "Santa Cruz de Tenerife",
  "country": "España"
},
  "phoneNumbers": {
  "main": "+34 622564657"
},
  "emailAddresses": {
  "info": "echinea@inversionesinmobiliariaselmito.com"
},
  "scheduleInfo": {
  "weekdays": "Lunes a Viernes: 9:00 - 19:00",
  "saturday": "Sábado: 10:00 - 14:00",
  "sunday": "Domingo: Cerrado"
},
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rambla%20de%20Santa%20Cruz%2C%20100%2C%20Local%203%2C%20Santa%20Cruz%20de%20Tenerife%2C%20Santa%20Cruz%20de%20Tenerife%2C%2038004",
  "isDefault": true
}]
};
}

