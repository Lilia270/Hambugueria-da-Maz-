### How-To Setup Docker

- docker build -t <your_user>/<name_of_the_project_you_want> .
- docker run -d -p 3000:3000 <your_user>/<name_of_the_project_you_want>

Example:

- docker build -t user1000/hamburgueria .
- docker run -d -p 3000:3000 user1000/hamburgueria

Open your fav browser and go to localhost:3000