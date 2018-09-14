describe('promisereject', () => {
  it('passes but shows UnhandledPromiseRejectionWarning on App.test.js and Test Results', () => {
    new Promise(() => (expect('ABC').toEqual('DEF')));
  });

  it('fails explicitly, but prints both fail and an error with the same content', (done) => {
    new Promise(() => (expect('ABC').toEqual('DEF'))).then(done).catch(err => done.fail(err));
  });

  it('passes a reference test', () => {
    expect('a').toEqual('a')
  });

  it('fails a reference test with single output', () => {
    expect('a').toEqual('A');
  });
});
