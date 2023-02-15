# Active Directory authentication in NodeJS/Express

A basic example of a NodeJS server with Active Directory authentication and a simple VueJS client.

## Configuring

You will need to provide three environment variables using a `.env` file. There is an example of this file called `.env.example`:

- `LDAP_URL`: is the FQDN or IP address of your Active Directory server
- `LDAP_DOMAIN`: is the domain that is configured in your server
- `JWT_SECRET`: is a random secret you should create by yourself

## Running

To keep things simple, run the following commands in two different terminals:

```
cd server/
npm run dev
```

And

```
cd web/
npm run dev
```

## Server

There are three end-points:

- `POST /api/login/`: Expects a JSON with `username` and a `password` in it. Returns a `200 OK` response with a JWT if login was successful, or a `401 Unauthorized` response otherwise.
- `GET /api/public/`: Return a example JSON data whether user is logged in or not.
- `GET /api/protected/`: Return a example JSON data if the user is logged in (in other words, if a valid authorization token was provided) or return a `401 Unauthorized` response otherwise.
