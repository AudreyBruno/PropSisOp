import http from 'http';
import { pcRamUsage } from './PcRamUsage.js';

const host = 'http://localhost';
const port = 3333;

const status = pcRamUsage();

http
  .createServer((req, res) => {
    res.end(JSON.stringify(status, null, 2));
  })
  .listen(port, () => console.log(`Server is running in ${host}:${port}`));
