import coreApiV2Client from '../utils/coreApiV2Client';

export default {
  getDevices: () => {
    return coreApiV2Client.get('device/');
  }
};
