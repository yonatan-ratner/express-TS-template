# I recommend fixing a specfic tag instead of lts
FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

ENV PATH="$PATH:/root/.local/bin"

# Copy files needed by npm install
COPY package*.json ./

# Install app dependencies
RUN npm install --omit=dev \
    && npm install typescript

# Copy the rest of the app files (see .dockerignore)
COPY . ./

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start"]