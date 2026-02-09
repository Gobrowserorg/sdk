export class BrowserPool {
  private size = 0;

  allocate() {
    this.size++;
    return this.size;
  }
}
