#!/bin/bash

PREV="$1"
NEXT=wlk-instance

echo old:
git show -s --oneline $PREV | cat
echo new:
git show -s --oneline $NEXT | cat
echo press ENTER to continue
read x

git checkout $PREV
rm -r public
npm ci
npm run prod
mv public public-old
git checkout -- .

git checkout $NEXT
rm -r public
npm ci
npm run prod
mv public public-new
git checkout -- .

rm -r public
mkdir public
cp -r public-old/* public
cp -r public-new/* public

rm -r public-old public-new
