#!/bin/bash

npm install

chown -R 1000:1000 node_modules

npm run build

npm run dev