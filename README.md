# MechKey Ecommerce

> eCommerce frontend built with React.js / Redux and Airtable database - [check out the site](https://mechkey.netlify.app/)

![mechkey-front](https://user-images.githubusercontent.com/86252224/206742526-d472c7f5-ebfb-421f-a079-72cc0a7e38ff.png)

---

## Sample login

[Go here](https://mechkey.netlify.app/), click login and use example credentials
```
login email: tester@tester.com
password: Tester11!!
```

---

## Features

- User authentication with Auth0
- Full featured shopping cart
- Product search and filter features
- Checkout process
- Stripe payment integration

---

## Make it yours - fork it or download zip

### Env Variables:

Create a .env file in the root and add the following, with values found from corresponding resources:

```
REACT_APP_AUTH_DOMAIN=(from Auth0)
REACT_APP_AUTH_CLIENT_ID=(from Auth0)
REACT_APP_STRIPE_PUBLIC_KEY=(from Stripe)
REACT_APP_STRIPE_SECRET_KEY=(from Stripe)
AIRTABLE_API_KEY=(from Airtable)
AIRTABLE_BASE=(from Airtable)
AIRTABLE_TABLE=(from Airtable)
```

### Install dependencies and run:

```
npm i && npm run dev
```

---

## Tech used

- React
- React Router Dom
- Redux
- Axios
- Styled-components
- Auth0
- Stripe API
- Deployed via Netlify

---

## License

The MIT License

Copyright (c) 2022 Andrew Chang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
