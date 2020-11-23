import { TestePipePipe } from './teste-pipe.pipe';

describe('TestePipePipe', () => {
  let pipe: TestePipePipe;

  beforeEach(() => {
    pipe = new TestePipePipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve retornar xyz', () => {
    expect(pipe.transform(null)).toEqual("xyz");
  });
});
