# React Stripe Checkout 

Simple react stripe checkout example

Anonymous users can make a one-time purchase on a product and checkout

## Technologies
- React 
- Tailwind CSS
- HTML
- CSS
- Typescript
- Stripe
  - [Stripe Checkout Docs](https://stripe.com/docs/payments/checkout)    

## Usage

```bash
$ git clone git@github.com:brysonbw/react-stripe-checkout.git

$ cd react-stripe-checkout

$ rm -fr .git

$ npm install # or pnpm install or yarn install
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), run:

```bash
$ npm start

open http://localhost:3000 to view it in the browser
```

## Testing Stripe Checkout

When testing interactively, use a card number, such as 4242 4242 4242 4242. Enter the card number in the Dashboard or in any payment form.

- Use a valid future date, such as 12/34.
- Use any three-digit CVC (four digits for American Express cards).
- Use any value you like for other form fields.


## Building

To create a production version of your app:

```bash
$ npm run build
```