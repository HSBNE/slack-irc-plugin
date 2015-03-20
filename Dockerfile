FROM google/nodejs

COPY . /

RUN npm install && npm install -g forever

ENTRYPOINT forever config.js