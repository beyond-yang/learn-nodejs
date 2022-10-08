class BaseModel {
  constructor(data, message) {
    // 兼容只传一个参数，为字符串的情况
    if (typeof data === 'string') {
      this.message = message;
      data = null;
      message = null;
    }
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.error = 0;
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.error = -1;
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
}