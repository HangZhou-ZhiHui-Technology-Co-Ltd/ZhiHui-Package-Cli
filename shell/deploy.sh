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
if [ -d "/usr/local/nginx/html/lapt-local" ];then
  rm -rf '/usr/local/nginx/html/lapt-local'
fi
cp -aRf /root/travis/devops/ZhiHui-Package-Cli/jobs/Peppa-Admin/dist /usr/local/nginx/html
cd /usr/local/Cellar/nginx/1.17.3_1/html || exit
mv dist lapt-local
nginx -s reload
