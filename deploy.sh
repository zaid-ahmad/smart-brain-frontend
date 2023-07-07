# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init 
git checkout -b main
git add -A
git commit -m "deploy"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:zaidahmad25/smart-brain-frontend.git main:gh-pages

cd -