#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) return console.error('error:', error);

  const tasks = JSON.parse(body);
  const completedTasks = {};

  for (const task of tasks) {
    if (task.completed) {
      completedTasks[task?.userId] = (completedTasks[task?.userId] || 0) + 1;
    }
  }

  console.log(completedTasks);
});
