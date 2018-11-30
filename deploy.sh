#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run www:build

# navigate into the build output directory
cd www/.vuepress/dist

# if you are deploying to a custom domain
echo 'www.mokeedev.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f ssh://$USER@mokeedev.review:29418/MoKee/www master:gh-pages

cd -