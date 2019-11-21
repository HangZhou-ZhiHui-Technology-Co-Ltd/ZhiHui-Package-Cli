cp -aRf /Users/TravisChen/Desktop/ZhiHui-Package-Cli/lapt-beta/Peppa-Admin/dist /usr/local/Cellar/nginx/1.17.3_1/html
cd /usr/local/Cellar/nginx/1.17.3_1/html || exit
mv dist lapt-local
nginx -s reload
