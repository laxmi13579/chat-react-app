##client folder
1. $npm create vite@latest
2. npm install
3. npm run dev
4. npm install react-router-dom
5. setup tailwind from official doc of tailwind.
6. $npm i @tanstack/react-query axos


##server
1. $npm init -y
2. $npm intall fastify
3. $npm install dotenv
4. $npm install --save-dev @types/node
5. $npm install --save-dev nodemon ts-node 
Note: nodemon helps to restart server after if we make changes and ts-node is to execute ts file.
6. after execution of above cmd make below changes in package.json
    -> THIS
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    }
    -> TO
    "scripts": {
        "dev": "nodemon server.ts"
    }




