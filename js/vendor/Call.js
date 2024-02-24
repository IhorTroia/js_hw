class Call {
  #debugFlag = true;

  #connectionTimeout = 2000;

  #connectionTimer = null;

  #inProgressTimeout = 3000;

  #inProgressTimer = null;

  static CALL_STATUSES = {
    disconnected: 'disconnected',
    rejected: 'rejected',
    connecting: 'connecting',
    inProgress: 'in progress',
  };

  static changeStatusHandlers = [];

  #timerId = null;

  #duration = 0;

  #startDate = null;

  #endDate = null;

  #phone = null;

  #status = null;

  constructor(phoneNumber) {
    if (!Call.validatePhoneNumber(phoneNumber)) throw new Error('Number is not valid!');

    this.#phone = phoneNumber;
    this.#changeCallStatus(Call.CALL_STATUSES.connecting);
  }

  #changeCallStatus(status) {
    this.#status = status;

    if (this.#status === Call.CALL_STATUSES.connecting) {
      this.#debug(Call.CALL_STATUSES.connecting);
      this.#startCalcCallDuration();
      this.#startDate = new Date();
      this.#connectionTimer = setTimeout(
        () => this.#changeCallStatus(Call.#getRandomCallStatus()),
        this.#connectionTimeout,
      );
    }

    if (this.#status === Call.CALL_STATUSES.inProgress) {
      this.#debug(Call.CALL_STATUSES.inProgress);
      this.#inProgressTimer = setTimeout(
        () => this.#changeCallStatus(Call.CALL_STATUSES.disconnected),
        this.#inProgressTimeout,
      );
    }

    if (this.#status === Call.CALL_STATUSES.rejected) {
      this.#debug(Call.CALL_STATUSES.rejected);
      this.#endCall();
    }

    if (this.#status === Call.CALL_STATUSES.disconnected) {
      this.#debug(Call.CALL_STATUSES.disconnected);
      this.#endCall();
    }

    this.#callStatusEventHandlers(this.#status);
  }

  #endCall() {
    clearTimeout(this.#connectionTimer);
    clearTimeout(this.#inProgressTimer);
    this.#connectionTimer = null;
    this.#inProgressTimer = null;

    this.#endCalcCallDuration();
    this.#endDate = new Date();
    console.log(this);
  }

  endCallOutside() {
    this.#changeCallStatus(Call.CALL_STATUSES.disconnected);
  }

  static #getRandomCallStatus() {
    const randomNum = Math.floor(Math.random() * 10);
    return randomNum >= 5 ? Call.CALL_STATUSES.inProgress : Call.CALL_STATUSES.rejected;
  }

  #startCalcCallDuration() {
    this.#timerId = setInterval(() => {
      this.#duration += 1;
      console.log(this.#duration);
    }, 1000);
  }

  #endCalcCallDuration() {
    clearInterval(this.#timerId);
    this.#timerId = null;
  }

  static validatePhoneNumber(phoneNumber) {
    let validated = false;

    if (typeof phoneNumber === 'string' && phoneNumber.trim().length > 2) {
      validated = true;
    }
    return validated;
  }

  #debug(data) {
    if (!this.#debugFlag) return;
    if (typeof data === 'object') console.table(data);
    console.log(data);
  }

  #callStatusEventHandlers(...data) {
    Call.changeStatusHandlers.forEach((handler) => {
      handler(...data);
    });
  }

  static addChangeCallStatusListener(handler) {
    if (typeof handler !== 'function') return null;

    Call.changeStatusHandlers.push(handler);
  }

  static removeChangeCallStatusListener(handler) {
    if (typeof handler !== 'function') return;
    if (Call.changeStatusHandlers.length === 0) return;

    const index = Call.changeStatusHandlers.findIndex((item) => handler === item);

    Call.changeStatusHandlers.splice(index, 1);
  }
}
