cd /root/travis/devops/jobs || exit
if [ -d "Peppa-Admin" ];then
  cd Peppa-Admin || exit
  git pull
else
  git clone git@gitee.com:TravisChenn/Peppa-Admin.git || exit
  cd Peppa-Admin || exit
fi
npm i
pwd
npm run build
if [ -d "/usr/local/nginx/html/lapt-beta" ];then
  rm -rf '/usr/local/nginx/html/lapt-beta'
fi
cp -aRf /root/travis/devops/jobs/Peppa-Admin/dist /usr/local/nginx/html
cd /usr/local/nginx/html || exit
mv dist lapt-beta
nginx -s reload
