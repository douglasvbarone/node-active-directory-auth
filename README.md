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
