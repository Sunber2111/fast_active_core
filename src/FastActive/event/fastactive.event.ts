class FastActiveStreamEvent {
  name = "";
  page = 1;

  get payloadFilter() {
    return {
      name: this.name,
      page: this.page,
      size: 10,
    };
  }

  onNameChange(name?: string) {
    if (!!name) {
      this.name = name;
    }
  }

  onPageChange(page: number = 1) {
    this.page = page;
  }
}

const fastActiveStreamEvent = new FastActiveStreamEvent();

export default fastActiveStreamEvent;
