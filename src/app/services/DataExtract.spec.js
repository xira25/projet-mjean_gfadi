describe('DataExtract service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (DataExtract) {
    expect(DataExtract.getData()).toEqual(3);
  }));
});
