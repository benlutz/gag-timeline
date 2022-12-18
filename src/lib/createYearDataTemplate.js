const fs = require('fs');

const createData = (count) => {
  const data = [];

  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      year: null,
    });
  }

  return data;
};

const content = createData(377);

fs.writeFile(
  './episodeYearDataTemplate.json',
  JSON.stringify(content),
  (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  }
);
