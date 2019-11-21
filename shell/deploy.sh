cd jobs || exit
if [ -d "Peppa-Admin" ];then
  cd Peppa-Admin || exit
  git pull
else
  git clone https://gitee.com/TravisChenn/Peppa-Admin.git
  cd Peppa-Admin || exit
fi
npm i
npm run build
if [ -d "/usr/local/Cellar/nginx/1.17.3_1/html/lapt-local" ];then
  rm -rf '/usr/local/Cellar/nginx/1.17.3_1/html/lapt-local'
fi
cp -aRf /Users/TravisChen/Desktop/ZhiHui-Package-Cli/jobs/Peppa-Admin/dist /usr/local/Cellar/nginx/1.17.3_1/html
cd /usr/local/Cellar/nginx/1.17.3_1/html || exit
mv dist lapt-local
nginx -s reload
