export default class Api {
  async response(path, method, requestData) {
    try {
      const response = await fetch(path, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      return response.body;
    } catch (error) {
      throw new Error(error);
    }
  }

  async get(path, requestData) {
    console.log({ requestData });

    return this.response(path, 'GET', requestData);
  }

  async post(path, requestData) {
    return this.response(path, 'POST', requestData);
  }
}
