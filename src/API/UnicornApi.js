import axios from "axios";
const BASE_URL = "https://ponychallenge.trustpilot.com";

//static API class tying together methods used to communicate with API

class UnicornApi {
  static async request(endpoint, data = {}, method = "get") {
    console.log(
      "API call to endpoint",
      endpoint,
      "data sent: ",
      data,
      "method: ",
      method
    );

    const url = `${BASE_URL}/${endpoint}`;
    const params = method === "post" ? data : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data;
      throw message;
      //throw Array.isArray(message) ? message : [message];
    }
  }

  //individual API routes

  // [POST] /pony-challenge/maze -> create new maze game
  static async getNewMaze(data) {
    let res = await this.request(`pony-challenge/maze`, data, "post");
    return res.maze_id;
  }

  // [GET] /pony-challenge/maze/{maze-id} -> get maze current state
  static async getMazeCurrentState(mazeId) {
    let res = await this.request(`pony-challenge/maze/${mazeId}`);
    return res;
  }

  // [POST] /pony-challenge/maze/{maze-id} -> make next move in the maze
  static async makeMove(data, mazeId) {
    let res = await this.request(`pony-challenge/maze/${mazeId}`, data, "post");
    return res;
  }
}

export default UnicornApi;
