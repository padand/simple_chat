#INSTALL

This program requires node and npm to be installed

The best way to install node is via nvm (https://github.com/creationix/nvm)

After installing nvm, run the following:

nvmVersion=0.10.4 &&\

nvm install $nvmVersion &&\

nvm use $nvmVersion &&\

nvm alias default $nvmVersion


#RUN

Install dependencies:

npm install

Run:

node index.js