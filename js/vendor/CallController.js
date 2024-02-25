class CallController {
  #currentCall = null;

  #callHistory = [];

  constructor() {
    this.#trackCallStatus();
  }

  startCall(phoneNumber, name) {
    if (this.#currentCall) {
      console.warn('You already have a call!');
      return this.#currentCall;
    }

    this.#currentCall = new Call(phoneNumber, name);
  }

  #endCall() {
    if (!this.#currentCall) {
      console.warn('Current call is not exist!');
      return null;
    }

    this.#callHistory.push(Object.freeze(this.#currentCall));
    this.#currentCall = null;
    // console.log(this.#callHistory);
  }

  endCallByCaller() {
    if (!this.#currentCall) {
      console.warn('Current call is not exist!');
      return null;
    }
    this.#currentCall.endCallOutside();
    this.#callHistory.push(Object.freeze(this.#currentCall));
    this.#currentCall = null;
    console.log(this.#callHistory);
  }

  #trackCallStatus() {
    Call.addChangeCallStatusListener((callStatus) => {
      if (callStatus === Call.CALL_STATUSES.rejected || callStatus === Call.CALL_STATUSES.disconnected) {
        this.#endCall();
      }
    });
  }

  get currentCall() {
    return this.#currentCall;
  }

  get callHistory() {
    return this.#callHistory;
  }
}
