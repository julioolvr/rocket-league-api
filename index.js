const got = require('got');

const BASE_URL = 'https://api.rocketleague.com/api/v1';

class RocketLeagueApiClient {
  constructor({ token, baseUrl = BASE_URL }) {
    this.token = token;
    this.baseUrl = baseUrl;
  }

  getPlayerSkills(id, platform) {
    return this.makeRequest(`/${platform}/playerskills/${id}`);
  }

  getPlayerTitles(id, platform) {
    return this.makeRequest(`/${platform}/playertitles/${id}`);
  }

  getRegions() {
    return this.makeRequest('/regions');
  }

  getPlayerStat(id, platform, statType) {
    return this.makeRequest(`/${platform}/leaderboard/stats/${statType}/${id}`);
  }

  makeRequest(path, method = 'GET', body) {
    return got(`${this.baseUrl}${path}`, {
      method,
      body,
      json: true,
      headers: {
        Authorization: `Token ${this.token}`
      }
    }).then(response => response.body);
  }
}

module.exports = RocketLeagueApiClient;
