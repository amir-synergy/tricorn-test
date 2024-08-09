## Server:
* IP: 147.182.173.213

On update, the following commands should be run to update the server:

```bash

cd /var/www/signal

pm2 stop signal
git pull
npm install
npm run build
pm2 restart signal
pm2 save

# To view logs (optional)
pm2 logs signal
```