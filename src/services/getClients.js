const url = "https://crm-alsa-backend-production.up.railway.app/api/clientes/all";
const options = {
  method: 'GET',
  headers: {
    'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjY2ODYyNjY0fQ.IWGsWOdV8-1fy5lvAPxMxi11eX7DRE30omWwAnjkONk'
  }
}

export default function getClients() {
  return fetch(url, options)
    .then(res => res.json())
    .then(response => {
      const data = response
    });
}