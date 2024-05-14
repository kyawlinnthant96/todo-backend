# Project setup

## Environment Variables
 
This project requires the following environment variables:
 
- `DATABASE`
- `DATABASE_LOCAL`
- `DATABASE_PASSWORD`
- `PORT`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `JWT_COOKIE_EXPIRES_IN`

Make sure to set these environment variables in your development environment.

```bash 
git clone https://github.com/kyawlinnthant96/todo-backend.git
```
Navigate to the project directory:

```bash
cd todo-backend
```

Install dependencies:

```bash
npm install
```
### To start the production Server
 
```bash
npm run start:prod
```

Alternatively you can run docker compose directly after `cd` into project directory

```bash
docker compose up -d
```
