import { arch, freemem, platform, totalmem } from 'os';

export const pcRamUsage = () => {
  const tRam = totalmem() / 1024 / 1024;
  const fRam = freemem() / 1024 / 1024;
  const uRam = tRam - fRam;

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: `${parseInt(tRam)} MB`,
    FreeRAM: `${parseInt(fRam)} MB`,
    UsageRAM: `${parseInt(uRam)} MB`,
  };

  return stats;
};

setInterval(() => {
  const status = pcRamUsage();
  console.clear();
  console.table(status);
}, 1000);
